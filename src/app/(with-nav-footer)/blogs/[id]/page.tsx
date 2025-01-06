import { Metadata, NextPage } from "next";

// BlogPageProps or IProps

interface BlogPageProps {
  params: {
    id: string;
  };
}

export const generateMetadata = ({ params }: BlogPageProps): Metadata => {
  return {
    title: `Blog || ${params.id} || Hablu Programmer`,
  };
};

const BlogPage: NextPage<BlogPageProps> = ({ params }) => {
  console.log("🚀 ~ BlogPage ~ props:", { id: params.id });
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="text-5xl font-bold text-purple-950">Blog Page</h1>
      <h2 className="text-3xl font-bold text-blue-500">Blog Id: {params.id}</h2>
    </main>
  );
};

export default BlogPage;

// URL:- http://localhost:3000/blogs/1
