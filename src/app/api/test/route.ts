import { userData } from "./data";

// TODO: get data from DB (GET Route):
export const GET = async () => {
  // return new Response("Hello World")
  // return Response.json("Hello World") // JSON data
  const result = userData;
  return Response.json(result);
};

// TODO: post data to DB (POST Route):
export const POST = async () => {
  const newData = { id: 6, name: "Nus Hacker", age: 22 };
  
  userData.push(newData);

  return Response.json(newData, { status: 201 });
};

// URL:- http://localhost:3000/api/test
