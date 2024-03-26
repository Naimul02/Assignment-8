import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="text-center space-y-5  mt-[200px]">
      <h1 className="text-4xl font-bold">Opps!!</h1>
      <h1 className="text-6xl font-bold">{error.status}</h1>
      <p className="text-3xl">Page {error.statusText}</p>
      <Link to="/" className="underline text-blue-600 text-xl">
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
