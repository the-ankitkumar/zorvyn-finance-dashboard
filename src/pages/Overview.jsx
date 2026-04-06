import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, TrendingDown, PiggyBank } from 'lucide-react';
import { SummaryCard } from '../components/SummaryCard';
import { CashFlowChart } from '../components/CashFlowChart';
import { SpendingDonut } from '../components/SpendingDonut';
import { summaryData, mockCategoryBreakdown } from '../data/mockTransactions';
import { useAppContext } from '../context/AppContext';

export const Overview = () => {
  const { role } = useAppContext();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark">Dashboard Overview</h1>
          <p className="text-text-secondary dark:text-text-secondary-dark mt-1">Welcome back. Here's your financial summary.</p>
        </div>
        <div className="hidden md:flex bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-semibold border border-primary/20">
          Role: {role}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard 
          title="Net Balance" 
          amount={formatCurrency(summaryData.netBalance)} 
          icon={Wallet} 
          colorType="blue" 
        />
        <SummaryCard 
          title="Total Income" 
          amount={formatCurrency(summaryData.totalIncome)} 
          icon={TrendingUp} 
          badge="+18%" 
          colorType="green" 
        />
        <SummaryCard 
          title="Total Expense" 
          amount={formatCurrency(summaryData.totalExpense)} 
          icon={TrendingDown} 
          badge="-4%" 
          colorType="red" 
        />
        <SummaryCard 
          title="Savings Rate" 
          amount={`${summaryData.savingsRate}%`} 
          icon={PiggyBank} 
          colorType="yellow" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <CashFlowChart />
        </div>
        <div>
          <SpendingDonut />
        </div>
      </div>

      <div className="bg-card dark:bg-card-dark rounded-xl border border-border dark:border-border-dark p-6 mt-6 w-full shadow-sm">
        <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-4">Top Spending Categories</h3>
        <div className="space-y-4">
          {mockCategoryBreakdown.sort((a,b) => b.value - a.value).slice(0, 4).map((cat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-text-primary dark:text-text-primary-dark">{cat.name}</span>
                <span className="text-text-secondary dark:text-text-secondary-dark">{formatCurrency(cat.value)}</span>
              </div>
              <div className="w-full bg-border dark:bg-border-dark rounded-full h-2">
                <div 
                  className="h-2 rounded-full" 
                  style={{ width: `${(cat.value / summaryData.totalExpense) * 100}%`, backgroundColor: cat.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
