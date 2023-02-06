import { HomeIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  EllipsisHorizontalCircleIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col h-full p-2 xl:items-start fixed">
      {/* Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        ></Image>
      </div>

      {/* Menu */}
      <div className=" mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>

      {/* Button */}

      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/* Mini-profile */}

      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto ">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQFgve3vk3RQjA/profile-displayphoto-shrink_800_800/0/1659727840040?e=2147483647&v=beta&t=JMvCGzWhNQWyx5gf4T3vxKDlv29UfbGzBz50WKlb7_Y"
          alt="User-image"
          className="h-10 w-10 rounded-full xl:mr-2"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Hari Kapadia</h4>
          <p className="text-gray-500">@harikapadia</p>
        </div>
        <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}
