import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Pizza = function () {
  return (
    <div>
      <h2>Pizza</h2>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
      <img src="pizzas/funghi.jpg" alt="Pissa" />
    </div>
  );
};

const Header = function () {
  return (
    <header>
      <h1
        className="header"
        style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
      >
        Fast React Pizza Co.
      </h1>
    </header>
  );
};

const Menu = function () {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
    </div>
  );
};

const Footer = function () {
  const hours = new Date().getHours();
  console.log(hours);
  const openHours = 8;
  const closeHour = 22;
  const isOpen = hours >= openHours && hours <= closeHour;
  console.log(isOpen);

  //   if (hours >= openHours && hours <= closeHour) {
  //     alert("We're currently open");
  //   } else {
  //     alert("Sorry We're closed");
  //   }

  return (
    <footer> {new Date().toLocaleTimeString()} We're currently open !</footer>
  );
  //   return React.createElement("footer", null, "We're currently open !");
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
