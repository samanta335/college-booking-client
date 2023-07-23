import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CollegeCard = () => {
  const [cards, setCards] = useState([]);
  const [searchName, setSearchName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/collegeCard")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/nameSearch/${searchName}`)
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <div>
          <input
            onChange={(e) => setSearchName(e.target.value)}
            type="text"
            placeholder="Type College Name"
            className="input input-bordered input-accent focus:outline-none mt-24 mx-auto w-full max-w-xs"
          />
        </div>
        <div>
          <button
            className="btn btn-sm btn-accent mt-24 ml-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
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
                <span className="font-semibold text-lg">Events: </span>
                {collegeCard.events}
              </p>
              <p className="text-black">
                <span className="font-semibold text-lg">
                  Research History:{" "}
                </span>
                {collegeCard.research}
              </p>
              <p className="text-black">
                <span className="font-semibold text-lg">Sports: </span>
                {collegeCard.sports}
              </p>
              <div className="card-actions justify-end">
                <Link
                  className="btn btn-primary"
                  to={`/collegeCard/${collegeCard._id}`}
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeCard;
