import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData, useParams } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  

 

  const onSubmit = async (updatedData) => {
    try {
      const response = await fetch(`https://college-booking-server-delta.vercel.app/admission/${Id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        alert("User updated successfully!");
        setUserData(updatedData);
        document.getElementById("my_modal_5").close(); // Close modal after updating
      } else {
        alert("Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };



  return (
    <div className="w-full px-4 lg:px-32 mt-20">
      
      <div  className=" my-4">
       <div>
       <div className="form-control mr-4 w-full lg:max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">User Name</span>
          </label>
          <input
            {...register("name",)}
            type="text"
            value={user?.displayName}
            className="input input-bordered w-full max-w-xs focus:outline-none"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">User Email</span>
          </label>
          <input
            {...register("email", )}
            type="email"
           value={user?.email}
            className="input input-bordered w-full lg:max-w-xs focus:outline-none"
          />
        </div>
       </div>
       <div>
       </div>
      </div>
      <button
        className="btn btn-sm btn-primary px-5  my-8"
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
                  <span className="label-text font-semibold">Profile Name</span>
                </label>
                <input
                  {...register("ProfileName", { required: true })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs focus:outline-none"
                />
              </div>
            </div>

            <div className="modal-action">
              <input
                className="btn btn-sm btn-primary w-1/4 mt-4"
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
