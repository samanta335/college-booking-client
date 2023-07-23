import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCollege = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allCollege")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 mt-28">
      {cards.map((collegeCard) => (
        <div
          key={collegeCard._id}
          className="card mb-16 w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img src={collegeCard.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl mx-auto uppercase">
              {collegeCard.name}
            </h2>
            <p className="text-black">
              <span className="font-semibold text-lg">Admission Date: </span>
              {collegeCard.admission_date}
            </p>
            <p className="text-black">
              <span className="font-semibold text-lg">Ratings: </span>
              {collegeCard.rating}
            </p>
            <p className="text-black">
              <span className="font-semibold text-lg">Research Number:</span>
              {collegeCard.research}
            </p>

            <div className="card-actions justify-end">
              <Link
                className="btn btn-primary"
                to={`/details/${collegeCard._id}`}
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCollege;
