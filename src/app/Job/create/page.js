import React from "react";

const CreateJob = () => {
  return (
    <div className="mx-auto my-5 w-1/2 bg-white flex shadow-lg items-center rounded-md flex-col p-10 gap-3">
      <h2 className="font-bold text-2xl">Create Job</h2>
      <div className="form flex w-full flex-col gap-3 px-5">
        <div>
          <legend className="font-bold">Title</legend>
          <input
            className="focus:bg-slate-100 my-1 focus:outline-none border-b-2 border-slate-300 focus:border-slate-500 w-full rounded-md px-3 py-1"
            type="text"
            placeholder="Enter job title"
            name="title"
            id="title"
          />
        </div>
        <div>
          <legend className="font-bold">Company</legend>
          <input
            className="focus:bg-slate-100 my-1 focus:outline-none border-b-2 border-slate-300 focus:border-slate-500 w-full rounded-md px-3 py-1"
            type="text"
            placeholder="Enter company name"
            name="Company"
            id="Company"
          />
        </div>
        <div>
          <legend className="font-bold">Location</legend>
          <input
            className="focus:bg-slate-100 my-1 focus:outline-none border-b-2 border-slate-300 focus:border-slate-500 w-full rounded-md px-3 py-1"
            type="text"
            placeholder="Enter job Location"
            name="Location"
            id="Location"
          />
        </div>
        <div>
          <legend className="font-bold">Type</legend>
          <input
            className="focus:bg-slate-100 my-1 focus:outline-none border-b-2 border-slate-300 focus:border-slate-500 w-full rounded-md px-3 py-1"
            type="text"
            placeholder="Enter job Type"
            name="Type"
            id="Type"
          />
        </div>
        <div>
          <legend className="font-bold">Description</legend>
          <textarea
            className="focus:bg-slate-100 my-1 focus:outline-none border-b-2 border-slate-300 focus:border-slate-500 w-full rounded-md px-3 py-1"
            type="text"
            placeholder="Enter job Description"
            name="Description"
            id="Description"
          />
        </div>
      </div>
      <div className="w-full px-10">
        <button
          type="button"
          className="text-white bg-gradient-to-br w-full from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center my-4"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateJob;
