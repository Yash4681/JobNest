"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const NavBar = () => {
  const router = useRouter();
  const [active, setActive] = useState("");
  return (
    <nav className="flex justify-between px-10 items-center bg-[#E9DFC3]">
      <Link href={"/"} onClick={() => setActive("")}>
        <div className="logo flex gap-3 items-center font-bold text-2xl">
          <Image
            src="/logo.png"
            className="my-2 rounded-lg"
            width={50}
            height={30}
            alt="logo"
          />
          JobNest
        </div>
      </Link>
      <div className="flex items-center">
        <ul className="flex gap-4 mx-2">
          <Link
            href={"/"}
            onClick={() => setActive("fj")}
            className={active === "fj" ? `border-b-2 border-[#FFF8F8]` : ""}
          >
            <li>Find Job</li>
          </Link>
          <Link
            href={"/"}
            onClick={() => setActive("ft")}
            className={active === "ft" ? `border-b-2 border-[#FFF8F8]` : ""}
          >
            <li>Find Talent</li>
          </Link>
          <Link
            href={"/"}
            onClick={() => setActive("uj")}
            className={active === "uj" ? `border-b-2 border-[#FFF8F8]` : ""}
          >
            <li>Upload Job</li>
          </Link>
          <Link
            href={"/"}
            onClick={() => setActive("au")}
            className={active === "au" ? `border-b-2 border-[#FFF8F8]` : ""}
          >
            <li>About Us</li>
          </Link>
        </ul>
        <button
          onClick={() => router.push("/login")}
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Login
        </button>
        <button
          onClick={() => signOut()}
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mb-2"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
