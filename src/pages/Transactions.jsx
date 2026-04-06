import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { TransactionTable } from '../components/TransactionTable';
import { AddTransactionModal } from '../components/AddTransactionModal';
import { useAppContext } from '../context/AppContext';

export const Transactions = () => {
  const { role } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 flex flex-col h-full"
    >
      <div className="flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark">Transactions</h1>
          <p className="text-text-secondary dark:text-text-secondary-dark mt-1">View and manage your recent activity.</p>
        </div>
        
        {role === 'Admin' && (
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg flex items-center gap-2 text-sm font-medium transition-colors shadow-sm shadow-primary/20"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Transaction</span>
          </button>
        )}
      </div>

      <div className="flex-1">
        <TransactionTable />
      </div>

      <AddTransactionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </motion.div>
  );
};
