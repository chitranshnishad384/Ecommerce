import styles from './About.module.css';

export default function AboutPage() {
  return (
    <div className={`${styles.page} container`}>
      <header className={styles.header}>
        <h1>Our Story</h1>
        <p>Innovation meets tradition at Brookus.</p>
      </header>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>The Beginning</h2>
          <p>
            Founded in 2025, Brookus Innovation Pvt. Ltd. was born out of a desire 
            to bridge the gap between high-performance technology and the timeless 
            elegance of handcrafted goods. We believed that the objects we use 
            daily—our laptops, our bags, our home appliances—should not only 
            work perfectly but should also be a joy to behold.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Philosophy</h2>
          <p>
            We adhere to a philosophy of "Essential Luxury." This means we strip 
            away the unnecessary to focus on what truly matters: superior materials, 
            intuitive functionality, and a minimalist aesthetic that never goes 
            out of style.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Quality Without Compromise</h2>
          <p>
            Whether it's the top-grain leather of our executive briefcases or 
            the energy-efficient circuitry of our electronics, we never cut corners. 
            Each product undergoes rigorous testing and quality control to ensure 
            it meets the Brookus standard.
          </p>
        </section>
      </div>
    </div>
  );
}
