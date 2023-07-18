import { pencil } from "../assets/icons";
import FeedItems from "./FeedItems";
import {
  article1,
  article2,
  article3,
  profile1,
  profile2,
  profile3,
} from "../assets/images";

const feedItems = [
  {
    id: 1,
    profilePic: profile1,
    name: "Grace Ikanga",
    title: "How to become a full stack developer in 2021",
    role: "Product Designer",
    date: "May 25th, 2023",
    text: "Embarking on a journey as a product designer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, product design offers an opportunity to shape the way people interact with the world around them.",
    image: article1,
  },
  {
    id: 2,
    profilePic: profile2,
    name: "Oluwatobi Ogunniyi",
    title: "Using CSS Selectors",
    role: "Software developer",
    date: "May 25th, 2023",
    text: "Cascading Style Sheets (CSS) is a fundamental technology that lies at the heart of modern web design. It empowers developers and designers to transform plain HTML into visually captivating and interactive web pages",
    image: article2,
  },
  {
    id: 3,
    profilePic: profile3,
    name: "Adebobola Muhydeen",
    title: "The Impact of social media on Political discourse",
    role: "Political analyst",
    date: "May 25th, 2023",
    text: "In the era of digital communication, social media platforms have become pervasive in our daily lives, revolutionizing the way we connect, share information, and engage with the world",
    image: article3,
  },
];

const Feed = () => {
  return (
    <section className="mx-auto rounded border md:w-11/12 md:p-5">
      <div className="">
        <div className="flex items-center justify-between px-2 pt-2">
          <div>
            <h1 className="text-lg font-bold md:text-2xl">FEED</h1>
            <p className="text-sm">Explore great content!</p>
          </div>
          <button className="flex items-center rounded bg-indigo-500 p-2 text-sm text-white">
            <img src={pencil} alt="pencil-icon" className="mr-1 h-5 w-5" />
            <span>Post a content</span>
          </button>
        </div>
      </div>

      <div className="mx-2 mt-6 flex items-center justify-between rounded border px-8 font-bold md:px-6 ">
        <div className="border-b-4 border-indigo-800 py-4">For you</div>
        <div>Featured</div>
        <div>Recent</div>
      </div>
      {feedItems.map((item) => (
        <FeedItems item={item} key={item.id} />
      ))}
    </section>
  );
};

export default Feed;
