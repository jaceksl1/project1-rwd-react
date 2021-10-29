import React from "react";
import IsNew from "./IsNew";

const Section3 = () => {
  return (
    <>
      <div>
        <section class="section3">
          <div class="section3-h1">
            <h1 id="oferta_1">Czym zajmuje się nasza firma?</h1>
          </div>
          <div class="section3-box">
            <IsNew />
            <button class="s3-button">
              <p class="section3-p">Usługa 2</p>
            </button>
            <button class="s3-button">
              <p class="section3-p">Usługa 3</p>
            </button>
            <button class="s3-button">
              <p class="section3-p">Usługa 4</p>
            </button>
            <button class="s3-button">
              <p class="section3-p">Usługa 5</p>
            </button>
            <button class="s3-button">
              <p class="section3-p">Usługa 6</p>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section3;
