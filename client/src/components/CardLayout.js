import React from "react";
import Card from "./Card";

const CardLayout = () => {
  return (
    <>
      <Header />
      <div className="card-navigation">
        <a href="#">Programin</a>
        <a href="#">Design</a>
        <a href="#">News</a>
        <a href="#">Geography</a>
      </div>
      <div className="card-layout">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="previus-next">
        <button>Previus</button>
        <button>Next</button>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="left-side">
        <div>Best of the week</div>
        <img
          src="https://unsplash.com/photos/gYmExXn83_8/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNzgzNzI0fA&force=true&w=1920"
          alt="placeholder"
          className="main-img"
        />
      </div>
      <div className="right-side">
        <img
          src="https://unsplash.com/photos/jKU2NneZAbI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8aGlzdG9yeXxlbnwwfHx8fDE2OTA3MTIyODN8MA&force=true&w=1920"
          alt="placeholder"
        />
        <img
          src="https://unsplash.com/photos/Q4g0Q-eVVEg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8aGlzdG9yeXxlbnwwfHx8fDE2OTA3MTIyODN8MA&force=true&w=1920"
          alt="placeholder"
        />
      </div>
    </header>
  );
};

export default CardLayout;
