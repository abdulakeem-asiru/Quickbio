import React from "react";
import Header from "./Header";
import { FaArrowRight } from "react-icons/fa6";

function Card() {
  return (
    <div className="card">
      <Header />

      <p> Enter a few keywords to create your bio.</p>

        <div className="input-field">
          <input type="text" placeholder="Web developer, foodie, minimalist" />
          <button><FaArrowRight size={20} color="#fff"/></button>
        </div>
    
      <p className="bio">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cum
        natus molestiae molestias ullam repellat excepturi nobis quae, unde
        magni, consectetur dignissimos a, sapiente et numquam magnam
        praesentium! Quas, illum.
      </p>
      <button className="btn-copy" id="copy">Copy</button>

    </div>
  );
}

export default Card;
