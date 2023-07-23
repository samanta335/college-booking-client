const Research = () => {
  return (
    <div>
      <h1 className="text-2xl mt-16 text-purple-700 font-semibold text-center">
        Research Paper Link
      </h1>

      <div className="grid grid-cols-3 my-14">
        <div className="card w-96 bg-base-100 shadow-lg image-full">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7IZLRJtvme6poQz8cdIPWcjBIvPYyMIGROt_4rgJ_RJfg6AQYZypYaiW-2C0k6Mp_PE&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <a
              href="https://drodrik.scholar.harvard.edu/research-papers"
              className="underline text-white mx-auto "
            >
              <h2 className="card-title">HARVARD COLLEGE</h2>
            </a>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-lg image-full">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9u4YFT-omeLVelXqWlFgaClALpHvj4rTEYpwrsutmlKk3KZQ1voLPdjsphOE6LtrRro&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <a
              href="https://faculty.som.yale.edu/peterschott/research-papers/"
              className="underline text-white mx-auto "
            >
              <h2 className="card-title">YALE COLLEGE</h2>
            </a>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-lg image-full">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gS4piVodfYTggi9eOKHNyxbibqsAbO7Ea5ERKUnFc-yIDjj3Qn-77FmM_Bm9TUJu0Qc&usqp=CAU"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <a
              href="https://www.gsb.stanford.edu/programs/phd/academic-experience/degree-requirements/research-papers"
              className="underline text-white mx-auto "
            >
              <h2 className="card-title">STANFORD COLLEGE</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
