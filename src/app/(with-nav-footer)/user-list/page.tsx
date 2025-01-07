interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  role: string;
}

const getUser = async (): Promise<IUser[]> => {
  // Fetch data from API and parse the response JSON
//   const result = await fetch("http://localhost:3000/api/users")
  const result = await fetch("http://localhost:3000/users.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch users: ${res.statusText}`); // Error handling for non-200 responses
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error fetching users:", error); // Log error details
      return []; // Return an empty array as fallback
    });

  return result; // Return the parsed user data
};

const UserList = async () => {
  const users = await getUser(); // Fetch the list of users
  // console.log("🚀 ~ UserList ~ users:", users);
  
  // Check if users array is empty and handle accordingly
  if (!users || users.length === 0) {
    return (
      <main className="flex justify-center items-center w-full h-screen flex-col">
        <h1 className="text-5xl font-bold text-slate-700">User List Page</h1>
        <p className="text-lg text-red-500 mt-4">No users found</p>
      </main>
    );
  }

  return (
    <main className="flex justify-start items-center w-full h-screen flex-col">
      <h1 className="text-5xl font-bold text-slate-700">User List Page</h1>

      <div className="w-3/4 mt-5">
        {users.map(({id, name, email, role}) => (
          <div key={id} className="border-b py-2"> {/* Use unique key (user.id) */}
            <h2 className="text-xl font-medium">{name}</h2> {/* Styled user name */}
            <p className="text-sm text-slate-600">{email}</p> {/* Added email display */}
            <p className="text-sm text-slate-600">{role}</p> {/* Added role display */}
          </div>
        ))}
      </div>
    </main>
  );
};

export default UserList;




// URL:- http://localhost:3000/user-list