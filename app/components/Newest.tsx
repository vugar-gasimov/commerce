import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == 'product'][0...4] | order(_createdAt desc) {
  _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
}`;
  const data = await client.fetch(query);
  return data;
}

export default async function Newest() {
  const data = await getData();
}
