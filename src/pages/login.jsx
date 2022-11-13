import Image from "next/image";
import React from "react";
import Link from "next/link";
import { HiInbox, HiLockClosed } from "react-icons/hi2";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#E1EBF3]">
      <div className="bg-white rounded-lg w-96 h-1/2 p-5">
        <Image
          src={"/logo/logo-sipenca-lengkap.svg"}
          alt="logo-sipenca-lengkap"
          width={90}
          height={90}
          className="mx-auto my-3"
        />
        <h1 className="text-center font-medium text-xl mt-4">LOGIN</h1>

        <div className="bg-gray-200 rounded-md mt-2 w-full px-3 py-2 focus-within:ring-2 focus-within:ring-[#51557E]">
          <div className="absolute pointer-events-none">
            <HiInbox className="h-5 w-5 text-gray-500" />
          </div>

          <input
            type="text"
            name="text"
            id="text"
            className="w-full pl-10 bg-gray-200 focus:outline-none"
            placeholder="Username"
          />
        </div>

        <div className="bg-gray-200 rounded-md mt-2 w-full px-3 py-2 focus-within:ring-2 focus-within:ring-[#51557E]">
          <div className="absolute pointer-events-none">
            <HiLockClosed className="h-5 w-5 text-gray-500" />
          </div>

          <input
            type="password"
            name="password"
            id="password"
            className="w-full pl-10 bg-gray-200 focus:outline-none"
            placeholder="Password"
          />
        </div>

        <Link href="/dashboard">
          <button
            type="submit"
            className=" text-white font-bold py-2 px-4 rounded-md bg-[#51557E] hover:bg-[#34375a] mt-8 w-full"
          >
            Login
          </button>
        </Link>

        <div className="text-sm font-normal text-center mt-3 w-full px-3 py-2">
          Belum punya akun?
          <Link
            href="/register"
            class="text-blue-700 hover:underline dark:text-blue-500 ml-1"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
