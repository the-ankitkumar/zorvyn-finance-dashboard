export const mockTransactions = [
  { id: '1', date: '2026-03-28', description: 'Salary March', category: 'Salary', type: 'Income', amount: 156000 },
  { id: '2', date: '2026-03-27', description: 'Amazon Fresh', category: 'Food & Dining', type: 'Expense', amount: 3200 },
  { id: '3', date: '2026-03-25', description: 'Netflix Subscription', category: 'Entertainment', type: 'Expense', amount: 649 },
  { id: '4', date: '2026-03-22', description: 'Uber Rides', category: 'Transportation', type: 'Expense', amount: 850 },
  { id: '5', date: '2026-03-20', description: 'Freelance Design Work', category: 'Freelance', type: 'Income', amount: 45000 },
  { id: '6', date: '2026-03-18', description: 'Electricity Bill', category: 'Utilities', type: 'Expense', amount: 2100 },
  { id: '7', date: '2026-03-15', description: 'Mutual Fund SIP', category: 'Investment', type: 'Expense', amount: 25000 },
  { id: '8', date: '2026-03-10', description: 'Flight to Goa', category: 'Travel', type: 'Expense', amount: 8500 },
  { id: '9', date: '2026-03-08', description: 'Zomato Delivery', category: 'Food & Dining', type: 'Expense', amount: 560 },
  { id: '10', date: '2026-03-05', description: 'Zara Clothing', category: 'Shopping', type: 'Expense', amount: 4500 },
  { id: '11', date: '2026-02-28', description: 'Salary February', category: 'Salary', type: 'Income', amount: 156000 },
  { id: '12', date: '2026-02-25', description: 'Internet Bill', category: 'Utilities', type: 'Expense', amount: 1200 },
  { id: '13', date: '2026-02-20', description: 'Movie Tickets', category: 'Entertainment', type: 'Expense', amount: 800 },
  { id: '14', date: '2026-02-15', description: 'Mutual Fund SIP', category: 'Investment', type: 'Expense', amount: 25000 },
  { id: '15', date: '2026-02-10', description: 'Q4 Bonus', category: 'Bonus', type: 'Income', amount: 50000 }
];

export const mockMonthlyStats = [
  { name: 'Jan 26', income: 280000, expense: 75000 },
  { name: 'Feb 26', income: 206000, expense: 80000 },
  { name: 'Mar 26', income: 201000, expense: 67185 },
];

export const mockCategoryBreakdown = [
  { name: 'Food & Dining', value: 12500, color: '#f59e0b' },
  { name: 'Shopping', value: 8500, color: '#ec4899' },
  { name: 'Investment', value: 25000, color: '#10b981' },
  { name: 'Entertainment', value: 4500, color: '#3b82f6' },
  { name: 'Travel', value: 8500, color: '#8b5cf6' },
  { name: 'Utilities', value: 5500, color: '#14b8a6' },
  { name: 'Transportation', value: 2685, color: '#f43f5e' }
];

export const summaryData = {
  netBalance: 258015,
  totalIncome: 325200,
  totalExpense: 67185,
  savingsRate: 79
};
