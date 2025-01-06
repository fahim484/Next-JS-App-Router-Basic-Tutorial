import React, { FC, ReactNode } from "react";

const AboutLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1>This is About Layout Top</h1>
      {children}
      <p>About Footer</p>
    </div>
  );
};

export default AboutLayout;


// URL:- http://localhost:3000/about