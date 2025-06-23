"use client";

import ProductCard from '@/components/productCard';
import { products } from '@/data/products';
import { useTheme } from '@/context/themeContext';

export default function ProductsPage() {
  const { theme } = useTheme();
  const viewType = 'grid';
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Our Products</h1>
      </div>
      
      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow mb-8`}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              viewType={viewType} 
            />
          ))}
        </div>
      </div>
    
    </div>
  );
} 