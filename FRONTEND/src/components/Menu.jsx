import React, { useState, useEffect } from "react";

const Menu = () => {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetch("/restApi.json")  // ✅ Fetch JSON from the public folder
            .then((res) => res.json())
            .then((jsonData) => {
                setMenuData(jsonData.data[0]?.dishes || []); // ✅ Fetching dishes dynamically
            })
            .catch((error) => console.error("Error fetching JSON:", error));
    }, []);

    return (
        <section className="menu" id="menu">
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">POPULAR DISHES</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto dolorem!</p>
                </div>
                <div className="dishes_container">
                    {menuData.length > 0 ? (
                        menuData.map((element) => (
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                            </div>
                        ))
                    ) : (
                        <p>Loading dishes...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Menu;
