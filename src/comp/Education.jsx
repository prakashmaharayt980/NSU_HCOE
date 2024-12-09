import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import sem1C_programming from "../assets/pdf/C_programming_1_sem.pdf";

// Directly link the worker from a CDN
const Education = () => {
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");
  const [selectedDepartment, setSelectedDepartment] = useState("IT");
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Sample data for notes
  const notesData = [
    {
      title: "Introduction to Programming",
      semester: "Semester 1",
      department: "IT",
      pdf: sem1C_programming,
    },
    {
      title: "Data Structures",
      semester: "Semester 2",
      department: "IT",
      pdf: sem1C_programming,
    },
    {
      title: "Linear Algebra",
      semester: "Semester 1",
      department: "Math",
      pdf: sem1C_programming,
    },
    {
      title: "Algorithms",
      semester: "Semester 2",
      department: "IT",
      pdf: sem1C_programming,
    },
  ];

  // Filter notes based on selected semester and department
  const filteredNotes = notesData.filter(
    (note) =>
      note.semester === selectedSemester && note.department === selectedDepartment
  );

  return (
    <div className="education-section bg-gray-100 py-8 px-4">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-6">Education</h2>

      {/* Notes Section */}
      <div className="notes-section">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Notes</h3>
        <div className="flex space-x-4 mb-6">
          {/* Semester Selector */}
          <div>
            <label className="block font-medium text-gray-600 mb-2">Semester</label>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
            >
              <option>Semester 1</option>
              <option>Semester 2</option>
              <option>Semester 3</option>
            </select>
          </div>

          {/* Department Selector */}
          <div>
            <label className="block font-medium text-gray-600 mb-2">Department</label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-500"
            >
              <option>IT</option>
              <option>Math</option>
              <option>Science</option>
            </select>
          </div>
        </div>

        {/* Notes List */}
        <div className="notes-list">
          {filteredNotes.length > 0 ? (
            <ul className="divide-y divide-gray-300">
              {filteredNotes.map((note, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-4 px-2 bg-white rounded shadow-md mb-2 hover:shadow-lg transition-shadow"
                >
                  <span className="text-lg text-gray-800">{note.title}</span>
                  <button
                    onClick={() => setSelectedPdf(note.pdf)}
                    className="text-green-500 hover:text-green-700 text-xl"
                  >
                    👁️ View
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center">
              No notes available for the selected semester and department.
            </p>
          )}
        </div>
      </div>

      {/* PDF Viewer */}
      {selectedPdf && (
        <div className="pdf-viewer bg-white lg:p-6 sm:p-1 rounded shadow-lg mt-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Viewing PDF</h3>
          <button
            onClick={() => setSelectedPdf(null)}
            className="text-red-500 hover:text-red-700 mb-4"
          >
            Close Viewer
          </button>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
            <Viewer fileUrl={selectedPdf} />
          </Worker>
        </div>
      )}
    </div>
  );
};

export default Education;
