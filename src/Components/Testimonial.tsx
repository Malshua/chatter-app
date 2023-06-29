import { connect } from "../assets/images";

const Testimonial = function () {
  return (
    <div className="bg-red-50">
      <div className="container mx-auto flex flex-col gap-y-7  p-6  md:flex-row md:items-center md:justify-between">
        <img
          src={connect}
          alt="young-developer"
          className="h-48 w-48 rounded-full md:mr-14"
        />
        <div className="p-4">
          <p>
            "Chatter has become an integral part of my online experience. As a
            user of this incredible blogging platform, I have discovered a
            vibrant community of individuals who are passionate about sharing
            their ideas and engaging in thoughtful discussions.”
          </p>
          <p>
            <span className="block text-lg font-[600]">Babalola Osprey,</span>{" "}
            software developer at google.
          </p>
          <button className="mt-4 rounded bg-blue-900 px-6 py-2 text-white ">
            Join chatter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
