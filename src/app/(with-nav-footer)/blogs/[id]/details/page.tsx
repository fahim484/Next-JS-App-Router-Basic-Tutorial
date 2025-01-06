import { NextPage } from "next";

interface BlogPageProps {
  params: {
    id: string;
  };
}

const BlogDetails: NextPage<BlogPageProps> = ({ params: { id } }) => {
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="text-5xl font-bold text-blue-500">Blog Details Page</h1>
      <h1 className="text-5xl font-bold text-amber-600">Blog Id:- {id}</h1>
    </main>
  );
};

export default BlogDetails;



// URL:- http://localhost:3000/blogs/100/details