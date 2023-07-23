import React from "react";
import Tabs from "./Tabs";

function Main() {
  return (
    <>
      <section className="container">
        <div className="top-text">
          <h1>1.1 Scope of Physics</h1>
          <div>
            <p>
              <a href="https://flexbooks.ck12.org/flexbooks/student/">
                FlexBooks 2.0
              </a>
              {">"}{" "}
              <a href="https://flexbooks.ck12.org/cbook/ck-12-physics-flexbook-2.0/">
                CK-12 Interactive Physics For High School{" "}
              </a>
              {">"} Scope of Physics
            </p>
          </div>
          <p className="small-text">Last Modified: Jul 03, 2019</p>
        </div>
        <Tabs />
      </section>
    </>
  );
}

export default Main;
