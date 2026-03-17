import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './CategoryPage.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

const categoryMap: { [key: string]: string } = {
  'leather-bags': 'Leather Bags',
  'electronic-goods': 'Electronic Goods',
  'home-electronics': 'Home Electronics',
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryName = categoryMap[slug];

  if (!categoryName) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === categoryName);

  return (
    <div className={`${styles.page} container`}>
      <header className={styles.header}>
        <div className={styles.decor} />
        <span className={styles.categoryLabel}>Collection</span>
        <h1>{categoryName}</h1>
        <p className={styles.description}>
          Precision crafted {categoryName.toLowerCase()} for the discerning individual.
        </p>
      </header>

      <div className={styles.grid}>
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {categoryProducts.length === 0 && (
        <p className={styles.noResults}>Coming soon.</p>
      )}
    </div>
  );
}
