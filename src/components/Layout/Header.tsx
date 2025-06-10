import Image from "next/image";
import React from "react";
import { BiSolidBell } from "react-icons/bi";
const Header = () => {
  return (
    <header>
      <div className="container  flex w-full items-center justify-between h-[100px]">
        <div className="flex gap-x-5 items-center">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/006/541/188/non_2x/bearded-male-cartoon-character-with-sunglasses-minimalist-cartoon-avatar-profile-illustration-free-vector.jpg"
            alt="logo"
            width={80}
            height={80}
            className="rounded-full "
          />
          <div className="flex flex-col ">
            <p>Hello</p>
            <h3>Dilshod Adilbekov</h3>
          </div>
        </div>
        <div>
          <BiSolidBell size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
