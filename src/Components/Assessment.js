
import React, { useState, useEffect } from 'react';

function Assessment() {
  const [assessmentOptions, setAssessmentOptions] = useState([]);
  const [studentOptions, setStudentOptions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch assessment options from the makeshift API
        const assessmentResponse = await fetch('/api/assessments');
        const assessmentData = await assessmentResponse.json();
        setAssessmentOptions(assessmentData);

        // Fetch student options from the makeshift API
        const studentResponse = await fetch('/api/users?type=student');
        const studentData = await studentResponse.json();
        setStudentOptions(studentData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <form className="p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-medium mb-4">Schedule Form</h2>
  <div className="flex items-center space-x-4 mb-4">
    <label htmlFor="date" className="text-gray-600 font-medium">
      Schedule
    </label>
    <input
      type="date"
      id="date"
      name="date"
      className="py-2 px-3 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
    />
    <input
      type="time"
      id="time"
      name="time"
      className="py-2 px-3 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
    />
    <select
      id="duration"
      name="duration"
      className="py-2 px-3 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
    >
      <option value="30">30 minutes</option>
      <option value="60">1 hour</option>
      <option value="90">1.5 hours</option>
      <option value="120">2 hours</option>
      <option value="180">3 hours</option>
      <option value="240">4 hours</option>
    </select>
  </div>
  <div className="flex items-center space-x-4 mb-4">
    <label htmlFor="assessment" className="text-gray-600 font-medium">
      Assessment
    </label>
    <select
      id="assessment"
      name="assessment"
      className="w-full py-2 px-3 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
    >
      <option value="">Select an assessment</option>
      {assessmentOptions.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
    <input
      type="text"
      id="assessment-search"
      name="assessment-search"
      placeholder="Search assessments"
      className="py-2 px-3 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
    />
  </div>
  <div className="flex items-center space-x-4 mb-4">
    <label htmlFor="student" className="text-gray-600 font-medium">
      Add Student
    </label>
    <select
      id="student"
      name="student"
      className="w-full py-2 px-3 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      >
      <option value="">Select a student</option>
      {studentOptions.map((option) => (
      <option key={option.id} value={option.id}>
      {option.name}
      </option>
      ))}
      </select>
      <button
             type="button"
             className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
           >
      Add
      </button>
      </div>
      <div className="flex flex-col mb-4">
<label htmlFor="notes" className="text-gray-600 font-medium mb-2">
Notes
</label>
<textarea
   id="notes"
   name="notes"
   rows="3"
   className="py-2 px-3 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
   placeholder="Enter any notes here..."
 ></textarea>

  </div>
  <button
    type="submit"
    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
  >
    Schedule
  </button>
</form>

  )
          }
          
          export default Assessment;