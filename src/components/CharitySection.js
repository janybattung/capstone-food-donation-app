import Axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import "./CharitySection.css";

function CharitySection() {
  const [charities, setcharities] = useState([]);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/api/charity`)
      .then((res) => {
        console.log(res);
        setcharities(res.data.rows);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="charity-container">
      <h1>List of Charitable Organizations</h1>
      <section className="charity-item">
        {charities.map((char) => {
          return (
            <div className="charity-field">
              <h2>{char.charityname}</h2>
              <h3 className="name">{char.firstname + " " + char.lastname}</h3>
              <p>
                {char.address1 +
                  " " +
                  char.address2 +
                  " " +
                  char.city +
                  " " +
                  char.state}
              </p>
              <p>{char.email + " " + char.phonenumber}</p>
              <a href={char.website}>{char.website}</a>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default CharitySection;
