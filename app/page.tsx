"use client";

import Link from 'next/link';
import { useTheme } from '@/context/themeContext';

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center min-h-[70vh]">
          <h1 className={`text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Hello, Welcome to Our Online Store
          </h1>
          
          <p className={`text-xl mb-10 max-w-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Click the button below to browse our products
          </p>
          
          <Link 
            href="/products" 
            className={`px-8 py-4 text-white text-lg font-semibold rounded-lg transition-colors shadow-lg ${theme === 'dark' ? 'bg-blue-800 hover:bg-blue-900' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
