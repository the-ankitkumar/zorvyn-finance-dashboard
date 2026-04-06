import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Overview } from './pages/Overview';
import { Transactions } from './pages/Transactions';
import { Insights } from './pages/Insights';
import { useAppContext } from './context/AppContext';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { role } = useAppContext();

  return (
    <div className="flex h-screen overflow-hidden bg-background dark:bg-background-dark font-sans">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <header className="md:hidden h-16 flex items-center justify-between px-4 border-b border-border dark:border-border-dark bg-card dark:bg-card-dark shrink-0">
          <div className="flex items-center gap-2 text-primary font-bold text-lg">
            <span>Zorvyn</span>
          </div>
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu className="w-6 h-6 text-text-primary dark:text-text-primary-dark" />
          </button>
        </header>

        {/* Global sticky role indicator for larger screens (Optional, or just let pages handle their own headers) */}

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/insights" element={<Insights />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
