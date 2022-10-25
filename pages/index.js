import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout title="Home Page">
        <main className="px-4 py-4">
          <div className="w-full h-20 flex justify-around items-center">
            <div className="feed-selection relative">Live Feed<div className="feed-selection-underline absolute"></div></div>
            <div className="feed-selection">User Posts</div>
          </div>
        </main>
      </Layout>
    </>
  );
}
