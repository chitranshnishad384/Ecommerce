import styles from './BackgroundElements.module.css';

const BackgroundElements = () => {
  return (
    <div className={styles.wrapper}>
      {/* Existing elements */}
      <span className={styles.tag} style={{ top: '15%', left: '5%' }}>EST. 2024</span>
      <span className={styles.tag} style={{ top: '40%', right: '2%' }}>BROOKUS / LUXURY</span>
      <span className={styles.tag} style={{ bottom: '10%', left: '8%' }}>INNOVATION PVT. LTD.</span>
      <span className={styles.tag} style={{ top: '60%', left: '2%' }}>01 // COLLECTION</span>
      <span className={styles.tag} style={{ bottom: '25%', right: '5%' }}>MINIMAL / REFINED</span>
      
      {/* New elements (40% increase) */}
      <span className={styles.tag} style={{ top: '5%', right: '15%' }}>SERIES_01</span>
      <span className={styles.tag} style={{ bottom: '45%', left: '12%' }}>TECHNICAL SPECIFICATION</span>
      <span className={styles.tag} style={{ top: '75%', right: '10%' }}>PREMIUM_GOODS_ONLY</span>
      <span className={styles.tag} style={{ top: '25%', left: '20%' }}>CRAFTED_DETAIL</span>
    </div>
  );
};

export default BackgroundElements;
