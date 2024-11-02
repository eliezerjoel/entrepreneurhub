import React, { useState } from "react";

const ApprovalSystem = ({ projects }) => {
  // This component expects a `projects` prop with each project having an ID, title, and description
  const [feedback, setFeedback] = useState({});
  const [status, setStatus] = useState({});

  // Handler for feedback input change
  const handleFeedbackChange = (projectId, comment) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [projectId]: comment,
    }));
  };

  // Handler for approving a project
  const handleApprove = (projectId) => {
    // Update status to 'approved'
    setStatus((prevStatus) => ({
      ...prevStatus,
      [projectId]: "approved",
    }));
    // Optionally, here you would make an API call to update the project status in the database
    console.log(
      `Project ${projectId} approved with feedback:`,
      feedback[projectId]
    );
  };

  // Handler for rejecting a project
  const handleReject = (projectId) => {
    // Update status to 'rejected'
    setStatus((prevStatus) => ({
      ...prevStatus,
      [projectId]: "rejected",
    }));
    // Optionally, here you would make an API call to update the project status in the database
    console.log(
      `Project ${projectId} rejected with feedback:`,
      feedback[projectId]
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Project Approval System</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold text-gray-700">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>

            <textarea
              placeholder="Add feedback or comments"
              className="w-full p-2 border rounded-md mb-4"
              value={feedback[project.id] || ""}
              onChange={(e) => handleFeedbackChange(project.id, e.target.value)}
            />

            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleApprove(project.id)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                disabled={status[project.id] === "approved"}
              >
                Approve
              </button>
              <button
                onClick={() => handleReject(project.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                disabled={status[project.id] === "rejected"}
              >
                Reject
              </button>
              {status[project.id] && (
                <p className="ml-4 text-sm text-gray-500">
                  Status:{" "}
                  {status[project.id].charAt(0).toUpperCase() +
                    status[project.id].slice(1)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovalSystem;
