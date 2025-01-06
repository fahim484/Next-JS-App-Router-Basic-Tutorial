import { FC, ReactNode } from "react";

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1>This is Auth Layout Top</h1>
      {children}
      <p>Auth Footer</p>
    </div>
  );
};

export default AuthLayout;


// URL:- http://localhost:3000/login
// URL:- http://localhost:3000/signup
