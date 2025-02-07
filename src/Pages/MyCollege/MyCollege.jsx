import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ReviewField from "../Reviews/ReviewField";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [myCollege, setMyCollege] = useState([]);

  useEffect(() => {
    fetch(`https://college-booking-server-delta.vercel.app/admission/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyCollege(data));
  }, [user]);

  

  return (
    <div>
      <div className="pt-5">
        <table className="table table-compact w-full text-center ">
          <thead>
            <tr>
              {/* <th>Image</th> */}
              <th>Candidate Name</th>
              <th>Candidate Email</th>
              <th>Subject</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>BirthDate</th>
            </tr>
          </thead>
          <tbody className="p-5">
            {myCollege.map((college) => (
              <tr key={college._id}>
                {/* <td>
                  <div className="flex items-center ">
                    
                  <div className="avatar">
                      <div className="mask mask-squircle w-10 h-12 ml-14">
                        <img
                          src={college.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                     
                  </div>
                </td> */}
                <td>{college.name}</td>
                <td>{college.email}</td>
                <td>{college.subject}</td>
                <td>{college.address} </td>
                <td>{college.number} </td>
                <td>{college.birthDate} </td>
              </tr>
            ))}
          </tbody>
          <hr />
        </table>
      </div>
      <ReviewField></ReviewField>
    </div>
  );
};

export default MyCollege;
