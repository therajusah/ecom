"use client";

import { products } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { FiShoppingCart, FiHeart, FiShare2, FiArrowLeft } from 'react-icons/fi';
import { useTheme } from '@/context/themeContext';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params?.id as string, 10);
  const product = products.find((p) => p.id === productId);
  const { theme } = useTheme();

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Link
        href="/products"
        className={`mb-8 inline-flex items-center ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors`}
      >
        <FiArrowLeft className="mr-2" /> Back to Products
      </Link>

      <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden`}>
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="relative h-96 md:h-full bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="p-8 md:w-1/2">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-2`}>
                    {product.name}
                  </h1>
                  <span className={`inline-block px-3 py-1 ${theme === 'dark' ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} text-xs font-semibold rounded-full`}>New</span>
                </div>
                <p className={`text-2xl ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} font-bold mb-6`}>
                  ${product.price.toFixed(2)}
                </p>
                
                <div className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} pt-6 mb-6`}>
                  <h2 className="text-xl font-semibold mb-4">Description</h2>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6`}>{product.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Features</h3>
                    <ul className={`list-disc pl-5 space-y-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      <li>High quality materials</li>
                      <li>Durable construction</li>
                      <li>Modern design</li>
                      <li>1 year warranty</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-green-500 flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    In stock
                  </span>
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>Free shipping</span>
                </div>
                
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Added ${product.name} to cart!`);
                    }}
                    className={`flex-1 ${theme === 'dark' ? 'bg-blue-800 hover:bg-blue-900' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center`}
                  >
                    <FiShoppingCart className="mr-2" />
                    Add to Cart
                  </Link>
                  
                  <Link href="#" className={`p-3 rounded-lg border ${theme === 'dark' ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'} transition-colors`}>
                    <FiHeart />
                  </Link>
                  
                  <Link href="#" className={`p-3 rounded-lg border ${theme === 'dark' ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'} transition-colors`}>
                    <FiShare2 />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : ''}`}>You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.filter(p => p.id !== product.id).slice(0, 4).map(relatedProduct => (
            <div key={relatedProduct.id} className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-3 hover:shadow-md transition-shadow`}>
              <Link href={`/products/${relatedProduct.id}`}>
                <div className="relative h-32 bg-gray-100 mb-2 rounded">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h3 className={`font-medium text-sm ${theme === 'dark' ? 'text-gray-200' : ''}`}>{relatedProduct.name}</h3>
                <p className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} font-bold text-sm`}>${relatedProduct.price.toFixed(2)}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 