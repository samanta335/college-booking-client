import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const AddBooking = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFile(reader.result); // Convert to Base64
      setPreview(reader.result); // For preview
    };
  };
  const onSubmit = (data) => {
    
    // const formData = new FormData();
    // formData.append("image", data.image[0]);
    
  fetch("http://localhost:5000/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image: file })

  })
    .then((res) => res.json())
    .then((img) => {
      if (img) {
        const imageName = data.image[0].name
        const { name, email, address, birthDate, number, subject } = data;
        const classInfo = {
          name,
          address,
          email,
          subject,
          birthDate,
          number,
          image: imageName,
        };
  console.log(classInfo)
          fetch("http://localhost:5000/admissionCollege", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:  JSON.stringify(classInfo),
          })
            .then((res) => res.json())
            .then((result) => {
              // console.log(result);
              if (result.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Submitted",
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
              {...register("name", )}
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
              {...register("subject", )}
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
              accept="image/jpg, image/png"
              onChange={handleFileChange} 
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
              {...register("number", )}
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
              {...register("address",)}
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
              {...register("birthDate",)}
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs focus:outline-none"
            />
          </div>
        </div>
        <div className="text-center ">
          <input
            className="btn btn-primary w-1/4 my-4"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      {/* {preview && (
        <div>
          <h3>Preview:</h3>
          <img src={preview} alt="Preview" width="200" />
        </div>
      )} */}
    </div>
  );
};

export default AddBooking;
