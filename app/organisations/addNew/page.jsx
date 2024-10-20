'use client';
import { createOrganisation } from "../../actions/createOrganisation";
import Link from 'next/link';
import React from 'react'
import { useEffect } from 'react';
import {useFormState } from 'react-dom'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Organisation = () => {
  const [state, formAction] = useFormState(createOrganisation, "");
  
  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Organisation created successfully");
      router.push("/ventures/addNew");
    }
  }, [state]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-20">
        <form action={formAction}>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create your organisation
          </h2>

          <div className="mb-4">
            <label for="email" className="block text-gray-700 font-bold mb-2">
              Organisation Name
            </label>
            <input
              type="text"
              id="regNo"
              placeholder="Enter your registration number"
              name="name"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="mb-6">
            <label
              for="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Members
            </label>
            <input
              type="text"
              id="passions"
              name="member"
              placeholder="Members regNos, separated by commas"
              className="border rounded w-full py-2 px-3"
            
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

export default Organisation