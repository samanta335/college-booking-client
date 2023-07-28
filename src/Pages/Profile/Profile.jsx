import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    fetch("https://college-booking-liard.vercel.app/users", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "update done Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-full px-4 lg:px-32 mt-20">
      <div className=" my-4">
        <div className="form-control mr-4 w-full lg:max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">User Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            value={user?.displayName}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">User Email</span>
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            value={user?.email}
            placeholder="Type here"
            className="input input-bordered w-full lg:max-w-xs focus:outline-none"
          />
        </div>
      </div>
      <button
        className="btn btn-sm btn-primary  "
        onClick={() => window.my_modal_5.showModal()}
      >
        Edit
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <dialog id="my_modal_5" className="modal modal-bottom  sm:modal-middle">
          <form method="dialog" className="modal-box">
            <div className="flex my-4">
              <div className="form-control mr-4 w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">User Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs focus:outline-none"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">User Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs focus:outline-none"
                />
              </div>
            </div>
            <div className="flex my-4">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Address</span>
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs focus:outline-none"
                />
              </div>
              <div className="form-control w-full ml-4 max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">College Name</span>
                </label>
                <input
                  {...register("collegeName", { required: true })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs focus:outline-none"
                />
              </div>
            </div>

            <div className="modal-action">
              <input
                className="btn btn-primary w-1/4 mt-4"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </dialog>
      </form>
    </div>
  );
};

export default Profile;
