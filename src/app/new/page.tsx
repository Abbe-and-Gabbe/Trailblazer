"use client";

import React from 'react';
import { useState } from 'react';

const NewPage: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleImport = () => {
        if (selectedFile) {
            // TODO: Handle the import logic here
            console.log('Importing file:', selectedFile.name);
            // Move to the next page

        }
    };

    const handleUseExisting = () => {
        // TODO: Handle the logic for using an existing dataset
        console.log('Using existing dataset');
        // Move to the next page
        
    };

    const existingDatasets = [
        { id: 1, name: 'JKPG City', description: 'This is the first dataset' },
        { id: 2, name: 'Dataset 2', description: 'This is the second dataset' },
        { id: 3, name: 'Dataset 3', description: 'This is the third dataset' },
    ];

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">New dataset</h1>
            <input type="file" onChange={handleFileChange} className="mb-4" />
            <p className="text-gray-500">Please select a CSV file for import</p>
            <button onClick={handleImport} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2 dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white">Import Dataset</button>
            <hr className="border-t my-4" />

            <div className="grid grid-cols-3 gap-4">
                {/* Render existing datasets */}
                {existingDatasets.map((dataset) => (
                    <div key={dataset.id} className="bg-gray-100 p-4 rounded">
                        <h2 className="text-lg font-bold">{dataset.name}</h2>
                        <p className="text-gray-500">{dataset.description}</p>
                        <button onClick={handleUseExisting} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2 dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white">Select</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewPage;