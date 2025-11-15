import React from "react";
import styles from "./SelectionPage.module.css";

function SelectionPage() {
  // const []

  //   const hotDrinks = [
  //     {
  //       name: "Americano",
  //       img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
  //     },
  //     {
  //       name: "Americano",
  //       img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
  //     },
  //     {
  //       name: "Americano",
  //       img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
  //     },
  //     {
  //       name: "Americano",
  //       img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
  //     },
  //     {
  //       name: "Americano",
  //       img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
  //     },
  //     {
  //       name: "Americano",
  //       img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
  //     },
  //     {
  //       name: "Americano",
  //       img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
  //     },
  //     {
  //       name: "Americano",
  //       img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
  //     },
  //     {
  //       name: "Americano",
  //       img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
  //     },
  //     {
  //       name: "Americano",
  //       img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
  //     },
  //     {
  //       name: "Americano",
  //       img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
  //     },
  //     {
  //       name: "Americano",
  //       img: "/image/foodOrderingComponents/SmallImageComponents/hotDrinks/Property 1=Americano.png",
  //     },
  //   ];

  const coldDrinks = [
    {
      name: "Banana Berry Smoothie",
      img: "/image/foodOrderingComponents/SmallImageComponents/coldDrinks/Property 1=Banana Berry Smoothie.png",
    },
  ];

  // const food = [
  //   {
  //     name: "Classic Mince and Cheese",
  //     img: "/image/foodOrderingComponents/SmallImageComponents/Foods/Property 1=Classic Mince and Cheese.png",
  //   },
  // ];
  return (
    <>
      <div className={styles.selectDrinkTitle}>
        <img src="/image/logo.png" alt="zIcon" />
        <h1>Select Drink:</h1>
      </div>
      <div className={styles.drinkSelection}>
        <div className={styles.drinksContainer}>
          {coldDrinks.map((drink) => (
            <div className={styles.drinkCard} key={drink.name}>
              <div className={styles.cardImage}>
                <img src={drink.img} alt={drink.name} />
              </div>
              <div className={styles.cardLabel}>{drink.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SelectionPage;
