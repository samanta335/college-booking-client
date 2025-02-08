import { useLoaderData } from "react-router-dom";

const CardDetail = () => {
  const details = useLoaderData();
  console.log(details);

  return (
    <div>
      <div className="card my-24 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-full  h-3/6 mx-4 lg:mx-0 lg:ml-8" src={details.img} alt="Album" />
        </figure>
        <div className="card-body lg:w-1/2 ">
          <h2 className="card-title uppercase text-purple-700">
            {details.name}
          </h2>
          <p className="text-black">
            <span className="font-semibold text-lg">Admission: </span>
            {details.admission_date}
          </p>
          <ul>
            <span className="font-semibold text-lg">Events Details: </span>
            <li>Cultural Fest- {details.event1}</li>
            <li> Career Fair- {details.event2}</li>
            <li>Graduation Ceremony- {details.event3}</li>
          </ul>
          <p className="text-black">
            <span className="font-semibold text-lg">Research Works :</span>{" "}
            {details.research_history}
          </p>
          <p className="text-black">
            <span className="font-semibold text-lg">Sports Detail: </span>
            {details.sports_detail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
