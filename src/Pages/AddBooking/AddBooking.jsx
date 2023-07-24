import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const img_hosting_token = import.meta.env.VITE_IMAGE;

const AddBooking = () => {
  const { user } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((img) => {
        if (img) {
          const imgUrl = img.data.display_url;
          const { name, email, address, birthDate, number, subject } = data;
          const classInfo = {
            name,
            address,
            email,
            subject,
            birthDate,
            number,
            image: imgUrl,
          };
          console.log(classInfo);
          fetch("http://localhost:5000/admissionCollege", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(classInfo),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Booking done Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });

    // console.log(data);
  };

  return (
    <div className="w-full px-4 lg:px-32 mt-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" lg:flex md:flex my-4">
          <div className="form-control mr-4 w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Candidate Name</span>
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
              <span className="label-text font-semibold">Candidate Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              defaultValue={user?.email}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs focus:outline-none"
            />
          </div>
        </div>
        <div className="lg:flex md:flex my-4">
          <div className="form-control mr-4 w-full max-w-xs focus:outline-none">
            <label className="label">
              <span className="label-text font-semibold">Subject</span>
            </label>
            <input
              {...register("subject", { required: true })}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs focus:outline-none"
            />
          </div>
          <div className="form-control w-full max-w-xs focus:outline-none">
            <label className="label">
              <span className="label-text font-semibold">Candidate Image</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs focus:outline-none"
            />
          </div>
        </div>
        <div className="lg:flex md:flex my-4">
          <div className="form-control w-full  max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Phone Number</span>
            </label>
            <input
              {...register("number", { required: true })}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs focus:outline-none"
            />
          </div>
          <div className="form-control w-full lg:ml-4 max-w-xs">
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
          <div className="form-control w-full lg:ml-4 max-w-xs">
            <label className="label">
              <span className="label-text font-semibold ">Date Of Birth</span>
            </label>
            <input
              {...register("birthDate", { required: true })}
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs focus:outline-none"
            />
          </div>
        </div>
        <div className="text-center ">
          <input
            className="btn btn-primary w-1/4 mt-4"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBooking;
