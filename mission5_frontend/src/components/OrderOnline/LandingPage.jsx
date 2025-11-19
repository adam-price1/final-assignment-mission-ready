import React, { useState } from "react";
import styles from "./LandingPage.module.css";
import SelectionPage from "./SelectionPage";

function LandingPage() {
  const [chooseDrink, setChooseDrink] = useState();

  const handleButtonClick = (value) => {
    return setChooseDrink(value);
  };
  console.log(chooseDrink);
  return (
    <>
      <header className={styles.header}>
        <img src="/image/banners/Frame 7185.png" alt="banner" />
      </header>

      <div className={styles.headlines}>
        <div className={styles.textContent}>
          <h1>Fuel up more than just your car!</h1>
          <p>
            Our gas stations offer a delicious range of freshly prepared food
            and snacks, perfect for busy families and people on the go.
          </p>
          <p>
            Whether you’re grabbing breakfast, a quick lunch, or a treat for the
            road, our convenient, high-quality options ensure you stay energized
            and satisfied wherever your journey takes you.
          </p>
          <p>Stop in today and enjoy food that’s ready when you are!</p>
          <button className={styles.nearestStationButton}>
            Find Your Nearest Z Station
          </button>
        </div>

        <div className={styles.imageContainer}>
          <img
            src="/image/foodOrderingComponents/ZWebsiteFoodImage.png"
            alt="Food and drink"
          />
        </div>

        <h1 className={styles.bottomHeadline}>
          Pre-Order Online – Skip the Queue and Save Time!
        </h1>
      </div>

      <div className={styles.startUpOrderChoices}>
        <button
          className={styles.hotDrinksButton}
          onClick={() => handleButtonClick("hot")}
        >
          <div className={styles.imgWrap}>
            <img
              src="/image/foodOrderingComponents/LargeImageComponents/Latte.png"
              alt="hotDrinksButton"
            />
          </div>
          <span>Hot Drinks</span>
        </button>
        <button
          className={styles.coldDrinksButton}
          onClick={() => handleButtonClick("cold")}
        >
          <div className={styles.imgWrap}>
            <img
              src="/image/foodOrderingComponents/LargeImageComponents/Hokey Pokey Frappe.png"
              alt="coldDrinksButton"
            />
          </div>
          <span>Cold Drinks</span>
        </button>
        <button
          className={styles.foodButton}
          onClick={() => handleButtonClick("food")}
        >
          <div className={styles.imgWrap}>
            <img
              src="/image/foodOrderingComponents/LargeImageComponents/Gourmet Pepper Steak Pie.png"
              alt="foodButton"
            />
          </div>
          <span>Food</span>
        </button>
        <button
          className={styles.makeItComboButton}
          onClick={() => handleButtonClick("combo")}
        >
          <div className={styles.imgWrap}>
            <img
              src="/image/foodOrderingComponents/LargeImageComponents/Combo tile Image  1.png"
              alt="makeItComboButton"
            />
          </div>
          <span>Make it a Combo</span>
        </button>
      </div>

      <SelectionPage value={chooseDrink} />
    </>
  );
}

export default LandingPage;
