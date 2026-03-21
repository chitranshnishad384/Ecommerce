import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>EVEROPEN</h2>
            <p className={styles.desc}>
              Minimalist luxury electronics and handcrafted leather goods.
              Elevating your lifestyle through exceptional design.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkColumn}>
              <h4>Shop</h4>
              <ul>
                <li><Link href="/category/leather-bags">Leather Bags</Link></li>
                <li><Link href="/category/electronic-goods">Electronic Goods</Link></li>
                <li><Link href="/category/home-electronics">Home Electronics</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

          </div>
        </div>

        <div className={styles.bottom}>
          <p>Brookus Innovation Pvt. Ltd.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
