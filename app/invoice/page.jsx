import React from "react";

export default function Invoicepage() {
  return (
    <div className="w-full h-screen px-4 sm:px-8 lg:px-16 xl:px-24 bg-stone-400-200">
      <div className="bg-blue-400  items-center text-center ">hi</div>

      <div className="flex flex-col md:flex-row" id="inv-head">
        <div className="bg-blue-800 w-full md:w-1/3 text-white p-4 ">
          <div className="flex flex-col md:flex-col md:items-center">
            <div className="flex flex-col md:w-full md:flex-row md:items-center bg-yellow-400">
              <label
                htmlFor="mobile"
                className="text-sm font-semibold text-gray-900 mb-2 md:mr-4 dark:text-gray-300"
              >
                Mobile No
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                className="bg-gray-50 border rounded-lg border-gray-400 text-gray-900 focus:ring-offset-2 focus:ring-green-500 focus:border-red-400 block w-full p-2.5"
                placeholder="077xxxxxxx"
              />
            </div>

            <div className="flex flex-col md:flex-col md:items-center">
              <label
                htmlFor="customer"
                className="text-sm font-semibold text-gray-900 mb-2 md:mr-4 dark:text-gray-300"
              >
                Customer Name
              </label>
              <input
                type="text"
                name="customer"
                id="customer"
                className="bg-gray-50 border rounded-lg border-gray-400 text-gray-900 focus:ring-offset-2 focus:ring-green-500 focus:border-red-400 block w-full p-2.5"
                placeholder="yourname@email.com"
              />
            </div>
            <div className="flex flex-col md:flex-col md:items-center">
              <label
                htmlFor="customer"
                className="text-sm font-semibold text-gray-900 mb-2 md:mr-4 dark:text-gray-300"
              >
                Address
              </label>
              <input
                type="text"
                name="customer"
                id="customer"
                className="bg-gray-50 border rounded-lg border-gray-400 text-gray-900 focus:ring-offset-2 focus:ring-green-500 focus:border-red-400 block w-full p-2.5"
                placeholder="yourname@email.com"
              />
            </div>
          </div>
        </div>

        <div className="bg-blue-600 w-full md:w-1/3 text-white p-4 ">
          <div className="flex flex-col md:flex-row md:items-center">
            <label
              htmlFor="customer"
              className="text-sm font-semibold text-gray-900 mb-2 md:mr-4 dark:text-gray-300"
            >
              Date
            </label>
            <input
              type="text"
              name="customer"
              id="customer"
              className="bg-gray-50 border rounded-lg border-gray-400 text-gray-900 focus:ring-offset-2 focus:ring-green-500 focus:border-red-400 block w-full p-2.5"
              placeholder="yourname@email.com"
            />

            <label
              htmlFor="customer"
              className="text-sm font-semibold text-gray-900 mb-2 md:mr-4 dark:text-gray-300"
            >
              Invoice No
            </label>
            <input
              type="text"
              name="customer"
              id="customer"
              className="bg-gray-50 border rounded-lg border-gray-400 text-gray-900 focus:ring-offset-2 focus:ring-green-500 focus:border-red-400 block w-full p-2.5"
              placeholder="yourname@email.com"
            />
          </div>
        </div>

        <div className="bg-blue-200 w-full md:w-1/3 text-white p-4 text-center">
          more details
        </div>
      </div>
    </div>
  );
}
