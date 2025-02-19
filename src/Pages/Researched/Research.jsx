const Research = () => {
  return (
    <div>
      <h1 className="text-3xl mt-16 text-purple-700 font-semibold text-center">
        Research Paper Link
      </h1>

      <div className="grid lg:grid-cols-3 my-14 gap-4 ">
        <div className="card w-4/5 lg:w-96 mx-auto bg-base-100 shadow-lg image-full">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7IZLRJtvme6poQz8cdIPWcjBIvPYyMIGROt_4rgJ_RJfg6AQYZypYaiW-2C0k6Mp_PE&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div className="card-body  ">
            <a
              href="https://drodrik.scholar.harvard.edu/research-papers"
              className="underline transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-amber-200 text-white mx-auto "
            >
              <h2 className="card-title text-2xl">HARVARD COLLEGE</h2>
            </a>
          </div>
        </div>
        <div className="card w-4/5 lg:w-96 mx-auto bg-base-100 shadow-lg image-full">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9u4YFT-omeLVelXqWlFgaClALpHvj4rTEYpwrsutmlKk3KZQ1voLPdjsphOE6LtrRro&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div className="card-body ">
            <a
              href="https://faculty.som.yale.edu/peterschott/research-papers/"
              className="underline transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-amber-200 text-white mx-auto "
            >
              <h2 className="card-title text-2xl">YALE COLLEGE</h2>
            </a>
          </div>
        </div>
        <div className="card w-4/5 lg:w-96 mx-auto bg-base-100 shadow-lg image-full">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gS4piVodfYTggi9eOKHNyxbibqsAbO7Ea5ERKUnFc-yIDjj3Qn-77FmM_Bm9TUJu0Qc&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div className="card-body ">
            <a
              href="https://www.gsb.stanford.edu/programs/phd/academic-experience/degree-requirements/research-papers"
              className="underline transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-amber-200 text-white mx-auto "
            >
              <h2 className="card-title text-2xl">STANFORD COLLEGE</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
