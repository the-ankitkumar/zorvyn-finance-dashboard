import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ReceiptText, BarChart3, Moon, Sun, Menu, X, Wallet } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cx(...args) {
  return twMerge(clsx(...args));
}

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { role, switchRole, isDarkMode, toggleTheme } = useAppContext();

  const navItems = [
    { name: 'Overview', path: '/', icon: LayoutDashboard },
    { name: 'Transactions', path: '/transactions', icon: ReceiptText },
    { name: 'Insights', path: '/insights', icon: BarChart3 },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cx(
        "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar dark:bg-sidebar-dark border-r border-border dark:border-border-dark flex flex-col transition-transform duration-300 ease-in-out md:static md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo area */}
        <div className="h-16 flex items-center px-6 border-b border-border dark:border-border-dark justify-between md:justify-start">
          <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
            <Wallet className="w-6 h-6" />
            <span className="text-text-primary dark:text-text-primary-dark">Zorvyn</span>
          </div>
          <button className="md:hidden" onClick={toggleSidebar}>
            <X className="w-5 h-5 text-text-secondary dark:text-text-secondary-dark" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => { if(window.innerWidth < 768) toggleSidebar(); }}
              className={({ isActive }) => cx(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200",
                isActive 
                  ? "bg-primary text-white" 
                  : "text-text-secondary dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 hover:text-text-primary dark:hover:text-text-primary-dark"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Bottom actions */}
        <div className="p-4 border-t border-border dark:border-border-dark space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-text-secondary dark:text-text-secondary-dark uppercase tracking-wider px-1">Role</label>
            <select 
              value={role}
              onChange={(e) => switchRole(e.target.value)}
              className="bg-card dark:bg-card-dark text-text-primary dark:text-text-primary-dark text-sm rounded-lg border border-border dark:border-border-dark px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="Viewer">Viewer</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            <span className="flex items-center gap-2">
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};
