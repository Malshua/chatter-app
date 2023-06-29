import AboutBookImg from "../assets/images/about-img.jpg";
import { carbon, fluent, vector } from "../assets/icons";
const About = function () {
  return (
    <div>
      <div className="container mx-auto my-3 flex w-full flex-col justify-between gap-x-10 p-4 md:flex-row md:items-center">
        <div className=" w-full p-2 md:w-1/2">
          <h4 className="my-7 text-5xl font-medium text-blue-900">
            About Bloggy
          </h4>
          <p>
            Chatter is a multi-functional platform where authors and readers can
            have access to their own content. It aims to be a traditional
            bookworm’s heaven and a blog to get access to more text based
            content. Our vision is to foster an inclusive and vibrant community
            where diversity is celebrated. We encourage open-mindedness and
            respect for all individuals, regardless of their backgrounds or
            beliefs. By promoting dialogue and understanding.
          </p>
        </div>
        <img
          src={AboutBookImg}
          alt="About-books-on-shelf"
          className="mt-3 w-full md:h-64 md:w-1/2 "
        />
      </div>

      <div>
        <div className=" container mx-auto p-4 text-center">
          <h3 className="mb-7 text-5xl font-medium text-blue-900 ">
            Why you should join chatter
          </h3>
          <p>
            Our goal is to make writers and readers see our platform as their
            next heaven for blogging, ensuring ease in interactions, connecting
            with like-minded peers, have access to favorite content based on
            interests and able to communicate your great ideas with people.
          </p>
          <div className="mt-7 flex flex-col gap-y-6 text-left md:flex-row  md:justify-center md:gap-x-10">
            <div className="w-72 border p-4">
              <img
                src={carbon}
                alt="carbon-icon"
                className="mb-4 rounded-full bg-slate-100 p-4"
              />
              <h4 className="text-lg font-[600]">Analytics</h4>
              <p>
                Analytics to track the number of views, likes and comment and
                also analyze the performance of your articles over a period of
                time
              </p>
            </div>
            <div className=" w-72 border p-4">
              <img
                src={fluent}
                alt="carbon-icon"
                className="mb-4 rounded-full bg-slate-100 p-4"
              />
              <h4 className="text-lg font-[600]">Social interactions</h4>
              <p>
                Users on the platform can interact with posts they like, comment
                and engage in discussions
              </p>
            </div>
            <div className="w-72 border p-4">
              <img
                src={vector}
                alt="carbon-icon"
                className="mb-4 rounded-full bg-slate-100 p-4"
              />
              <h4 className="text-lg font-[600]">Content creation</h4>
              <p>
                Write nice and appealing with our in-built markdown, a rich text
                editor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
