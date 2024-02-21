import React from "react";

function HomePage() {
  var fruits = ["Apples", "Oranges", "Berries", "Bananas"];
  return (
    <div className="register">
        <div className="col-1">
      <h1>Welcome to Fruit shop</h1>
      {fruits.map((element, index) => {
        return <div>{element}{index}</div>;
      })}
    </div>
    </div>
  );
}

export default HomePage;
