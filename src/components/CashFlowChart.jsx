import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mockMonthlyStats } from '../data/mockTransactions';

export const CashFlowChart = () => {
  return (
    <div className="bg-card dark:bg-card-dark p-5 rounded-xl border border-border dark:border-border-dark shadow-sm">
      <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-4">Monthly Cash Flow</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockMonthlyStats} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2a2d45" opacity={0.5} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} tickFormatter={(value) => `₹${value/1000}k`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1a1a35', borderColor: '#2a2d45', color: '#fff', borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Area type="monotone" dataKey="income" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" />
            <Area type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={3} fill="none" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
