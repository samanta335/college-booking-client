import { useEffect, useState } from "react";

const CardDetail = () => {
  const [cardDetail, setCardDetail] = useState([]);

  useEffect(() => {
    fetch("colleges.json")
      .then((res) => res.json())
      .then((data) => setCardDetail(data));
  }, []);
  return (
    <div>
      {cardDetail.map((details) => (
        <div
          key={details.id}
          className="card mt-24 lg:card-side bg-base-100 shadow-xl"
        >
          <figure>
            <img src={details.img} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{details.name}</h2>
            <p></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDetail;
