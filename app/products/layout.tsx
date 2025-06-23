"use client";

import { FiMoon, FiSun } from 'react-icons/fi';
import Link from 'next/link';
import { useTheme } from '@/context/themeContext';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <section className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <header className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-sm sticky top-0 z-50 transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className={`text-2xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Ecom Store</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme} 
                className={`p-2 ${theme === 'dark' ? 'text-yellow-300 hover:text-yellow-200' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FiSun size={22} /> : <FiMoon size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="transition-colors duration-300">{children}</main>
      
    </section>
  );
} 