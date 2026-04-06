import React, { useState } from 'react';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cx(...args) {
  return twMerge(clsx(...args));
}

export const TransactionTable = () => {
  const { transactions } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  const categories = ['All', ...new Set(transactions.map(t => t.category))].sort();

  let filtered = transactions.filter(t => {
    const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || t.type === filterType;
    const matchesCat = filterCategory === 'All' || t.category === filterCategory;
    return matchesSearch && matchesType && matchesCat;
  });

  filtered = filtered.sort((a, b) => {
    let result = 0;
    if (sortBy === 'date') {
      result = new Date(a.date) - new Date(b.date);
    } else if (sortBy === 'amount') {
      result = a.amount - b.amount;
    }
    return sortOrder === 'asc' ? result : -result;
  });

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className="bg-card dark:bg-card-dark rounded-xl border border-border dark:border-border-dark shadow-sm overflow-hidden flex flex-col h-[600px]">
      
      {/* Controls */}
      <div className="p-4 border-b border-border dark:border-border-dark space-y-4 md:space-y-0 md:flex items-center gap-4 bg-gray-50/50 dark:bg-white/5">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-3 text-text-secondary dark:text-text-secondary-dark" />
          <input 
            type="text" 
            placeholder="Search description..." 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg bg-background dark:bg-background-dark border border-border dark:border-border-dark text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary dark:text-text-primary-dark"
          />
        </div>
        
        <div className="flex gap-4">
          <select 
            value={filterType} 
            onChange={e => setFilterType(e.target.value)}
            className="px-3 py-2 rounded-lg bg-background dark:bg-background-dark border border-border dark:border-border-dark text-sm text-text-primary dark:text-text-primary-dark focus:outline-none focus:border-primary"
          >
            <option value="All">All Types</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          
          <select 
            value={filterCategory} 
            onChange={e => setFilterCategory(e.target.value)}
            className="px-3 py-2 rounded-lg bg-background dark:bg-background-dark border border-border dark:border-border-dark text-sm text-text-primary dark:text-text-primary-dark focus:outline-none focus:border-primary"
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center h-full">
            <Filter className="w-12 h-12 text-text-secondary dark:text-text-secondary-dark mb-4 opacity-50" />
            <p className="text-text-primary dark:text-text-primary-dark font-medium">No transactions found</p>
            <p className="text-text-secondary dark:text-text-secondary-dark text-sm mt-1">Try adjusting your filters</p>
          </div>
        ) : (
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-text-secondary dark:text-text-secondary-dark uppercase bg-gray-50/50 dark:bg-sidebar-dark sticky top-0 z-10 border-b border-border dark:border-border-dark">
              <tr>
                <th className="px-6 py-4 cursor-pointer hover:text-text-primary dark:hover:text-white transition-colors" onClick={() => toggleSort('date')}>
                  <div className="flex items-center gap-1">Date <ArrowUpDown className="w-3 h-3" /></div>
                </th>
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4 cursor-pointer hover:text-text-primary dark:hover:text-white transition-colors text-right" onClick={() => toggleSort('amount')}>
                  <div className="flex items-center gap-1 justify-end">Amount <ArrowUpDown className="w-3 h-3" /></div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border dark:divide-border-dark">
              {filtered.map(tx => (
                <tr key={tx.id} className="hover:bg-gray-50/50 dark:hover:bg-sidebar-dark/50 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap text-text-secondary dark:text-text-secondary-dark">{new Date(tx.date).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric'})}</td>
                  <td className="px-6 py-4 font-medium text-text-primary dark:text-text-primary-dark">{tx.description}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300">
                      {tx.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cx(
                      "px-2.5 py-1 rounded-md text-xs font-semibold",
                      tx.type === 'Income' ? 'text-income bg-income/10' : 'text-expense bg-expense/10'
                    )}>
                      {tx.type}
                    </span>
                  </td>
                  <td className={cx(
                    "px-6 py-4 whitespace-nowrap text-right font-medium",
                    tx.type === 'Income' ? 'text-income' : 'text-text-primary dark:text-text-primary-dark'
                  )}>
                    {tx.type === 'Income' ? '+' : '-'}{formatCurrency(tx.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
