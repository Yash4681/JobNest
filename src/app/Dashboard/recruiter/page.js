"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Recruiter = () => {
  const [jobList, setJobList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getJobList();
  }, []);

  const getJobList = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const res = await fetch("http://localhost:3000/api/job/", requestOptions);
    const data = await res.json();
    if (data.success) {
      setJobList(data.data);
    } else {
      console.log(data.message);
    }
  };

  const loadEdit = (id) => {
    router.push(`http://localhost:3000/createjob?edit=${id}`);
  };

  const deleteJob = async (id) => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    const res = await fetch(
      `http://localhost:3000/api/job/${id}`,
      requestOptions
    );
    const data = await res.json();
    console.log(data.message);

    setJobList(
      jobList.filter((item) => {
        return item.id !== id;
      })
    );
  };
  return (
    <div className="flex flex-col w-2/3 bg-white shadow-lg rounded-md my-5 p-10 mx-auto">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Job Listing</h2>
        <button
          onClick={() => router.push("http://localhost:3000/createjob")}
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add a Job
        </button>
      </div>

      {jobList.length > 0 &&
        jobList.map((item) => {
          return (
            <div
              key={item.id}
              className="flex w-full justify-between shadow-md rounded-md p-5 my-3"
            >
              <div className="flex flex-col">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <span className="font-semibold text-md ">{item.company}</span>
                <span className="font-semibold text-md ">
                  {item.desc && item.desc.substring(0, 80)}...
                </span>
                <span className="flex items-center gap-1">
                  <img
                    className="size-4"
                    src="https://img.icons8.com/ios-filled/50/marker.png"
                    alt="marker"
                  />{" "}
                  {item.location}
                </span>
                <span>{item.skills}</span>
              </div>
              <div className="flex gap-3">
                <lord-icon
                  src="https://cdn.lordicon.com/xuoapdes.json"
                  trigger="hover"
                  onClick={() => loadEdit(item.id)}
                ></lord-icon>
                <lord-icon
                  src="https://cdn.lordicon.com/xyfswyxf.json"
                  trigger="hover"
                  onClick={() => deleteJob(item.id)}
                ></lord-icon>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Recruiter;
