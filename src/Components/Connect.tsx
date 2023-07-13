import { write, testimonial, read } from "../assets/images";
import Button from "./Button";

const Connect = function () {
  return (
    <div className="mx-11 p-6 md:flex md:items-center">
      <div className="my-4 flex justify-center md:grid md:h-[320px] md:w-[380px] md:grid-cols-2">
        <img src={write} alt="A-youngin" className="h-36 w-36 rounded-full" />
        <img
          src={testimonial}
          alt="A-dude"
          className="row-span-2 h-36 w-36 self-center rounded-full"
        />
        <img src={read} alt="A-woman" className="h-36 w-36 rounded-full " />
      </div>
      <div className="text-left md:w-3/4">
        <h3 className="mb-4 text-4xl font-medium text-blue-900">
          Write, read and connect with great minds on chatter
        </h3>
        <p className="mb-7">
          Share people your great ideas, and also read write-ups based on your
          interests. connect with people of same interests and goals
        </p>
        <Button bgcolor="blue">Get Started</Button>
      </div>
    </div>
  );
};

export default Connect;
