import React, { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import notesData from "./Note.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCheck, faExclamationCircle, faEye } from "@fortawesome/free-solid-svg-icons"; 

import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

const Education = () => {
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");
  const [selectedDepartment, setSelectedDepartment] = useState("BCA");
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [FitterData, setFitterData] = useState([]);
  const pageNavigationPluginInstance = pageNavigationPlugin();

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  useEffect(() => {
    const filteredNotes = notesData?.notes?.map((note) => note[selectedDepartment] && note[selectedDepartment][selectedSemester]);
    setFitterData(filteredNotes);
  }, [selectedSemester, selectedDepartment]);

  return (
    <div className="education-section bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-center text-green-700 mb-6">Education</h2>

      {/* Notes Section */}
      <div className="notes-section mb-8">
        <h3 className="text-2xl font-medium text-gray-700 mb-4">Notes</h3>
        
        {/* Filter Selection */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 space-y-4 sm:space-y-0">
          {/* Semester Selector */}
          <div className="flex-1">
            <label className="block font-medium text-gray-600 mb-2">Semester</label>
            <select
              value={selectedSemester}
              onChange={handleSemesterChange}
              className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
            >
              {notesData?.options?.semesters?.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Department Selector */}
          <div className="flex-1">
            <label className="block font-medium text-gray-600 mb-2">Department</label>
            <select
              value={selectedDepartment}
              onChange={handleDepartmentChange}
              className="block w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
            >
              {notesData?.options?.departments?.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Notes Table */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className=" py-3 text-left text-sm font-medium text-gray-700">Title</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Code</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {FitterData?.map((note, index) => {
                return(
                  <div key={index} className="contents">
                    {note.map((note, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-6 py-3 text-sm text-gray-800">
                          <div className="flex items-center justify-between">
                            {/* Title */}
                            <span className="font-semibold">
                              {note?.title }
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-3 text-sm text-gray-500">
                          {note?.code || "N/A"}
                        </td>
                        <td className="px-6 py-3 text-sm text-gray-800">
                          <button
                            onClick={() => setSelectedPdf(note)}
                            className="text-green-500 hover:text-green-700 text-xl"
                          >
                            <FontAwesomeIcon icon={faCheck} className="text-green-500 hover:text-green-700" />
                            &nbsp; &nbsp;
                            <FontAwesomeIcon icon={faEye} className="text-green-500 hover:text-green-700" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </div>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* PDF Viewer */}
      {selectedPdf && (
        <div className="pdf-viewer bg-white rounded-lg shadow-lg mt-6 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Viewing PDF</h3>
          <button
            onClick={() => setSelectedPdf(null)}
            className="text-red-500 hover:text-red-700 mb-4"
          >
            Close Viewer
          </button>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
            <Viewer fileUrl={selectedPdf} plugins={[pageNavigationPluginInstance]} />
          </Worker>
        </div>
      )}
    </div>
  );
};

export default Education;
