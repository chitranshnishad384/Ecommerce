'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from './Cart.module.css';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 50000 ? 0 : 1000;
  const total = subtotal + shipping;

  return (
    <div className={`${styles.page} container`}>
      <header className={styles.header}>
        <h1>Your Cart</h1>
        <p>{cart.length} Items in your bag</p>
      </header>

      {cart.length > 0 ? (
        <div className={styles.grid}>
          <div className={styles.items}>
            <div className={styles.tableHeader}>
              <span>Product</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
            
            {cart.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.productInfo}>
                  <div className={styles.imageWrapper}>
                    <Image src={item.image} alt={item.name} width={100} height={120} />
                  </div>
                  <div>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemCategory}>{item.category}</p>
                    <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
                
                <div className={styles.quantity}>
                  <div className={styles.qtyControl}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                
                <div className={styles.itemTotal}>
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </div>
              </div>
            ))}
          </div>

          <aside className={styles.summary}>
            <div className={styles.summaryCard}>
              <h3>Order Summary</h3>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString('en-IN')}`}</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.total}`}>
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
              <Link href="/checkout" className={styles.checkoutBtn}>
                Checkout
              </Link>
            </div>
          </aside>
        </div>
      ) : (
        <div className={styles.empty}>
          <p>Your cart is empty.</p>
          <Link href="/shop" className={styles.shopBtn}>Start Shopping</Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
