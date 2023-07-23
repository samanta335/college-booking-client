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
        <div className="border border-accent w-1/2 mt-36 mx-auto p-10">
          <div className="form-control my-4 w-full ">
            <label className="label">
              <span className="label-text font-semibold">College Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs focus:outline-none"
            />
          </div>
          <textarea
            {...register("review")}
            className="input input-bordered w-1/2 min-h-[150px] border-purple-500 p-5  focus:outline-none  bg-inherit "
            placeholder="Write Review about college"
          />
          <div style={{ maxWidth: 180, width: "100%" }}>
            <Rating value={rating} onChange={setRating} />
            <button
              type="button"
              className="btn-sm "
              onClick={() => setRating(0)}
            >
              Reset Rating
            </button>
          </div>
          <div className="text-center ">
            <input
              className="btn btn-sm btn-error w-1/4 mt-4"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewField;
