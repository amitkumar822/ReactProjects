import React, { useState } from "react";
import { RxCaretDown, RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1, CiSearch } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdAssignmentInd } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { BiGitMerge } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";



function Header() {
  const [toggle, setToggle] = useState(false);


  const showSideMenu = () => {
    // setToggle(!toggle);
    setToggle(true);
  };

  const hideShideMenu = () => {
    setToggle(false);
  };

  const crossClose = () => {
    setToggle(!toggle);
  };

  // const [searchToggle, setSearchToggle] = useState(true)

  const links = [
    {
      icon: <IoIosSearch />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offers",
      sup: "NEW",
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: "Help",
    },
    {
      icon: <MdAssignmentInd />,
      name: "Sign In",
    },
    {
      icon: <FaCartArrowDown />,
      name: "Cart",
    },
  ];

  return (
    <>
      {/*👉 Side bar section */}
      <div
        onClick={hideShideMenu}
        className="black-overlay w-full h-full fixed duration-500 z-[9999999999]"
        style={{
          // opacity: toggle? '1': '0',
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()} //stopPropagation() function all default events deactivate kar deta hai
          className="md:w-[600px] h-full bg-white absolute duration-[400ms] z-[9999999999] flex pt-20 justify-center"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          <div
            onClick={crossClose}
            className=" cursor-pointer text-[30px] hover:text-[red] hover:text-[35px] w-[40px] h-[40px] flex items-center justify-center"
          >
            <RxCross2 />
          </div>
          <div className="pt-16 w-[300px]">
            <div className=" relative">
              <CiSearch className=" absolute top-5 left-1 text-[20px]" />
              <input
                className="md:w-[465px] w-[286px] border px-8 py-4 font-semibold shadow"
                type="text"
                placeholder="Search for area, string name.."
              />
            </div>
            <div className="md:w-[465px] w-[286px] border width-[250px] mt-11 py-4 px-5 flex items-center gap-5 ">
              <MdGpsFixed className="text-[25px] cursor-pointer" />
              <div>
                <h1 className="font-semibold text-[17px] hover:text-[#fc8019] cursor-pointer">
                  Get current location
                </h1>
                <h3 className="text-[14px] font-semibold cursor-pointer text-[#9597A1]">
                  Using GPS
                </h3>
              </div>
            </div>

            <div className="border md:max-w-[465px] w-[286px] mt-11 py-4 px-5 items-center grid grid-cols-1">
              <h2 className="text-[#9597A1] ml-10">RECENT SEARCHES</h2>
              <div className="w-full">
                <div className="flex items-center gap-3 mt-5">
                  <BiGitMerge className="text-[20px] cursor-pointer" />
                  <div>
                    <h1 className="font-semibold text-[17px] hover:text-[#fc8019] cursor-pointer mb-1">
                      Bangalore Palace
                    </h1>
                    <h3 className="text-[14px] font-semibold cursor-pointer text-[#9597A1]">
                      Palace Cross Road, Vasanth Nagar, Bengaluru Karnataka,
                      India
                    </h3>
                    <hr
                      className=" mt-4"
                      style={{
                        borderBottom: "1px dotted black",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="flex items-center gap-3 mt-5">
                  <BiGitMerge className="text-[20px] cursor-pointer" />
                  <div>
                    <h1 className="font-semibold text-[17px] hover:text-[#fc8019] cursor-pointer mb-1">
                      Noida sector 62 metro station gate no 1
                    </h1>
                    <h3 className="text-[14px] font-semibold cursor-pointer text-[#9597A1]">
                      Electronic City Metro Station Road, H Block, Sector 62,
                      Noida, Uttar Pradesh, India
                    </h3>
                    {/* <hr
                      className=" mt-4"
                      style={{
                        borderBottom: "1px dotted black",
                      }}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 z-[9999999] bg-white">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="md:w-[90px] w-[50px]">
            <img src="./image/logo.png" alt="logo" />
          </div>
          <div className=" cursor-pointer text-[12.5px] md:text-[17px]">
            <span className="font-bold border-b-[2px] border-[black] hover:text-[#fc8019] text-[14px] md:text-[17px]">
              Bangalore Palace
            </span>{" "}
            Palace Cross Rd, India{" "}
            <RxCaretDown
              onClick={showSideMenu}
              // fontSize={25}
              className=" inline text-[#fc8019] cursor-pointer text-[25px] hover:scale-150"
            />
          </div>

          <div className="md:flex hidden gap-1 items-center ml-1 text-[18px] cursor-pointer font-semibold text-[#3D4152] hover:text-[#fc8019]">
            <FiShoppingBag/>
           Swiggy Corporate
          </div>

          <nav className=" hidden md:flex list-none gap-8 ml-auto text-[18px] font-semibold text-[#3D4152]">
            {links.map((link, index) => (
              <li
                className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer"
                key={index}
              >
                {link.icon}
                {link.name}
                <sup className="text-[#fc8019]">{link.sup} </sup>
              </li>
            ))}
          </nav>
        </div>
      </header>
      
    </>
  );
}

export default Header;

