import React from "react";
import {
  account,
  analytics,
  bookmark,
  drafts,
  feed,
  notifications,
  tags,
  teamBlogs,
} from "../assets/icons";

const SideNav = () => {
  return (
    <section className="scrollbar-hide no-scrollbar  fixed bottom-0 left-0 top-0 hidden w-64 flex-col gap-5 overflow-y-auto border px-10 py-3 md:flex">
      <h1 className="mb-2 text-4xl font-bold text-indigo-800">Chatter</h1>
      <div>
        <h4 className="mb-2 text-lg font-medium">Overview</h4>
        <ul className="flex flex-col gap-3 pl-7 text-slate-700">
          <li className="flex items-center gap-3 text-indigo-800">
            <img src={feed} alt="feed-icon" className="h-5 w-5" />
            <span>Feed</span>
          </li>
          <li className="flex items-center gap-3">
            <img src={bookmark} alt="bookmark-icon" className="h-5 w-5" />
            <span>Bookmarks</span>
          </li>
          <li className="flex items-center gap-3">
            <img src={teamBlogs} alt="teamBlogs-icon" className="h-5 w-5" />
            <span>Team Blogs</span>
          </li>
          <li className="flex items-center gap-3">
            <img src={drafts} alt="drafts-icon" className="h-4 w-4" />
            <span>Drafts</span>
          </li>
          <li className="flex items-center gap-3">
            <img src={analytics} alt="analytics-icon" className="h-4 w-4" />
            <span>Analytics</span>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="mb-1 flex items-center gap-3 text-lg font-medium">
          <span>Trending tags</span>{" "}
          <img src={tags} alt="trending-tags-icon" className="h-4 w-4" />
        </h4>
        <ul className="flex flex-col gap-2 pl-7 text-slate-700">
          <li>Programming</li>
          <li>Data science</li>
          <li>Technology</li>
          <li>Machine learning</li>
          <li>Politics</li>
          <p className="text-lg text-black">See all</p>
        </ul>
      </div>
      <div>
        <h4 className="mb-2 text-lg font-medium">Personal</h4>
        <ul className="flex flex-col gap-3 px-7 text-slate-700">
          <li className="flex items-center gap-3">
            <img src={account} alt="account-icon" />
            <span>Account</span>
          </li>
          <li className="flex items-center gap-3">
            <img src={notifications} alt="notifications-icon" />
            <span>Notification</span>
          </li>
          <p className="text-lg font-bold text-red-500">Log out</p>
        </ul>
      </div>
    </section>
  );
};

export default SideNav;
