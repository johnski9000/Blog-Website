import Layout from "../components/Layout";
import PostCard from "../components/Post";
import Post from "../Model/Post";
import db from "../utils/db";

export default function Home({data}) {
  console.log({data})

  return (
    <>
      <Layout title="Home Page">
        <main className="px-4 py-4">
          <div className="w-full h-20 flex justify-around items-center">
            <div className="feed-selection relative">Live Feed<div className="feed-selection-underline absolute"></div></div>
            <div className="feed-selection">User Posts</div>
          </div>
          <div>
            <ul>
              {data.map((post) => {
              return (
                <li className="">
                    <PostCard image={post.imageUrl} id={post._id}></PostCard>
                </li>
              )
            })}
            </ul>
            
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  await db.connect()
  const response = await Post.find({})
  const data = JSON.parse(JSON.stringify(response))
  await db.disconnect()
  return {props: {data}}
}