"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Create = () => {
  const [jobForm, setJobForm] = useState({
    title: "",
    type: "Full time, Permanent",
    company: "",
    desc: "",
    skills: "",
    location: "",
  });
  const searchParams = useSearchParams().get("edit");

  useEffect(() => {
    if (searchParams) {
      getEditData();
    }
  }, []);

  const getEditData = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const res = await fetch(
      `http://localhost:3000/api/job/${searchParams}`,
      requestOptions
    );
    const data = await res.json();

    if (data.success) {
      setJobForm(data.data);
      console.log(data.data);
    } else {
      console.log(data.message);
    }
  };

  const handleSubmit = async () => {
    if (searchParams) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify(jobForm);

      const requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const res = await fetch(
        `http://localhost:3000/api/job/${searchParams}`,
        requestOptions
      );
      const data = await res.json();
      console.log(data.message);
    } else {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify(jobForm);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const res = await fetch("http://localhost:3000/api/job", requestOptions);
      const data = await res.json();
      console.log(data.message);
    }
  };

  return (
    <div className="flex flex-col w-2/3 mx-auto bg-white shadow-lg my-5 rounded-md p-10">
      <h2 className="text-3xl font-bold text-slate-600">
        Post a Job - Hot Vacancy
      </h2>
      <div className="flex flex-col w-full my-7 gap-5">
        <div className="flex w-full">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="title" className="font-semibold">
              Job title / Designation
            </label>
            <input
              type="text"
              className="focus:outline-hidden w-full px-3 py-1 focus:bg-slate-100 rounded-md border-b-2 border-slate-300 focus:border-slate-500"
              name="title"
              id="title"
              onChange={(e) =>
                setJobForm({ ...jobForm, [e.target.name]: e.target.value })
              }
              value={jobForm.title || ""}
              placeholder="Enter a clear & specific title to get better responses"
            />
          </div>
          <div className="flex flex-col mx-5 gap-2">
            <label htmlFor="type" className="font-semibold">
              Employment type
            </label>
            <select
              name="type"
              id="type"
              onChange={(e) =>
                setJobForm({ ...jobForm, [e.target.name]: e.target.value })
              }
              value={jobForm.type || ""}
              className="border-b-2  px-3 py-1 focus:bg-slate-100 focus:outline-hidden rounded-md border-slate-300 focus:border-slate-500"
            >
              <option value="Full time, Permanent">Full time, Permanent</option>
              <option value="Part time, Temporary">Part time, Temporary</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="skills" className="font-semibold">
            Key skills
          </label>
          <input
            type="text"
            className="focus:outline-hidden w-full px-3 py-1 focus:bg-slate-100 rounded-md border-b-2 border-slate-300 focus:border-slate-500"
            name="skills"
            id="skills"
            onChange={(e) =>
              setJobForm({ ...jobForm, [e.target.name]: e.target.value })
            }
            value={jobForm.skills || ""}
            placeholder="Add comma seperated skills that are crutial for this job"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="location" className="font-semibold">
            Job location
          </label>
          <input
            type="text"
            className="focus:outline-hidden w-full px-3 py-1 focus:bg-slate-100 rounded-md border-b-2 border-slate-300 focus:border-slate-500"
            name="location"
            id="location"
            onChange={(e) =>
              setJobForm({ ...jobForm, [e.target.name]: e.target.value })
            }
            value={jobForm.location || ""}
            placeholder="Add comma seperated locations"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="desc" className="font-semibold">
            Job Descrption
          </label>
          <textarea
            className="focus:outline-hidden w-full px-3 py-1 focus:bg-slate-100 rounded-md border-b-2 border-slate-300 focus:border-slate-500"
            name="desc"
            rows={3}
            onChange={(e) =>
              setJobForm({ ...jobForm, [e.target.name]: e.target.value })
            }
            value={jobForm.desc || ""}
            id="desc"
            placeholder="Role & responsibilities: Outline the day-to-day responsibilities for this role.
            Preferred candidate profile: Specify required role expertise, previous job experience, or relevant certifications.
            Perks and benefits: Mention available facilities and benefits the company is offering with this job.
            "
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="company" className="font-semibold">
            Company name
          </label>
          <input
            type="text"
            className="focus:outline-hidden w-full px-3 py-1 focus:bg-slate-100 rounded-md border-b-2 border-slate-300 focus:border-slate-500"
            name="company"
            id="company"
            onChange={(e) =>
              setJobForm({ ...jobForm, [e.target.name]: e.target.value })
            }
            value={jobForm.company || ""}
            placeholder="Add your company name"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={() => handleSubmit()}
        className="text-white bg-gradient-to-br w-fit from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Post Job
      </button>
    </div>
  );
};

export default Create;
