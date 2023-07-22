import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CollegeCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("colleges.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 mt-36">
      {cards.map((card) => (
        <div key={card.id} className="card mb-16 w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={card.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl mx-auto uppercase">
              {card.name}
            </h2>
            <p className="text-black">
              <span className="font-semibold text-lg">Admission Date: </span>
              {card.admission_date}
            </p>
            <p className="text-black">
              <span className="font-semibold text-lg">Events: </span>
              {card.events}
            </p>
            <p className="text-black">
              <span className="font-semibold text-lg">Research History: </span>
              {card.research}
            </p>
            <p className="text-black">
              <span className="font-semibold text-lg">Sports: </span>
              {card.sports}
            </p>
            <div className="card-actions justify-end">
              <Link className="btn btn-primary" to="/cardDetail">
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollegeCard;
