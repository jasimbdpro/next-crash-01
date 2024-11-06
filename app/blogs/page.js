import Link from "next/link";
import React from "react";
export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog01",
      description: "This is blogs 1 desc",
    },
    {
      id: 2,
      title: "Blog02",
      description: "This is blogs 2 desc",
    },
  ];
  return (
    <main className="mt-10">
      <ul>
        {blogs.map((blog) => (
          <li className=" mb-5" key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
