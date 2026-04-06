import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Target, Lightbulb, AlertTriangle, ShieldCheck } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { InsightCard } from '../components/InsightCard';

const comparisonData = [
  { name: 'Food', thisMonth: 12500, lastMonth: 10200 },
  { name: 'Shopping', thisMonth: 8500, lastMonth: 11000 },
  { name: 'Transport', thisMonth: 2685, lastMonth: 3100 },
  { name: 'Utilities', thisMonth: 5500, lastMonth: 5200 },
  { name: 'Entertain', thisMonth: 4500, lastMonth: 2800 },
];

export const Insights = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark">Financial Insights</h1>
        <p className="text-text-secondary dark:text-text-secondary-dark mt-1">Actionable analysis of your spending habits.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InsightCard 
          title="Highest Spend" 
          value="Food & Dining" 
          description="You've spent ₹12,500 on Food this month, which is 22% higher than last month." 
          icon={TrendingDown} 
          colorType="red" 
        />
        <InsightCard 
          title="Budget Health" 
          value="Excellent" 
          description="Your overall spending is comfortably within limits. Savings rate is at 79%." 
          icon={ShieldCheck} 
          colorType="green" 
        />
        <InsightCard 
          title="Savings Goal" 
          value="₹1,50,000" 
          description="You are 86% of the way to your Q1 savings goal. Keep it up!" 
          icon={Target} 
          colorType="purple" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-card dark:bg-card-dark rounded-xl border border-border dark:border-border-dark p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-4">Top Categories: This vs Last Month</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2a2d45" opacity={0.5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} tickFormatter={(val) => `₹${val/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a35', borderColor: '#2a2d45', color: '#fff', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{fill: '#2a2d45', opacity: 0.2}}
                />
                <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }} />
                <Bar dataKey="thisMonth" name="This Month" fill="#7c3aed" radius={[4, 4, 0, 0]} />
                <Bar dataKey="lastMonth" name="Last Month" fill="#64748b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card dark:bg-card-dark rounded-xl border border-border dark:border-border-dark p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full -z-0" />
            <div className="flex gap-4 relative z-10">
              <div className="p-3 bg-yellow-500/20 text-yellow-500 rounded-lg shrink-0 h-fit">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-2">Smart Recommendation</h3>
                <p className="text-text-secondary dark:text-text-secondary-dark text-sm leading-relaxed mb-4">
                  Consider setting a strict budget of ₹10,000 for Food & Dining next month. Preparing more meals at home could save you an estimated ₹3,500.
                </p>
                <button className="text-sm font-medium text-primary hover:text-primary-hover transition-colors">Setup Budget Rule →</button>
              </div>
            </div>
          </div>

          <div className="bg-card dark:bg-card-dark rounded-xl border border-border dark:border-border-dark p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-expense/5 rounded-bl-full -z-0" />
            <div className="flex gap-4 relative z-10">
              <div className="p-3 bg-expense/10 text-expense rounded-lg shrink-0 h-fit">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-2">Subscription Alert</h3>
                <p className="text-text-secondary dark:text-text-secondary-dark text-sm leading-relaxed mb-4">
                  You have 3 active entertainment subscriptions (Netflix, Prime, Spotify) costing ₹1,548/month. Reviewing these could optimize your fixed expenses.
                </p>
                <button className="text-sm font-medium text-expense hover:text-red-600 transition-colors">Review Subscriptions →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
