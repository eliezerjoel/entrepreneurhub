"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useFormState } from "react-dom";
import createVenture from "../app/actions/createVenture";

const VentureForm = () => {
  const [state, formAction] = useFormState(createVenture, {});

  const router = useRouter();

  useEffect(()=>{
    if(state.error) toast.error(state.error);
    if(state.success){
      toast.success("Venture created successfully");
      router.push("/");
    }
  }, [state]);

  return (
    <div className="mt-6">
      <form action={formAction}>
        <h2 className="text-xl font-bold">Create a New Venture</h2>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Venture Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="writeUp"
              className="block text-sm font-medium text-gray-700"
            >
              Write-Up
            </label>
            <textarea
              id="writeUp"
              name="writeUp"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
             <input
              type="file"
              id="image"
              name="image"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            Submit Venture
          </button>
        </div>
      </form>
    </div>
  );
};

export default VentureForm;
