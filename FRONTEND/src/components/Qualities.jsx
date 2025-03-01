import React, { useState, useEffect } from "react";

const Qualities = () => {
    const [ourQualities, setOurQualities] = useState([]);

    useEffect(() => {
        fetch("/restApi.json") // ✅ Fetch JSON from the 'public/' folder
            .then((res) => res.json())
            .then((jsonData) => {
                setOurQualities(jsonData.data[0]?.ourQualities || []);
            })
            .catch((error) => console.error("Error fetching JSON:", error));
    }, []);

    return (
        <>
            <section className="qualities" id="qualities">
                <div className="container">
                    {ourQualities.length > 0 ? (
                        ourQualities.map((element) => (
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <p className="title">{element.title}</p>
                                <p className="description">{element.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>Loading qualities...</p> // Show loading state
                    )}
                </div>
            </section>
        </>
    );
};

export default Qualities;
