import React from "react";
import Hero from "./Hero";
import FeatureCard from "./FeatureCard";
import Experience from "./Experience";
import "./Home.css";

const Home = function () {
  const featureData = [
    {
      title: "Ronald, Wachington",
      image:
        "https://a0.muscache.com/im/pictures/prohost-api/Hosting-47329445/original/cf46f229-0edf-4ed8-b8b1-80d94a1cb011.jpeg?im_w=720",
      rating: 4.5,
      date: "Nov 12-20",
      price: "$520",
    },
    {
      title: "Portland, OR",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-634384398560090584/original/ed3767ff-21f4-4786-a8f5-82c0b0a13fa4.jpeg?im_w=720",
      rating: 4.5,
      date: "Nov 12-20",
      price: "$520",
    },
    {
      title: "Portland, OR",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-51067890/original/832b807f-f8bc-4e5f-8192-713782fc6073.jpeg?im_w=720",
      rating: 4.5,
      date: "Nov 12-20",
      price: "$520",
    },
    {
      title: "Portland, OR",
      image:
        "https://a0.muscache.com/im/pictures/prohost-api/Hosting-648661675331236459/original/6b379a5e-dfc0-46b9-bd2e-35ccf4dc3dc4.jpeg?im_w=720",
      rating: 4.5,
      date: "Nov 12-20",
      price: "$520",
    },
  ];

  return (
    <section className="home-container">
      <Hero />

      <div className="feature-container-home">
        <h2 className="home-title">Top Rated House</h2>

        <FeatureCard items={featureData} />
        <FeatureCard items={featureData} />
      </div>

      <div className="experience-container-home">
        <h2 className="home-title">Popular Experience</h2>
        <Experience />
      </div>
    </section>
  );
};

export default Home;
