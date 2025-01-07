import { userData } from "./data";

export const GET = async () => {
  const result = userData;

  return Response.json(result);
};


// URL:- http://localhost:3000/api/users
