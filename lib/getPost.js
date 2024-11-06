export default async function getPost(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      // cache: "force-cache", don't use it, it saves data but never update it.
      // cache: "no-store", don't use it, it never saves data always comes from database.
      next: {
        revalidate: 10, // use it, it saves data on cache and update date from database on every 10 second
      },
    }
  );
  if (!result.ok) {
    throw new Error("Error getting posts");
  }
  return result.json();
}
