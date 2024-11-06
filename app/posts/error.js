"use client";
import React from "react";
import { useRouter } from "next/router";

const ErrorPage = ({ statusCode, err }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // Navigates to the previous page in the browser history
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>{statusCode ? `Error ${statusCode}` : "Something went wrong"}</h1>
      <p>
        {statusCode === 404
          ? "The page you are looking for could not be found."
          : "An unexpected error has occurred."}
      </p>
      <button
        onClick={handleBackClick}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Go Back
      </button>
    </div>
  );
};

ErrorPage.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode, err };
};

export default ErrorPage;
