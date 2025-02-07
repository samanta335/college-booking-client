import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-10 my-32">
      <div className="flex items-center mx-auto ">
        <div className="mask mask-squircle mr-4 w-12 h-12 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTne8eoJgtynTzBM9BU6NBuwc6SfBeHO_eXUOA05LRw7WSfcLOZKDbTpyKL5aAx8CuHxI&usqp=CAU"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
        <Link to="/booking" className="underline hover:text-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-purple-800">
          Harvard College
        </Link>
      </div>
      <div className="flex items-center mx-auto ">
        <div className="mask mask-squircle mr-4 w-12 h-12 ">
          <img
            src="https://www.bctransferguide.ca/logos/1508_logo.png"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
        <Link to="/booking" className="underline hover:text-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-purple-800">
          Columbia College
        </Link>
      </div>
      <div className="flex items-center mx-auto ">
        <div className="mask mask-squircle mr-4 w-12 h-12 ">
          <img
            src="https://www.static-contents.youth4work.com/university/Documents/Colleges/collegeLogo/1452040.png?v=20180607175711"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
        <Link to="/booking" className="underline hover:text-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-purple-800">
          Imperial College
        </Link>
      </div>
      <div className="flex items-center mx-auto ">
        <div className="mask mask-squircle mr-4 w-12 h-12 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjhMlVSEOwgH9JYzzEqXqOcZozTFoYCp4pltHcWcszN_BKjCiXg0WmTK7bS2RipD4iezU&usqp=CAU"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
        <Link to="/booking" className="underline hover:text-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-purple-800">
          Stanford College
        </Link>
      </div>
      <div className="flex items-center mx-auto ">
        <div className="mask mask-squircle mr-4 w-12 h-12 ">
          <img
            src="https://i.pinimg.com/originals/17/95/d6/1795d69c5ea4f716e5d7fd028d52f6f9.png"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
        <Link to="/booking" className="underline hover:text-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-purple-800">
          Princeton College
        </Link>
      </div>
      <div className="flex items-center mx-auto ">
        <div className="mask mask-squircle mr-4 w-14 h-12 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_AnSgS8PB6LNwrcYoAcLvjEAN4FftH5tLwqykUzxFXMudBCm5IdSOTDLS_LYoDbf_wd0&usqp=CAU"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
        <Link to="/booking" className="underline hover:text-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-purple-800">
          Yale College
        </Link>
      </div>
    </div>
  );
};

export default Admission;
