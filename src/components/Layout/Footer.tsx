import Link from "next/link";
import React from "react";
import { TbBrandGoogleHome } from "react-icons/tb";
import { BsCalendarWeekFill } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { LuStickyNote } from "react-icons/lu";
const Footer = () => {
  return (
    <footer className="fixed bottom-0 right-0 w-full ">
      <div className="container p-5 bg-indigo-100 rounded-[20px] flex items-center  ">
        <ul className="flex items-center justify-between w-full">
          <li>
            <Link href="#">
            <TbBrandGoogleHome size={40} className="text-indigo-700" />
            </Link>
          </li>
          <li>
            <Link href="#">
            <BsCalendarWeekFill size={30} className="text-indigo-700" />
            </Link>
          </li>
          <li>
            <Link href="#">
            <FaCirclePlus size={50} className="text-indigo-700" />
            </Link>
          </li>
          <li>
            <Link href="#">
            <LuStickyNote  size={40} className="text-indigo-700" />
            </Link>
          </li>
              <li>
            <Link href="#">
            <FaUserFriends size={40} className="text-indigo-700" />
            </Link>
          </li> 
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
