'use client'
import React from 'react'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { completeProfile } from "../actions/completeProfile";
import { toast } from "react-toastify";

const Profile = () => {
  const [state, formAction] = useFormState(completeProfile, "");
  
  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Venture created successfully");
      router.push("/organisations/addNew");
    }
  }, [state]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-20">
        <form action={formAction}>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Complete Your Profile
          </h2>

          <div className="mb-4">
            <label for="email" className="block text-gray-700 font-bold mb-2">
              Registration number
            </label>
            <input
              type="text"
              id="regNo"
              placeholder="Enter your registration number"
              name="regNo"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="mb-6">
            <label
              for="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Passions
            </label>
            <input
              type="text"
              id="passions"
              name="passions"
              placeholder="Enter your passions, separated by commas"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone Contact
            </label>
            <input
              type="text"
              id="passions"
              name="phone"
              placeholder="Enter your Phone Contact"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile