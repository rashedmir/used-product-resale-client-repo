import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import video from "../assets/Homepage_video.mp4";
import useTitle from "../Hooks/useTitle";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import TopBanner from "../Shared/TopBanner/TopBanner";
import "./Main.css";
import Subscribe from "./Subscribe";

const Main = () => {
  useTitle("Trash to Treasure");
  const watches = useLoaderData();
  var count = 0;
  console.log(count);
  return (
    <div>
      <TopBanner></TopBanner>
      <div className="relative">
        <div className="absolute w-full">
          <div>
            <Navbar></Navbar>
          </div>
          <div className="text-white md:mt-64 md:mx-44">
            <h1 className="mt-36 text-center md:text-left md:ml-8 text-3xl md:text-5xl font3 mb-3">
              The pre-owned
            </h1>
            <h1 className="mb-36 text-center md:text-left md:ml-8 text-5xl md:text-8xl font4 font-semibold">
              Watch Exchange
            </h1>
            <div className="md:ml-0 ml-28 mt-5 font-bold">
              <Link to="/login">
                <button className="bg-white hover:bg-transparent rounded-full mr-10 text-black custom-btn btn-8">
                  BUY WATCH
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-white hover:bg-transparent rounded-full mr-10 text-black custom-btn btn-8">
                  SELL WATCH
                </button>
              </Link>
            </div>
            <p className="md:text-xl font1 text-center mt-20">
              One Man's Trash Another Man's Treasure
            </p>
          </div>
        </div>
        <div className="main">
          <video src={video} autoPlay loop muted type="video/mp4"></video>
        </div>
      </div>
      {/* All watches */}
      <div>
        <h2 className="mx-8 md:mx-48 mt-10 text-xl md:text-2xl font1 font-bold">
          SHOP
        </h2>
        <h2 className="mx-8 md:mx-48 mt-5 text-3xl md:text-5xl font4 font-bold">
          Rolex Watches
        </h2>
        <div className="flex flex-wrap gap-10 py-10 w-full justify-around px-16 md:px-36">
          {watches.map((watch) => {
            return (
              <div
                key={watch._id}
                className={`flex flex-wrap w-96 mb-5 py-2 ${
                  watch.title == "Rolex" ? "" : "hidden"
                }`}
              >
                {watch.title == "Rolex" && (
                  <div class="flex flex-col max-w-sm">
                    <div className="flex justify-center">
                      <a href="/">
                        <img
                          class="rounded-t-lg w-48 py-5 md:h-80 ml-10 md:ml-0"
                          src={watch.picture}
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="md:p-10">
                      <a href="/rolex">
                        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
                          Brand: {watch.title}
                        </h5>
                        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
                          Watch Name: {watch.name}
                        </h5>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <hr class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10" />
      <div>
        <h2 className="mx-8 md:mx-48 mt-5 text-3xl md:text-5xl font4 font-bold">
          Omega Watches
        </h2>
        <div className="flex flex-wrap gap-10 py-10 w-full justify-around px-16 md:px-36">
          {watches.map((watch) => {
            return (
              <div
                key={watch._id}
                className={`flex flex-wrap w-96 mb-5 py-2 ${
                  watch.title == "Omega" ? "" : "hidden"
                }`}
              >
                {watch.title == "Omega" && (
                  <div class="flex flex-col max-w-sm">
                    <div className="flex justify-center">
                      <a href="/">
                        <img
                          class="rounded-t-lg w-48 py-5 h-80 ml-10 md:ml-0"
                          src={watch.picture}
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="md:p-10">
                      <a href="/rolex">
                        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
                          Brand: {watch.title}
                        </h5>
                        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
                          Watch Name: {watch.name}
                        </h5>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <hr class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10" />
      <div>
        <h2 className="mx-8 md:mx-48 mt-5 text-3xl md:text-5xl font4 font-bold">
          Luxury Watches
        </h2>
        <div className="flex flex-wrap gap-10 py-10 w-full justify-around px-16 md:px-36">
          {watches.map((watch) => {
            return (
              <div
                key={watch._id}
                className={`flex flex-wrap w-96 mb-5 py-2 ${
                  watch.title == "Luxury Watch" ? "" : "hidden"
                }`}
              >
                {watch.title == "Luxury Watch" && (
                  <div class="flex flex-col max-w-sm">
                    <div className="flex justify-center">
                      <a href="/">
                        <img
                          class="rounded-t-lg w-48 py-5 h-80 ml-10 md:ml-0"
                          src={watch.picture}
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="md:p-10">
                      <a href="/rolex">
                        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
                          Brand: {watch.title}
                        </h5>
                        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
                          Watch Name: {watch.name}
                        </h5>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <hr class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 " />
      <div>
        <h2 className="mx-8 md:mx-48 mt-5 text-3xl md:text-5xl font4 font-bold">
          Vintage Rolex
        </h2>
        <div className="flex flex-wrap gap-10 py-10 w-full justify-around px-16 md:px-36">
          {watches.map((watch) => {
            return (
              <div
                key={watch._id}
                className={`flex flex-wrap w-96 mb-5 py-2 ${
                  watch.title == "Vintage Rolex" ? "" : "hidden"
                }`}
              >
                {watch.title == "Vintage Rolex" && (
                  <div class="flex flex-col max-w-sm">
                    <div className="flex justify-center">
                      <a href="/">
                        <img
                          class="rounded-t-lg w-48 py-5 h-80 ml-10 md:ml-0"
                          src={watch.picture}
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="md:p-10">
                      <a href="/rolex">
                        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
                          Brand: {watch.title}
                        </h5>
                        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
                          Watch Name: {watch.name}
                        </h5>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Subscribe></Subscribe>

      <div>
        <div className="text-white">
          {watches.map((watch) => {
            return watch.advertised == "true" && (count = count + 1);
          })}
        </div>
        {count > 0 && (
          <h2 className=" mx-8 md:mx-48 mt-5 mb-5 text-3xl md:text-5xl font4 font-bold">
            Advertisement
          </h2>
        )}
        {/* <h2 className='mx-48 mt-5 text-5xl font4 font-bold'>Advertisement</h2> */}
        <div className="flex flex-wrap gap-10 w-full justify-around px-16 md:px-36">
          {watches.map((watch) => {
            return (
              <div
                key={watch._id}
                className={`flex flex-wrap w-96 mb-5 py-2 ${
                  watch.advertised == "true" ? "" : "hidden"
                } ${watch.purchased == "true" ? "hidden" : ""}`}
              >
                {watch.advertised == "true" && (
                  <div class="flex flex-col max-w-sm">
                    <div className="flex justify-center">
                      <a href="/">
                        <img
                          class="rounded-t-lg w-48 py-5 h-80 ml-10 md:ml-0"
                          src={watch.picture}
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="md:p-10">
                      <a href="/rolex">
                        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
                          Brand: {watch.title}
                        </h5>
                        <h5 class="mb-2 text-lg font-medium tracking-tight text-gray-900">
                          Watch Name: {watch.name}
                        </h5>
                        <button className="bg-gray-700 w-full text-white ml-0 rounded p-3">
                          Book Now
                        </button>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
