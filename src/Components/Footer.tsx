const Footer = function () {
  return (
    <div className=" justify-around bg-red-50 p-3 md:flex">
      <div className="text-center text-[50px] font-bold text-blue-900">
        Chatter
      </div>
      <div className="mt-4 flex justify-around md:gap-20">
        <div>
          <h4 className="block text-lg font-[600]">Explore</h4>
          <p>Community</p>
          <p>Trending blogs</p>
          <p>Chatter for teams</p>
        </div>
        <div>
          <h4 className="block text-lg font-[600]">Support</h4>
          <p>Support docs</p>
          <p>Join slack</p>
          <p>Contact</p>
        </div>
        <div>
          <h4 className="block text-lg font-[600]">Official blog</h4>
          <p>Official blog</p>
          <p>Engeering blog</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
