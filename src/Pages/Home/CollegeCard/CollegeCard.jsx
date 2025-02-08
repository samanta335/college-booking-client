import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CollegeCard = () => {
  const [cards, setCards] = useState([]);
  const [searchName, setSearchName] = useState([]);

  useEffect(() => {
    fetch("https://college-booking-server-delta.vercel.app/collegeCard")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleSearch = () => {
    fetch(`https://college-booking-server-delta.vercel.app/nameSearch/${searchName}`)
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
            placeholder="Search College "
            className="input input-bordered border-purple-300 border-2 text-lg text-center focus:outline-none mt-24 px-8 lg:px-20 "
          />
        </div>
        <div>
          <button
            className="btn btn-sm hover:bg-purple-700 bg-purple-700 text-white mt-24 ml-2"
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
            className="card mb-16 w-full lg:w-96 mx-auto  bg-base-100 shadow-lg"
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
              <div className="card-actions  justify-end">
                <Link
                  className="btn btn-sm  hover:bg-purple-700 bg-purple-700 text-white"
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
