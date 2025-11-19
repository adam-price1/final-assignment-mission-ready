import React, { useState, useEffect } from "react";
import styles from "./SelectionPage.module.css";
import OrderOverlay from "./OrderOverlay";

function SelectionPage({ value }) {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    // --DUMMY DATABASE
    // ...existing code...

    const hotDrinks = [
      {
        id: 1,
        name: "Americano",
        img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
      },
      {
        id: 2,
        name: "Americano",
        img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
      },
      {
        id: 3,
        name: "Americano",
        img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
      },
      {
        id: 4,
        name: "Americano",
        img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
      },
      {
        id: 5,
        name: "Americano",
        img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
      },
      {
        id: 6,
        name: "Americano",
        img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
      },
      {
        id: 7,
        name: "Americano",
        img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
      },
      {
        id: 8,
        name: "Americano",
        img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
      },
      {
        id: 9,
        name: "Americano",
        img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
      },
      {
        id: 10,
        name: "Americano",
        img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
      },
      {
        id: 11,
        name: "Americano",
        img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
      },
      {
        id: 12,
        name: "Americano",
        img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
      },
    ];

    const coldDrinks = [
      {
        id: 13,
        name: "Banana Berry Smoothie",
        img: "/image/foodOrderingComponents/SmallImageComponents/coldDrinks/Property 1=Banana Berry Smoothie.png",
      },
      {
        id: 14,
        name: "Banana Berry Smoothie",
        img: "/image/foodOrderingComponents/SmallImageComponents/coldDrinks/Property 1=Banana Berry Smoothie.png",
      },
      {
        id: 15,
        name: "Banana Berry Smoothie",
        img: "/image/foodOrderingComponents/SmallImageComponents/coldDrinks/Property 1=Banana Berry Smoothie.png",
      },
      {
        id: 16,
        name: "Banana Berry Smoothie",
        img: "/image/foodOrderingComponents/SmallImageComponents/coldDrinks/Property 1=Banana Berry Smoothie.png",
      },
      {
        id: 17,
        name: "Banana Berry Smoothie",
        img: "/image/foodOrderingComponents/SmallImageComponents/coldDrinks/Property 1=Banana Berry Smoothie.png",
      },
      {
        id: 18,
        name: "Banana Berry Smoothie",
        img: "/image/foodOrderingComponents/SmallImageComponents/coldDrinks/Property 1=Banana Berry Smoothie.png",
      },
      {
        id: 19,
        name: "Banana Berry Smoothie",
        img: "/image/foodOrderingComponents/SmallImageComponents/coldDrinks/Property 1=Banana Berry Smoothie.png",
      },
      {
        id: 20,
        name: "Banana Berry Smoothie",
        img: "/image/foodOrderingComponents/SmallImageComponents/coldDrinks/Property 1=Banana Berry Smoothie.png",
      },
      {
        id: 21,
        name: "Banana Berry Smoothie",
        img: "/image/foodOrderingComponents/SmallImageComponents/coldDrinks/Property 1=Banana Berry Smoothie.png",
      },
      {
        id: 22,
        name: "Banana Berry Smoothie",
        img: "/image/foodOrderingComponents/SmallImageComponents/coldDrinks/Property 1=Banana Berry Smoothie.png",
      },
      {
        id: 23,
        name: "Banana Berry Smoothie",
        img: "/image/foodOrderingComponents/SmallImageComponents/coldDrinks/Property 1=Banana Berry Smoothie.png",
      },
      {
        id: 24,
        name: "Banana Berry Smoothie",
        img: "/image/foodOrderingComponents/SmallImageComponents/coldDrinks/Property 1=Banana Berry Smoothie.png",
      },
    ];

    const food = [
      {
        id: 25,
        name: "Classic Mince and Cheese",
        img: "/image/foodOrderingComponents/SmallImageComponents/Foods/Property 1=Classic Mince and Cheese.png",
      },
      {
        id: 26,
        name: "Classic Mince and Cheese",
        img: "/image/foodOrderingComponents/SmallImageComponents/Foods/Property 1=Classic Mince and Cheese.png",
      },
      {
        id: 27,
        name: "Classic Mince and Cheese",
        img: "/image/foodOrderingComponents/SmallImageComponents/Foods/Property 1=Classic Mince and Cheese.png",
      },
      {
        id: 28,
        name: "Classic Mince and Cheese",
        img: "/image/foodOrderingComponents/SmallImageComponents/Foods/Property 1=Classic Mince and Cheese.png",
      },
      {
        id: 29,
        name: "Classic Mince and Cheese",
        img: "/image/foodOrderingComponents/SmallImageComponents/Foods/Property 1=Classic Mince and Cheese.png",
      },
      {
        id: 30,
        name: "Classic Mince and Cheese",
        img: "/image/foodOrderingComponents/SmallImageComponents/Foods/Property 1=Classic Mince and Cheese.png",
      },
      {
        id: 31,
        name: "Classic Mince and Cheese",
        img: "/image/foodOrderingComponents/SmallImageComponents/Foods/Property 1=Classic Mince and Cheese.png",
      },
      {
        id: 32,
        name: "Classic Mince and Cheese",
        img: "/image/foodOrderingComponents/SmallImageComponents/Foods/Property 1=Classic Mince and Cheese.png",
      },
      {
        id: 33,
        name: "Classic Mince and Cheese",
        img: "/image/foodOrderingComponents/SmallImageComponents/Foods/Property 1=Classic Mince and Cheese.png",
      },
      {
        id: 34,
        name: "Classic Mince and Cheese",
        img: "/image/foodOrderingComponents/SmallImageComponents/Foods/Property 1=Classic Mince and Cheese.png",
      },
      {
        id: 35,
        name: "Classic Mince and Cheese",
        img: "/image/foodOrderingComponents/SmallImageComponents/Foods/Property 1=Classic Mince and Cheese.png",
      },
      {
        id: 36,
        name: "Classic Mince and Cheese",
        img: "/image/foodOrderingComponents/SmallImageComponents/Foods/Property 1=Classic Mince and Cheese.png",
      },
    ];

    // ...existing code...
    {
      drinks.map((drink) => (
        <div className={styles.drinkCard} key={drink.id}>
          <div className={styles.cardImage}>
            <img src={drink.img} alt={drink.name} />
          </div>
          <div className={styles.cardLabel}>{drink.name}</div>
        </div>
      ));
    }
    // ...existing code...
    // Clear and set drinks based on value
    if (value === "hot") {
      setDrinks(hotDrinks);
    } else if (value === "cold") {
      setDrinks(coldDrinks);
    } else if (value === "food") {
      setDrinks(food);
    } else if (value === "combo") {
      setDrinks([...hotDrinks, ...coldDrinks, ...food]);
    } else {
      setDrinks([]);
    }
  }, [value]);
  return (
    <>
      {!value ? (
        ""
      ) : (
        <div className={styles.selectDrinkTitle}>
          <img src="/image/logo.png" alt="zIcon" />

          <h1>
            Select{" "}
            {value === "hot"
              ? "Hot Drink:"
              : value === "cold"
              ? "Cold Drink:"
              : value === "food"
              ? "Food:"
              : `${value}:`}
          </h1>
        </div>
      )}
      <div className={styles.drinkSelection}>
        <div className={styles.drinksContainer}>
          {drinks.map((drink) => (
            <div className={styles.drinkCard} key={drink.id}>
              <div className={styles.cardImage}>
                <img src={drink.img} alt={drink.name} />
              </div>
              <div className={styles.cardLabel}>{drink.name}</div>
            </div>
          ))}
        </div>
      </div>
      <OrderOverlay />
    </>
  );
}

export default SelectionPage;
