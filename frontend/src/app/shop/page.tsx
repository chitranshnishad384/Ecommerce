'use client';

import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard/ProductCard';
import { products } from '@/data/products';
import styles from './Shop.module.css';
import { Suspense, useMemo } from 'react';

const ShopContent = () => {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const filteredProducts = useMemo(() => {
    if (!categoryFilter) return products;
    return products.filter(p => p.category === categoryFilter);
  }, [categoryFilter]);

  const categories = ['Leather Bags', 'Electronic Goods', 'Home Electronics'];

  return (
    <div className={`${styles.shopPage} container`}>
      <header className={styles.header}>
        <h1>Shop All</h1>
        <p>Refined selection for the modern minimalist.</p>
      </header>

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <div className={styles.filterGroup}>
            <h3>Categories</h3>
            <ul>
              <li>
                <a href="/shop" className={!categoryFilter ? styles.active : ''}>
                  All Products
                </a>
              </li>
              {categories.map((cat) => (
                <li key={cat}>
                  <a 
                    href={`/shop?category=${cat}`} 
                    className={categoryFilter === cat ? styles.active : ''}
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.productGrid}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className={styles.noResults}>No products found in this category.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
