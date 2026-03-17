'use client';

import { useCart } from '@/context/CartContext';
import styles from './Checkout.module.css';

export default function CheckoutPage() {
  const { cart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 50000 ? 0 : 1000;
  const total = subtotal + shipping;

  return (
    <div className={`${styles.page} container`}>
      <header className={styles.header}>
        <h1>Checkout</h1>
        <p>Complete your luxury experience.</p>
      </header>

      <div className={styles.grid}>
        <div className={styles.formSection}>
          <form className={styles.form}>
            <section>
              <h3>Contact Information</h3>
              <div className={styles.row}>
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
              </div>
            </section>

            <section>
              <h3>Shipping Address</h3>
              <div className={styles.row}>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="text" placeholder="Address" className={styles.full} />
              <div className={styles.row}>
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Postal Code" />
              </div>
            </section>

            <section>
              <h3>Payment</h3>
              <div className={styles.paymentBox}>
                <p>All transactions are secure and encrypted.</p>
                <div className={styles.cardInput}>
                  <input type="text" placeholder="Card Number" className={styles.full} />
                  <div className={styles.row}>
                    <input type="text" placeholder="MM / YY" />
                    <input type="text" placeholder="CVC" />
                  </div>
                </div>
              </div>
            </section>

            <button type="submit" className={styles.payBtn}>
              Pay ₹{total.toLocaleString('en-IN')}
            </button>
          </form>
        </div>

        <aside className={styles.orderSummary}>
          <h3>Your Order</h3>
          <div className={styles.productList}>
            {cart.map((item) => (
              <div key={item.id} className={styles.product}>
                <span>{item.name} x {item.quantity}</span>
                <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>
          <div className={styles.totals}>
            <div className={styles.row}>
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className={styles.row}>
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString('en-IN')}`}</span>
            </div>
            <div className={`${styles.row} ${styles.total}`}>
              <span>Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
