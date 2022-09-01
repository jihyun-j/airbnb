import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import "./Result.css";

const Results = function () {
  const location = useLocation();
  // console.log(location);

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [adult, setAdult] = useState(location.state.adult);
  const [children, setChildren] = useState(location.state.children);
  const [infant, setInfant] = useState(location.state.infant);
  const [pet, setPet] = useState(location.state.pet);

  const getData = async () => {
    try {
      const res = await fetch("https://links.papareact.com/isz");
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log("error", e);
    }
  };

  getData();

  return (
    <main>
      <section className="results-container">
        <p className="results-date">
          {`${format(date[0].startDate, "MM/dd/yyyy")}`} -{" "}
          {`${format(date[0].endDate, "MM/dd/yyyy")}`}
        </p>
        <p className="results-sub">
          300+ Stays for Audult {adult} / Children {children} / Infant {infant}{" "}
          / Pet {pet}
        </p>
        <p className="results-title">Stays in {destination}</p>

        <div className="filter-container">
          <p className="filter">Cancellation Flexibility</p>
          <p className="filter">Type of Place</p>
          <p className="filter">Price</p>
          <p className="filter">Room and Beds</p>
          <p className="filter">More filters</p>
        </div>
      </section>

      <section className="search-reasults"></section>
    </main>
  );
};

export default Results;

// export async function getSearchResult() {
//   const searchResults = await fetch("https://links.papareact.com/isz").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       searchResults,
//     },
//   };
// }
