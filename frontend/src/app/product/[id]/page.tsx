import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import styles from './ProductDetails.module.css';
import ProductInfo from '@/components/ProductInfo/ProductInfo';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className={`${styles.page} container`}>
      <div className={styles.grid}>
        <div className={styles.imageGallery}>
          <div className={styles.mainImage}>
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={1000}
              className={styles.image}
              priority
            />
          </div>
        </div>

        <ProductInfo product={product} />
      </div>
    </div>
  );
}
