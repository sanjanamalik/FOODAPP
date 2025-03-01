import React, { useState, useEffect } from "react";

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch("/restApi.json") // ✅ Fetch JSON from 'public/' folder
      .then((res) => res.json())
      .then((jsonData) => {
        setTeamData(jsonData.data[0]?.team || []);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className="team_container">
          {teamData.map((element) => (
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.name} />
              <h3>{element.name}</h3>
              <p>{element.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
