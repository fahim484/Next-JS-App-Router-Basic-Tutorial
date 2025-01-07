"use client";

import { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  role: string;
}

const getUser = async (): Promise<IUser[]> => {
  const result = await fetch("http://localhost:3000/users.json").then((res) =>
    res.json()
  );

  return result;
};

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUser().then((data) => setUsers(data));
  }, []);

  return (
    <main className="flex justify-start items-center w-full h-screen flex-col py-10">
      <h1 className="text-5xl font-bold text-green-500 ">User List Page</h1>
      <div className="grid grid-cols-5  w-full place-items-center gap-5 flex-wrap pt-20 px-10">
        {users.map(({ name, email, age, id, role }) => (
          <div key={id}>
            <h1>{name} </h1>
            <p>{email} </p>
            <p>{age} </p>
            <p>{role} </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default UserList;




// URL:- http://localhost:3000/user-list-2