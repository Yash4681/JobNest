"use client";
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Register = () => {
  return (
    <>
      <div className="flex flex-col w-1/3 items-center mx-auto my-5 shadow-xl rounded-lg bg-white">
        <div className="flex flex-col gap-3 items-center mb-5 mt-10">
          <h2 className="font-bold text-3xl">Sign up</h2>
          <span className="text-sm">Sign up to continue</span>
        </div>
        <div className="flex flex-col w-full px-15">
          <input
            type="text"
            className="px-4 py-2 border-b-2 rounded-md my-3 focus:outline-hidden focus:border-slate-500 border-slate-300"
            placeholder="What is your name?"
            name="name"
            id="name"
          />
          <input
            type="text"
            className="px-4 py-2 border-b-2 rounded-md my-3 focus:outline-hidden focus:border-slate-500 border-slate-300"
            placeholder="Tell us your Email ID"
            name="email"
            id="email"
          />
          <input
            type="text"
            className="px-4 py-2 border-b-2 rounded-md my-3 focus:outline-hidden focus:border-slate-500 border-slate-300"
            placeholder="Password"
            name="password"
            id="password"
          />
          <input
            type="number"
            className="px-4 py-2 border-b-2 rounded-md my-3 focus:outline-hidden focus:border-slate-500 border-slate-300"
            placeholder="Enter your mobile number"
            name="mobile"
            id="mobile"
          />
          <button
            type="button"
            className="text-white bg-gradient-to-br w-full from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 my-4"
          >
            Sign up
          </button>
        </div>
        <div className="flex w-full mt-10 items-center px-15">
          <div className="h-[1px] w-1/3 bg-slate-200"></div>
          <span className="mx-2 text-xs">ACCESS QUICKLY</span>
          <div className="h-[1px] w-1/3 bg-slate-200"></div>
        </div>
        <div className="flex gap-5 mt-5 mb-10">
          <button
            type="button"
            className="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              fill="#fff"
              viewBox="0 0 155.139 155.139"
            >
              <path
                d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                data-original="#010002"
              />
            </svg>
          </button>

          <button
            onClick={() => signIn("github")}
            type="button"
            className="w-10 h-10 inline-flex items-center justify-center rounded-full border-2 outline-none bg-white hover:bg-slate-300 active:bg-slate-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </button>

          <button
            type="button"
            className="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-red-600 hover:bg-red-700 active:bg-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(8.53333,8.53333)">
                  <path d="M15.00391,3c-6.629,0 -12.00391,5.373 -12.00391,12c0,6.627 5.37491,12 12.00391,12c10.01,0 12.26517,-9.293 11.32617,-14h-1.33008h-2.26758h-7.73242v4h7.73828c-0.88958,3.44825 -4.01233,6 -7.73828,6c-4.418,0 -8,-3.582 -8,-8c0,-4.418 3.582,-8 8,-8c2.009,0 3.83914,0.74575 5.24414,1.96875l2.8418,-2.83984c-2.134,-1.944 -4.96903,-3.12891 -8.08203,-3.12891z"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-full text-sm my-2">
        <span>Already have an account?</span>
        <Link className="mx-2 text-blue-600 underline" href="login">
          Sign In
        </Link>
      </div>
    </>
  );
};

export default Register;
