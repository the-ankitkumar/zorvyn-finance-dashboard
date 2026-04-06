import React, { createContext, useContext, useEffect, useState } from 'react';
import { mockTransactions } from '../data/mockTransactions';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [role, setRole] = useState('Viewer'); // Viewer or Admin
  const [transactions, setTransactions] = useState(mockTransactions);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);
  
  const switchRole = (newRole) => setRole(newRole);

  const addTransaction = (transaction) => {
    const newTx = {
      ...transaction,
      id: Date.now().toString(),
    };
    setTransactions(prev => [newTx, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  return (
    <AppContext.Provider value={{
      role,
      switchRole,
      isDarkMode,
      toggleTheme,
      transactions,
      addTransaction,
      deleteTransaction
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
