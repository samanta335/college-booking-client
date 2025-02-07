import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ReviewField = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Review Added ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    console.log(data);
  };
  const [rating, setRating] = useState(3);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full  mt-40 ">
      <h2 className="px-5 text-2xl font-semibold">Add your review</h2>
          <div className="form-control my-4 w-full ">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="College name"
              className="input input-bordered border-2 max-w-xs focus:outline-none"
            />
          </div>
          <textarea
            {...register("review")}
            className="input input-bordered border-2 w-4/5 lg:w-2/5 min-h-[150px]  p-5  focus:outline-none   "
            placeholder="Write Review about college"
          />
          <div style={{ maxWidth: 180, width: "100%" }} className="mt-4">
            <Rating value={rating} onChange={setRating} />
            <button
              type="button"
              className="btn-sm font-semibold text-base"
              onClick={() => setRating(0)}
            >
              Reset Rating
            </button>
            <hr />
          </div>
          <div className=" ">
            <input
              className="btn btn-sm btn-primary w-1/5 my-8"
              type="submit"
              value="Post review"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewField;
