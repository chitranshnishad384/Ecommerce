'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './Checkout.module.css';

export default function CheckoutPage() {
  const { cart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 50000 ? 0 : 1000;
  const total = subtotal + shipping;

  const [form, setForm] = useState({
    email: '', phone: '', firstName: '', lastName: '',
    address: '', city: '', postal: '',
    card: '', expiry: '', cvc: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!form.address.trim()) newErrors.address = 'Address is required';
    if (!form.city.trim()) newErrors.city = 'City is required';
    if (!form.postal.trim()) newErrors.postal = 'Postal code is required';
    if (!form.card.trim()) newErrors.card = 'Card number is required';
    if (!form.expiry.trim()) newErrors.expiry = 'Expiry is required';
    if (!form.cvc.trim()) newErrors.cvc = 'CVC is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    alert('Order placed successfully!');
  };

  return (
    <div className={`${styles.page} container`}>
      <header className={styles.header}>
        <h1>Checkout</h1>
        <p>Complete your luxury experience.</p>
      </header>

      <div className={styles.grid}>
        <div className={styles.formSection}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <section>
              <h3>Contact Information</h3>
              <div className={styles.row}>
                <div className={styles.field}>
                  <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
                <div className={styles.field}>
                  <input name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
                  {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>
              </div>
            </section>

            <section>
              <h3>Shipping Address</h3>
              <div className={styles.row}>
                <div className={styles.field}>
                  <input name="firstName" type="text" placeholder="First Name" value={form.firstName} onChange={handleChange} />
                  {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
                </div>
                <div className={styles.field}>
                  <input name="lastName" type="text" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
                  {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
                </div>
              </div>
              <div className={styles.field}>
                <input name="address" type="text" placeholder="Address" className={styles.full} value={form.address} onChange={handleChange} />
                {errors.address && <span className={styles.error}>{errors.address}</span>}
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <input name="city" type="text" placeholder="City" value={form.city} onChange={handleChange} />
                  {errors.city && <span className={styles.error}>{errors.city}</span>}
                </div>
                <div className={styles.field}>
                  <input name="postal" type="text" placeholder="Postal Code" value={form.postal} onChange={handleChange} />
                  {errors.postal && <span className={styles.error}>{errors.postal}</span>}
                </div>
              </div>
            </section>

            <section>
              <h3>Payment</h3>
              <div className={styles.paymentBox}>
                <p>All transactions are secure and encrypted.</p>
                <div className={styles.cardInput}>
                  <div className={styles.field}>
                    <input name="card" type="text" placeholder="Card Number" className={styles.full} value={form.card} onChange={handleChange} />
                    {errors.card && <span className={styles.error}>{errors.card}</span>}
                  </div>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <input name="expiry" type="text" placeholder="MM / YY" value={form.expiry} onChange={handleChange} />
                      {errors.expiry && <span className={styles.error}>{errors.expiry}</span>}
                    </div>
                    <div className={styles.field}>
                      <input name="cvc" type="text" placeholder="CVC" value={form.cvc} onChange={handleChange} />
                      {errors.cvc && <span className={styles.error}>{errors.cvc}</span>}
                    </div>
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
