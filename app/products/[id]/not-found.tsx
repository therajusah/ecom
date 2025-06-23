import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, the product you are looking for does not exist.
      </p>
      <Link
        href="/products"
        className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors"
      >
        Browse Products
      </Link>
    </div>
  );
} 