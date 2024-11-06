import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

export default async function Posts() {
  const posts = await getAllPosts();
  //   console.log(posts);
  return (
    <div>
      <h1 className=" mb-10 text-[40px] font-black">All Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li className=" mt-3" key={post.id}>
              <Link href={`/posts/${String(post.id)}`}>✅{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
