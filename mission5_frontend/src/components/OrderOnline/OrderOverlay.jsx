import React from "react";
import styles from "./OrderOverlay.module.css";

function OrderOverlay() {
  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.headerRow}>
          <img
            src="/image/foodOrderingComponents/LargeImageComponents/Latte.png"
            alt="Latte"
            className={styles.productImage}
          />

          <div className={styles.textAndControls}>
            <h1 className={styles.title}>Latte</h1>
            <p className={styles.description}>
              Our smooth and creamy Z blend, expertly crafted with steamed milk
              and a velvety layer of foam for a classic coffee experience…
            </p>

            <div className={styles.sizeRow}>
              <button className={`${styles.sizeBtn} ${styles.active}`}>
                <span>Medium</span>
                <small>$4.50</small>
              </button>

              <button className={styles.sizeBtn}>
                <span>Large</span>
                <small>$5.50</small>
              </button>
            </div>

            <div className={styles.qtyRow}>
              <button className={styles.qtyBtn}>-</button>
              <div className={styles.qtyNumber}>1</div>
              <button className={styles.qtyBtn}>+</button>

              <button className={styles.editBtn}>✎</button>
              <button className={styles.deleteBtn}>🗑</button>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.optionsGrid}>
          <div>
            <h3>Milk</h3>
            <label>
              <input type="radio" /> Full cream
            </label>
            <label>
              <input type="radio" /> Trim Milk
            </label>
            <label>
              <input type="radio" /> Almond Milk
            </label>
            <label>
              <input type="radio" /> Oat Milk
            </label>
          </div>

          <div>
            <h3>Strength</h3>
            <label>
              <input type="radio" /> Single Shot
            </label>
            <label>
              <input type="radio" /> Double Shot
            </label>
            <label>
              <input type="radio" /> Triple Shot
            </label>
          </div>

          <div>
            <h3>
              Flavour <span className={styles.extra}>+ $1.00</span>
            </h3>
            <label>
              <input type="radio" /> Vanilla
            </label>
            <label>
              <input type="radio" /> Caramel
            </label>
            <label>
              <input type="radio" /> Hazelnut
            </label>
            <label>
              <input type="radio" /> Chocolate
            </label>
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.cancel}>Cancel</button>
          <button className={styles.add}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default OrderOverlay;
