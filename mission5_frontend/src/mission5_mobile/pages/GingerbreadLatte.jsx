import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GingerbreadLatte.module.css";

export default function GingerbreadLatte() {
  const navigate = useNavigate();
  const [size, setSize] = useState("medium");
  const [qty, setQty] = useState(1);
  const [milk, setMilk] = useState("full");
  const [strength, setStrength] = useState("single");
  const [flavour, setFlavour] = useState("vanilla");

  function handleAddToCart() {
    console.log("Add to cart:", {
      drink: "Gingerbread Latte",
      size,
      qty,
      milk,
      strength,
      flavour,
    });
  }

  return (
    <div className={styles.screen}>
      {/* ---- STATUS BAR ---- */}
      <div className={styles.statusBar}>
        <span className={styles.time}>9:41</span>
        <div className={styles.statusIcons}>
          <img
            src="/image/icons/zicons/Lev.svg"
            alt="Signal"
            className={styles.statusIcon}
          />
        </div>
      </div>

      {/* ---- TOP BAR ---- */}
      <div className={styles.topBar}>
        <button
          type="button"
          className={styles.backBtn}
          onClick={() => navigate(-1)}
        >
          ←
        </button>

        <button className={styles.stationLocation} type="button">
          <img
            src="/image/icons/zicons/orangepin.png"
            alt="location pin"
            className={styles.stationIcon}
          />
          <span className={styles.stationText}>Z Broadway</span>
        </button>

        <div className={styles.topRightIcons}>
          <button className={styles.iconBtn} type="button">
            <img src="/image/icons/shoppingCart.png" alt="Cart" />
          </button>
        </div>
      </div>

      {/* ---- DRINK CARD ---- */}
      <div className={styles.drinkCard}>
        <div className={styles.drinkHeaderRow}>
          <img
            src="/image/icons/zicons/gingerbread-latte.png"
            alt="Gingerbread Latte"
            className={styles.drinkHeaderImg}
          />

          <div className={styles.drinkHeaderText}>
            <h1 className={styles.drinkTitle}>Gingerbread Latte</h1>
            <p className={styles.drinkDesc}>
              Our full bodied Z blend with added gingerbread spices served
              with the generous silky foam, perfectly topped off with whipped
              cream and cinnamon.
            </p>
          </div>
        </div>
      </div>

      {/* ---- SIZE ---- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Size</h2>
        <div className={styles.sizeRow}>
         <button
  type="button"
  className={`${styles.sizeCard} ${size === "medium" ? styles.sizeCardActive : ""}`}
  onClick={() => setSize("medium")}
>
  <div className={styles.sizeContent}>
    <img
      src="/image/icons/zicons/coffee.png"
      alt="Medium"
      className={styles.sizeIcon}
    />

    <div className={styles.textBlock}>
      <span className={styles.sizeLabel}>Medium</span>
      <span className={styles.sizePrice}>$4.50</span>
    </div>
  </div>
</button>


          <button
  type="button"
  className={`${styles.sizeCard} ${size === "large" ? styles.sizeCardActive : ""}`}
  onClick={() => setSize("large")}
>
  <div className={styles.sizeContent}>
    <img
      src="/image/icons/zicons/coffee.png"
      alt="Large"
      className={`${styles.sizeIcon} ${styles.largeIcon}`}  // ⬅ bigger icon
    />

    <div className={styles.textBlock}>
      <span className={styles.sizeLabel}>Large</span>
      <span className={styles.sizePrice}>$5.50</span>
    </div>
  </div>
</button>

        </div>
      </section>

      {/* ---- QUANTITY ---- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Quantity</h2>
        <div className={styles.qtyRow}>
          <button
            type="button"
            className={styles.qtyBtn}
            onClick={() => setQty((n) => Math.max(1, n - 1))}
          >
            −
          </button>
          <span className={styles.qtyValue}>{qty}</span>
          <button
            type="button"
            className={styles.qtyBtn}
            onClick={() => setQty((n) => n + 1)}
          >
            +
          </button>
        </div>
      </section>

      {/* ---- MILK ---- */}
      <section className={styles.section}>
  <h2 className={styles.sectionTitle}>Milk</h2>

  <div className={styles.twoCol}>
    <div className={styles.col}>
      <label className={styles.radioOption}>
        <input type="radio" value="full" /> <span>Full Cream</span>
      </label>

      <label className={styles.radioOption}>
        <input type="radio" value="trim" /> <span>Trim Milk</span>
      </label>

      <label className={styles.radioOption}>
        <input type="radio" value="almond" /> <span>Almond Milk</span>
      </label>
    </div>

    <div className={styles.col}>
      <label className={styles.radioOption}>
        <input type="radio" value="oat" /> <span>Oat Milk</span>
      </label>

      <label className={styles.radioOption}>
        <input type="radio" value="coconut" /> <span>Coconut Milk</span>
      </label>

      <label className={styles.radioOption}>
        <input type="radio" value="nomilk" /> <span>No Milk</span>
      </label>
    </div>
  </div>
</section>

      {/* ---- STRENGTH ---- */}
<section className={styles.section}>
  <h2 className={styles.sectionTitle}>Strength</h2>

  <div className={styles.twoCol}>
    {/* LEFT COLUMN */}
    <div className={styles.col}>
      <label className={styles.radioOption}>
        <input
          type="radio"
          name="strength"
          value="single"
          checked={strength === "single"}
          onChange={() => setStrength("single")}
        />
        <span>Single Shot</span>
      </label>

      <label className={styles.radioOption}>
        <input
          type="radio"
          name="strength"
          value="double"
          checked={strength === "double"}
          onChange={() => setStrength("double")}
        />
        <span>Double Shot</span>
      </label>

      <label className={styles.radioOption}>
        <input
          type="radio"
          name="strength"
          value="triple"
          checked={strength === "triple"}
          onChange={() => setStrength("triple")}
        />
        <span>Triple Shot</span>
      </label>
    </div>

    {/* RIGHT COLUMN */}
    <div className={styles.col}>
      <label className={styles.radioOption}>
        <input
          type="radio"
          name="strength"
          value="extra"
          checked={strength === "extra"}
          onChange={() => setStrength("extra")}
        />
        <span>Extra Shot</span>
      </label>
<span>+ 90¢</span>
      <label className={styles.radioOption}>
        <input
          type="radio"
          name="strength"
          value="decaf"
          checked={strength === "decaf"}
          onChange={() => setStrength("decaf")}
        />
        <span>Extra Shot </span>
      </label>
    </div>
  </div>
</section>


     {/* ---- FLAVOUR ---- */}
<section className={styles.section}>
  <h2 className={styles.sectionTitle}>Flavour</h2>
  <p className={styles.subNote}>+ $1.00</p>

  <div className={styles.twoCol}>
    {/* LEFT COLUMN */}
    <div className={styles.col}>
      <label className={styles.radioOption}>
        <input
          type="radio"
          name="flavour"
          value="vanilla"
          checked={flavour === "vanilla"}
          onChange={() => setFlavour("vanilla")}
        />
        <span>Vanilla</span>
      </label>

      <label className={styles.radioOption}>
        <input
          type="radio"
          name="flavour"
          value="caramel"
          checked={flavour === "caramel"}
          onChange={() => setFlavour("caramel")}
        />
        <span>Caramel</span>
      </label>
    </div>

    {/* RIGHT COLUMN */}
    <div className={styles.col}>
      <label className={styles.radioOption}>
        <input
          type="radio"
          name="flavour"
          value="hazelnut"
          checked={flavour === "hazelnut"}
          onChange={() => setFlavour("hazelnut")}
        />
        <span>Hazelnut</span>
      </label>

      <label className={styles.radioOption}>
        <input
          type="radio"
          name="flavour"
          value="chai"
          checked={flavour === "chai"}
          onChange={() => setFlavour("chai")}
        />
        <span>Chai</span>
      </label>
    </div>
  </div>
</section>


      {/* ---- ACTION BUTTONS ---- */}
      <div className={styles.actionRow}>
        <button
          type="button"
          className={styles.cancelBtn}
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
        <button
          type="button"
          className={styles.primaryBtn}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>

      {/* add bottom padding so it clears your mobile nav */}
      <div className={styles.bottomSpacer} />
    </div>
  );
}
