const FilterJobs = () => {
  return (
    <div className="container mx-auto my-14">
      <h2 className="text-4xl font-bold">Find your Next Developer Role</h2>
      <p className="text-gray-400">Search,filter and save the job your like</p>
      <div className="py-8 flex justify-center items-center">
        <div>
          <label className="input outline-0 w-3xl">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input  type="search" required placeholder="Find Your Jobs" />
          </label>
        </div>
        <div className="mx-2 flex gap-2">
            <button className="btn btn-neutral rounded-full">All</button>
            <button className="btn btn-neutral rounded-full">Frontend</button>
            <button className="btn btn-neutral rounded-full">Backend</button>
            <button className="btn btn-neutral rounded-full">Design</button>
        </div>
      </div>
    </div>
  );
};

export default FilterJobs;
