export default async function getAllPosts() {
  const res = await fetch(
    'https://wp.ai-ecy.com/wp-json/wp/v2/posts?_embed?per_page=100&exclude=1'
  );

  if (!res.ok) throw new Error('failed to fetch data');
  console.log(res);

  return res.json();
}
