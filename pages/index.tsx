import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col justify-between">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex justify-between my-2">
              <span className="text-gray-500">Super Table</span>
              <span className="font-semibold">$15000</span>
            </div>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$15999</span>
        </div>
        <div className="flex justify-center">
          <button className="mt-5 bg-blue-500 text-white p-5 text-center rounded-xl w-3/4 mx-auto hover:bg-teal-300 active:bg-yellow-400">
            Checkout
          </button>
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14 md:pb-32 landscape:bg-purple-300 dark:bg-amber-700">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl bg-white p-6 relative -top-5">
          <div className="flex relative -top-16 justify-between items-end">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div
              id="avatar"
              className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-teal-200 transition"
            />
            <div className="flex flex-col items-center ">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Loegnah</span>
            <span className="text-sm text-gray-500">Seoul, KOR</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <div className="flex mb-5 justify-between items-center">
          <span>←</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-300 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-lg">Super chair</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="bg-yellow-400 w-5 h-5 rounded-full focus:ring-2 ring-offset-2 ring-yellow-400 transition" />
              <button className="bg-indigo-400 w-5 h-5 rounded-full focus:ring-2 ring-offset-2 ring-indigo-400 transition" />
              <button className="bg-teal-400 w-5 h-5 rounded-full focus:ring-2 ring-offset-2 ring-teal-400 transition" />
            </div>
            <div className="flex items-center space-x-2">
              <button className="bg-blue-50 aspect-square w-8 text-xl text-gray-600 rounded-lg">
                -
              </button>
              <span>1</span>
              <button className="bg-blue-50 aspect-square w-8 text-xl text-gray-600 rounded-lg">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-2xl">$999</span>
            <button className="bg-blue-400 text-center py-2 px-8 text-xs text-white rounded-xl">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
