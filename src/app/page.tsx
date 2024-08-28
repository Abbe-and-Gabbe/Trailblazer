"use client";
import Image from "next/image";
import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [csvData, setCsvData] = useState<any[]>([]); // State for CSV data

  useEffect(() => {
    document.title = "Trailblazer";
  }, []);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const selectOption = (option: number) => {
    setSelectedOption(option);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("/api/upload-csv", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setCsvData(data); // Set the CSV data for display
        } else {
          console.error("Failed to upload file");
        }
      } catch (error) {
        console.error("Error during file upload:", error);
      }
    }
  };

  const renderCellValue = (value: string | number | object | null | undefined): string => {
    if (typeof value === 'object' && value !== null) {
        return JSON.stringify(value);
    }
    if (value !== undefined && value !== null) {
        return value.toString();
    }
    return 'N/A';
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Head>
        <title>Trailblazer</title>
      </Head>
      <div className="w-full max-w-2xl bg-white border-2 border-black rounded-lg p-5 shadow-lg">
        <div className="text-center text-lg mb-5">Follow the steps below!</div>
        <ul className="flex justify-between w-full mb-5">
          {/* Step indicators */}
        </ul>

        <div className="flex flex-col items-center">
          {currentStep === 1 && (
            <div className="w-full mb-5">
              {/* Step 1 content */}
              <div className="flex justify-end gap-3 mt-4">
                {currentStep > 1 && (
                  <button
                    className="bg-gray-500 text-white py-2 px-4 rounded"
                    onClick={handlePrevStep}
                  >
                    Back
                  </button>
                )}
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
              <div className="flex flex-col items-center justify-center h-48 border-2 border-black rounded bg-white p-5">
                <h2 className="text-center mb-3">Step 2</h2>
                <div className="text-center">
                  <h3 className="mb-3">Please select your CSV file</h3>
                  <input 
                    type="file" 
                    accept=".csv" 
                    onChange={handleFileUpload} 
                    className="bg-gray-800 text-white py-2 px-4 rounded" 
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-4">
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
              {/* Step 3 content */}
            </div>
          )}

          {currentStep === 4 && (
            <div className="w-full mb-5">
              <div className="flex justify-center items-center h-48 border-2 border-black rounded bg-white p-5">
                <h2 className="text-center mb-3">The result is!</h2>
                {csvData.length > 0 ? (
                  <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                      <tr>
                        {Object.keys(csvData[0]).map((key) => (
                          <th key={key} className="border border-gray-300 px-4 py-2">{key}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {csvData.map((row, index) => (
                        <tr key={index}>
                          {Object.values(row).map((value, idx) => (
                            <td key={idx} className="border border-gray-300 px-4 py-2">
                              {renderCellValue(value as string | number | object | null | undefined)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No data available. Please upload a CSV file in Step 2.</p>
                )}
              </div>
              <div className="flex justify-end gap-3 mt-4">
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
                  Continue
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
