"use client";

import { FC } from "react";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: FC<ErrorPageProps> = ({ error, reset }) => {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center flex-col gap-10">
      <h1 className="text-5xl font-bold text-red-500">This Is Error Page!</h1>
      <h1 className="text-3xl font-bold text-red-500">
        Error Message:- {error.message}
      </h1>

      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ErrorPage;
