import Link from 'next/link';
import ProductCard from '@/components/ProductCard/ProductCard';
import { products } from '@/data/products';
import styles from './page.module.css';

export default function Home() {
  const featuredProducts = products
    .filter((p) => p.category === 'Electronic Goods')
    .slice(0, 4);

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.decorCircle} />
        <div className={styles.decorLine} />
        <div className={styles.decorLineVertical} />
        <div className={styles.decorCorner} />
        <div className={`${styles.heroContent} container`}>
          <span className={styles.tagline}>Est. 2024</span>
          <h1 className={styles.title}>
            Refined Electronics <br /> & Timeless Leather
          </h1>
          <p className={styles.description}>
            Curated selection of premium electronic goods and handcrafted leather bags 
            designed for those who appreciate the finer things.
          </p>
          <div className={styles.cta}>
            <Link href="/shop" className={styles.primaryBtn}>
              Shop Collection
            </Link>
            <Link href="/about" className={styles.secondaryBtn}>
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Fast Links */}
      <section className={styles.categories}>
        <div className="container">
          <div className={styles.categoryGrid}>
            <Link href="/category/leather-bags" className={styles.categoryCard}>
              <h3>Leather Bags</h3>
              <p>Handcrafted Excellence</p>
            </Link>
            <Link href="/category/electronic-goods" className={styles.categoryCard}>
              <h3>Electronics</h3>
              <p>Cutting-edge Tech</p>
            </Link>
            <Link href="/category/home-electronics" className={styles.categoryCard}>
              <h3>Home</h3>
              <p>Modern Living</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featured}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>New Arrivals</h2>
            <Link href="/shop">View All</Link>
          </div>
          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className={styles.statement}>
        <div className="container">
          <div className={styles.statementContent}>
            <h2>Crafted with Precision</h2>
            <p>
              At Brookus Innovation, we believe that quality is not just a feature, 
              it's a commitment. From the grain of our leather to the precision 
              of our electronics, every detail is considered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
