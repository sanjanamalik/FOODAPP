import React, { useState, useEffect } from "react";

const WhoAreWe = () => {
  const [whoWeAreData, setWhoWeAreData] = useState([]);

  useEffect(() => {
    fetch("/restApi.json") // ✅ Fetch JSON from 'public/' folder
      .then((res) => res.json())
      .then((jsonData) => {
        setWhoWeAreData(jsonData.data[0]?.who_we_are || []);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <>
      <section className="who_are_we" id="who_are_we">
        <div className="container">
          <div className="text_banner">
            {whoWeAreData.slice(0, 2).map((element) => (
              <div className="card" key={element.id}>
                <h1 className="heading" style={{ fontWeight: "300" }}>
                  {element.number}
                </h1>
                <p>{element.title}</p>
              </div>
            ))}
          </div>
          <div className="image_banner">
            <img className="gradient_bg" src="center.png" alt="gradientBg" />
            <img src="whoweare.png" alt="food" />
          </div>
          <div className="text_banner">
            {whoWeAreData.slice(2).map((element) => (
              <div className="card" key={element.id}>
                <h1 className="heading" style={{ fontWeight: "300" }}>
                  {element.number}
                </h1>
                <p>{element.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;
