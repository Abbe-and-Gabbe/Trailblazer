"use client";
import Image from "next/image";

import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedData, setSelectedData] = useState<number[]>([]);
  const [isOurData, setIsOurData] = useState(true);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Trailblazer";
  }, []);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const toggleDataSource = (source: string) => {
    setIsOurData(source === "ourData");
  };

  const selectOption = (option: number) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Head>
        <title>Trailblazer</title>
      </Head>
      <div className="w-full max-w-2xl bg-white border-2 border-black rounded-lg p-5 shadow-lg">
        <div className="text-center text-lg mb-5">Follow the steps below!</div>
        <ul className="flex justify-between w-full mb-5">
          <li
            className={`flex-1 text-center p-3 border ${
              currentStep === 1
                ? "bg-orange-500 text-white"
                : currentStep > 1
                ? "bg-green-500 text-white"
                : "bg-gray-300"
            }`}
          >
            Step 1
          </li>
          <li
            className={`flex-1 text-center p-3 border ${
              currentStep === 2
                ? "bg-orange-500 text-white"
                : currentStep > 2
                ? "bg-green-500 text-white"
                : "bg-gray-300"
            }`}
          >
            Step 2
          </li>
          <li
            className={`flex-1 text-center p-3 border ${
              currentStep === 3
                ? "bg-orange-500 text-white"
                : currentStep > 3
                ? "bg-green-500 text-white"
                : "bg-gray-300"
            }`}
          >
            Step 3
          </li>
          <li
            className={`flex-1 text-center p-3 border ${
              currentStep === 4
                ? "bg-orange-500 text-white"
                : currentStep > 4
                ? "bg-green-500 text-white"
                : "bg-gray-300"
            }`}
          >
            Step 4
          </li>
        </ul>

        <div className="flex flex-col items-center">
          {currentStep === 1 && (
            <div className="w-full mb-5">
              <h2 className="text-center mb-3">Step 1</h2>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Write your question here"
              />
              <div className="flex justify-end gap-3">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={handleNextStep}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="w-full mb-5">
              <h2 className="text-center mb-3">Step 2</h2>
              <div className="flex justify-center mb-4">
                <button
                  className={`py-2 px-4 mx-1 rounded ${
                    isOurData
                      ? "bg-gray-800 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                  onClick={() => toggleDataSource("ourData")}
                >
                  Our data
                </button>
                <button
                  className={`py-2 px-4 mx-1 rounded ${
                    !isOurData
                      ? "bg-gray-800 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                  onClick={() => toggleDataSource("uploadData")}
                >
                  Upload data
                </button>
              </div>
              {isOurData ? (
                <div className="grid grid-cols-9 border-2 border-black">
                  {/* Add your data squares here */}
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="mb-3">Please select your CSV file</h3>
                  <button className="bg-gray-800 text-white py-2 px-4 rounded">
                    Upload File
                  </button>
                </div>
              )}
              <div className="flex justify-between mt-4">
                <button
                  className="bg-gray-500 text-white py-2 px-4 rounded"
                  onClick={handlePrevStep}
                >
                  Back
                </button>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={handleNextStep}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="w-full mb-5">
              <h2 className="text-center mb-3">Step 3</h2>
              <div className="text-center text-lg font-bold mb-5">
                Choose your tool
              </div>
              <div className="flex flex-wrap justify-center gap-5">
                {[1, 2, 3, 4].map((option) => (
                  <div
                    key={option}
                    className={`w-24 h-24 flex items-center justify-center border cursor-pointer rounded ${
                      selectedOption === option
                        ? "bg-green-500 text-white"
                        : "bg-gray-300"
                    }`}
                    onClick={() => selectOption(option)}
                  >
                    Option {option}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-gray-500 text-white py-2 px-4 rounded"
                  onClick={handlePrevStep}
                >
                  Back
                </button>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={handleNextStep}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="w-full mb-5">
              <h2 className="text-center mb-3">Step 4</h2>
              <div className="flex justify-center items-center h-24 border-2 border-black rounded bg-white text-lg font-bold">
                The result is!
              </div>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-gray-500 text-white py-2 px-4 rounded"
                  onClick={handlePrevStep}
                >
                  Back
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded">
                  Finish
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
