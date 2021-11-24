import React, { useState } from "react";

export const GifExpertApp = () => {
  //   const catergories = ["One Punch", "Samuray X", "Dragon Ball"];

  const [categories, setCategories] = useState(["One Punch","Samuray X","Dragon Ball"]);

  const handleAdd = () => {
    setCategories((cat) => ["One Piece", ...categories]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((cat) => {
          return <li key={cat}>{cat}</li>;
        })}
      </ol>
    </>
  );
};
