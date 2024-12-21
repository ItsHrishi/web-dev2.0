import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-100 ">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center space-x-4 p-6 border-b border-gray-200">
          <img
            src={data.avatar_url}
            alt={data.login}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{data.name}</h1>
            <p className="text-gray-600">@{data.login}</p>
            <p className="text-sm text-gray-500">
              Member since: {new Date(data.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            GitHub Details
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Public Repos:</span>{" "}
              {data.public_repos}
            </li>
            <li>
              <span className="font-semibold">Public Gists:</span>{" "}
              {data.public_gists}
            </li>
            <li>
              <span className="font-semibold">Followers:</span> {data.followers}
            </li>
            <li>
              <span className="font-semibold">Following:</span> {data.following}
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md text-sm transition"
            >
              View Profile
            </a>
            <a
              href={data.repos_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 py-2 px-4 rounded-md text-sm border border-blue-600 transition"
            >
              View Repositories
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-50 px-6 py-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Last updated: {new Date(data.updated_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Github;
