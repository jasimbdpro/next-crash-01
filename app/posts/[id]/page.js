import getAllPosts from "@/lib/getAllPosts";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComment";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = await params;
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);
  const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  return (
    <div>
      <h1 className=" mt-10 font-black text-25">{post.title.toUpperCase()}</h1>
      <p>{post.body}</p>
      <hr />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
