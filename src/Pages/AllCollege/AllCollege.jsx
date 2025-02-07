import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCollege = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://college-booking-server-delta.vercel.app/allCollege")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 mt-28">
      {cards.map((collegeCard) => (
        <div
          key={collegeCard._id}
          className="card mb-16 w-full lg:w-96 bg-base-100 shadow-xl"
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
            <p className="text-black flex items-center">
              <span className="font-semibold mr-2 text-lg">Ratings: </span>
              <Rating
                style={{ maxWidth: 100 }}
                value={collegeCard.rating}
                readOnly
              />
            </p>
            <p className="text-black">
              <span className="font-semibold text-lg">Research Number:</span>
              {collegeCard.research}
            </p>

            <div className="card-actions justify-end">
              <Link
                className="btn btn-sm hover:bg-purple-700 bg-purple-700 text-white"
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
