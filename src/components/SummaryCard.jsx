import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cx(...args) {
  return twMerge(clsx(...args));
}

export const SummaryCard = ({ title, amount, icon: Icon, badge, colorType }) => {
  const colorMap = {
    blue: 'text-blue-500 bg-blue-500/10',
    green: 'text-income bg-income/10',
    red: 'text-expense bg-expense/10',
    yellow: 'text-yellow-500 bg-yellow-500/10'
  };

  return (
    <div className="bg-card dark:bg-card-dark rounded-xl p-5 border border-border dark:border-border-dark shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark">{title}</p>
          <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark">{amount}</h3>
        </div>
        <div className={cx("p-2.5 rounded-lg", colorMap[colorType])}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      {badge && (
        <div className="mt-4 flex items-center">
          <span className={cx(
            "text-xs font-semibold px-2 py-1 rounded-full",
            badge.startsWith('+') ? "text-income bg-income/10" : "text-expense bg-expense/10"
          )}>
            {badge}
          </span>
          <span className="text-xs text-text-secondary dark:text-text-secondary-dark ml-2">vs last month</span>
        </div>
      )}
    </div>
  );
};
