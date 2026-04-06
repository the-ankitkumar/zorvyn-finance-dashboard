import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cx(...args) {
  return twMerge(clsx(...args));
}

export const InsightCard = ({ title, value, description, icon: Icon, colorType }) => {
  const colorMap = {
    purple: 'text-primary bg-primary/10 border-primary/20',
    green: 'text-income bg-income/10 border-income/20',
    red: 'text-expense bg-expense/10 border-expense/20',
    blue: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    yellow: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20'
  };

  return (
    <div className={cx("rounded-xl p-5 border shadow-sm relative overflow-hidden group", colorMap[colorType] ? colorMap[colorType].replace('text-', 'bg-card dark:bg-card-dark ') : "bg-card dark:bg-card-dark border-border dark:border-border-dark")}>
      {/* Decorative gradient blob */}
      <div className={cx(
        "absolute -right-8 -top-8 w-24 h-24 rounded-full blur-2xl opacity-20 transition-opacity group-hover:opacity-40",
         colorMap[colorType] ? colorMap[colorType].split(' ')[0].replace('text-', 'bg-') : 'bg-primary'
      )} />
      
      <div className="flex items-start gap-4">
        <div className={cx("p-3 rounded-lg shrink-0", colorMap[colorType] ? colorMap[colorType].split(' ')[1] : 'bg-gray-100 dark:bg-white/5')}>
          <Icon className={cx("w-6 h-6", colorMap[colorType] ? colorMap[colorType].split(' ')[0] : 'text-text-primary dark:text-white')} />
        </div>
        <div className="space-y-1 relative z-10">
          <p className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark">{title}</p>
          <h3 className="text-xl font-bold text-text-primary dark:text-text-primary-dark">{value}</h3>
          <p className="text-sm text-text-secondary dark:text-text-secondary-dark leading-relaxed pt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
