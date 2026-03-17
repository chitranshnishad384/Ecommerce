'use client';

import { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import styles from './ProductInfo.module.css';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert('Added to cart!');
  };

  return (
    <div className={styles.info}>
      <nav className={styles.breadcrumb}>
        <span>Shop</span> / <span>{product.category}</span>
      </nav>
      
      <h1 className={styles.title}>{product.name}</h1>
      <p className={styles.price}>₹{product.price.toLocaleString('en-IN')}</p>
      
      <div className={styles.description}>
        <p>{product.description}</p>
      </div>

      <div className={styles.actions}>
        <div className={styles.quantity}>
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button className={styles.addToCart} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      <div className={styles.details}>
        <div className={styles.detailItem}>
          <h4>Specifications</h4>
          <p>Premium materials and exceptional craftsmanship.</p>
        </div>
        <div className={styles.detailItem}>
          <h4>Shipping</h4>
          <p>Free express shipping on orders over ₹50,000.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
