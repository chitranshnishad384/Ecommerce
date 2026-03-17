import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`} className={styles.imageWrapper}>
        <Image 
          src={product.image} 
          alt={product.name} 
          width={400} 
          height={500} 
          className={styles.image}
        />
        <div className={styles.overlay}>
          <span>View Details</span>
        </div>
      </Link>
      <div className={styles.info}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </div>
  );
};

export default ProductCard;
