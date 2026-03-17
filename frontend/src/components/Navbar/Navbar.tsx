'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className={styles.nav}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link href="/">BROOKUS</Link>
        </div>
        
        <ul className={`${styles.links} ${isOpen ? styles.active : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <div className={styles.actions}>
          <Link href="/cart" className={styles.cartLink}>
            Cart ({cartCount})
          </Link>
          <button 
            className={styles.menuToggle} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
