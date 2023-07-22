const Search = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <input
          type="text"
          placeholder="Type College Name"
          className="input input-bordered input-accent focus:outline-none mt-28 mx-auto w-full max-w-xs"
        />
      </div>
      <div>
        <button className="btn btn-sm btn-accent mt-28 ml-2">Search</button>
      </div>
    </div>
  );
};

export default Search;
