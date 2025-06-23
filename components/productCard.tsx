"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { FiShoppingCart } from 'react-icons/fi';
import { useTheme } from '@/context/themeContext';

interface ProductCardProps {
  product: Product;
  viewType?: 'grid' | 'list';
}

export default function ProductCard({ product, viewType = 'grid' }: ProductCardProps) {
  const { theme } = useTheme();

  return (
    <div className={`card-bg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'} rounded-xl shadow-lg overflow-hidden transition-all hover:scale-105 relative`}>
      <div className="absolute top-3 right-3 z-10">
        <Link 
          href="#"
          className={`${theme === 'dark' ? 'bg-gray-700 hover:bg-blue-800' : 'bg-white hover:bg-blue-600'} p-2 rounded-full shadow-md hover:text-white transition-colors inline-flex`}
          onClick={(e) => {
            e.preventDefault();
            alert(`Added ${product.name} to cart!`);
          }}
          aria-label="Add to cart"
        >
          <FiShoppingCart size={18} />
        </Link>
      </div>
      
      <Link href={`/products/${product.id}`}>
        <div className={`relative h-52 w-full bg-gray-100`}>
          <Image 
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:opacity-90 transition-opacity"
          />
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start">
            <h2 className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} mb-1`}>{product.name}</h2>
            <span className={`font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>${product.price.toFixed(2)}</span>
          </div>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} line-clamp-2 mt-2 mb-4`}>{product.description}</p>
          <div className="flex justify-between items-center mt-2">
            <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Free shipping</span>
            <span className={`inline-block px-3 py-1 ${theme === 'dark' ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} text-xs font-semibold rounded-full`}>New</span>
          </div>
        </div>
      </Link>
    </div>
  );
} 