import { NextPage } from "next";

interface BlogPageProps {
  params: {
    id: string;
    slug: string;
  };
}

const BlogDetailsSlug: NextPage<BlogPageProps> = ({ params }) => {
  const { id, slug } = params || {};
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen space-y-4">
      <h1 className="text-5xl font-bold text-blue-500">Blog Details Slug Page</h1>

      <h2 className="text-2xl font-bold text-amber-400">Blog Id:- {id}</h2>
      <h2 className="text-2xl font-bold text-amber-600">Blog Slug:- {slug}</h2>
    </main>
  );
};

export default BlogDetailsSlug;

// URL:- http://localhost:3000/blogs/1000/details/this-is-blog-slug
