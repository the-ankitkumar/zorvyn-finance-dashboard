import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const AddTransactionModal = ({ isOpen, onClose }) => {
  const { addTransaction } = useAppContext();
  
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    description: '',
    category: 'Food & Dining',
    type: 'Expense',
    amount: ''
  });

  if (!isOpen) return null;

  const categories = ['Food & Dining', 'Shopping', 'Entertainment', 'Transportation', 'Travel', 'Utilities', 'Investment', 'Salary', 'Freelance', 'Bonus'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;
    addTransaction({
      ...formData,
      amount: Number(formData.amount)
    });
    setFormData({ ...formData, description: '', amount: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-card dark:bg-card-dark rounded-xl shadow-xl w-full max-w-md border border-border dark:border-border-dark overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-border dark:border-border-dark">
          <h2 className="text-xl font-bold text-text-primary dark:text-text-primary-dark">Add Transaction</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors text-text-secondary dark:text-text-secondary-dark">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary dark:text-text-secondary-dark mb-1">Type</label>
            <div className="grid grid-cols-2 gap-2">
              <button 
                type="button" 
                onClick={() => setFormData({...formData, type: 'Income'})}
                className={`py-2 px-4 text-sm font-medium rounded-lg border transition-colors ${formData.type === 'Income' ? 'bg-income/20 text-income border-income/50' : 'bg-transparent border-border dark:border-border-dark text-text-secondary dark:text-text-secondary-dark hover:bg-gray-50 dark:hover:bg-white/5'}`}
              >Income</button>
              <button 
                type="button" 
                onClick={() => setFormData({...formData, type: 'Expense'})}
                className={`py-2 px-4 text-sm font-medium rounded-lg border transition-colors ${formData.type === 'Expense' ? 'bg-expense/20 text-expense border-expense/50' : 'bg-transparent border-border dark:border-border-dark text-text-secondary dark:text-text-secondary-dark hover:bg-gray-50 dark:hover:bg-white/5'}`}
              >Expense</button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary dark:text-text-secondary-dark mb-1">Date</label>
            <input 
              type="date" 
              required
              value={formData.date}
              onChange={e => setFormData({...formData, date: e.target.value})}
              className="w-full px-3 py-2 rounded-lg bg-background dark:bg-background-dark border border-border dark:border-border-dark text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary dark:text-text-primary-dark color-scheme-dark"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary dark:text-text-secondary-dark mb-1">Description</label>
            <input 
              type="text" 
              required
              placeholder="e.g. Groceries"
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              className="w-full px-3 py-2 rounded-lg bg-background dark:bg-background-dark border border-border dark:border-border-dark text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary dark:text-text-primary-dark"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary dark:text-text-secondary-dark mb-1">Category</label>
              <select 
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
                className="w-full px-3 py-2 rounded-lg bg-background dark:bg-background-dark border border-border dark:border-border-dark text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary dark:text-text-primary-dark"
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary dark:text-text-secondary-dark mb-1">Amount (₹)</label>
              <input 
                type="number" 
                required
                min="1"
                placeholder="0.00"
                value={formData.amount}
                onChange={e => setFormData({...formData, amount: e.target.value})}
                className="w-full px-3 py-2 rounded-lg bg-background dark:bg-background-dark border border-border dark:border-border-dark text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary dark:text-text-primary-dark"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-medium rounded-lg border border-border dark:border-border-dark text-text-primary dark:text-text-primary-dark hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2.5 text-sm font-medium rounded-lg bg-primary hover:bg-primary-hover text-white flex items-center transition-colors shadow-sm shadow-primary/20"
            >
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
