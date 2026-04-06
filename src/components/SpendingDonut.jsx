import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { mockCategoryBreakdown } from '../data/mockTransactions';

export const SpendingDonut = () => {
  return (
    <div className="bg-card dark:bg-card-dark p-5 rounded-xl border border-border dark:border-border-dark shadow-sm">
      <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-4">Spending Breakdown</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={mockCategoryBreakdown}
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {mockCategoryBreakdown.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#1a1a35', borderColor: '#2a2d45', color: '#fff', borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
              formatter={(value) => `₹${value}`}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
