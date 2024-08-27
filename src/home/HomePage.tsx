import BlogCard from "../core/components/BlogCard";
import NavBar from "./components/Navbar";

const HomePage = () => {
  return (
    <main>
      <NavBar />
      <div className="mx-auto max-w-7xl mt-5">
        <h1 className="text-2xl font-bold">Most liked blogs</h1>
        <div className="grid grid-cols-2 h-[400px] gap-3 mt-3">
          <BlogCard />
          <BlogCard />
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-10">All Blogs</h2>
          <div className="grid grid-cols-3 gap-4 mt-3">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>

      <footer className="mt-20 bg-black text-white py-10">
        <div>
          <p className="text-center">Post Pulse</p>
          <p className="text-center">All rights reserved &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
};
export default HomePage;
