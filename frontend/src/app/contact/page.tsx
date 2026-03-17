import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <div className={`${styles.page} container`}>
      <header className={styles.header}>
        <h1>Contact Us</h1>
        <p>We're here to assist you.</p>
      </header>

      <div className={styles.grid}>
        <div className={styles.info}>
          <div className={styles.item}>
            <h4>Inquiries</h4>
            <p>hello@everopen.shop</p>
          </div>
          <div className={styles.item}>
            <h4>Headquarters</h4>
            <p>
              Brookus Innovation Pvt. Ltd.<br />
              1208, 12th Floor SS OMNIA Sector 86,<br />
              Narsinghpur, Gurugram, Haryana 122004
            </p>
          </div>
          <div className={styles.item}>
            <h4>Support</h4>
            <p>+91 89249 81984</p>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="John Doe" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="john@example.com" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={6} placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>
      </div>
    </div>
  );
}
