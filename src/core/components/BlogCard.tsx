const BlogCard = () => {
  return (
    <div className="h-full flex overflow-hidden relative">
      <div className="bg-black absolute w-full h-full opacity-30"></div>
      <div className="absolute z-10 bottom-4 text-white px-4">
        <div>
          <span className="text-sm bg-orange-500 px-3 py-1 rounded-md font-semibold">Fashion</span>
        </div>
        <h2 className="text-3xl font-bold mb-3 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorem, ipsum dicta
          sit ipsa quo
        </h2>
        <span>Written by John Doe | 22 Jan 2024</span>
      </div>

      <img
        src="https://picsum.photos/400"
        className="w-full object-cover block h-full"
        alt="article thumbnail"
      />
    </div>
  );
};
export default BlogCard;
