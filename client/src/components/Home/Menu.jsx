import React from 'react';
import { FaHome } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";
import { PiInstagramLogoDuotone } from "react-icons/pi"
import { FiUser } from "react-icons/fi";
import { PiFacebookLogoBold } from "react-icons/pi"
import { BiCommentDetail } from "react-icons/bi";
import { BiTime } from "react-icons/bi";
import { PiTwitterLogoBold } from "react-icons/pi"
import { PiGithubLogoBold } from "react-icons/pi"
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
const Menu = () => {
    return (
        <div className="l-0 bg-[#0E0C28] w-[25%] h-screen fixed t-0 ">
            <div className="text-center ml-[50%] translate-x-[-50%]	mt-[10%]">
                <img
                    src={
                        "https://incucdep.com/wp-content/uploads/2014/12/logo-shop-thoi-trang-04.jpg"
                    }
                    width={400}
                    height={400}
                />
            </div>
            <div className="mt-[20px] mx-auto ml-[15%] cursor-pointer">
                <div className="text-white">
                    <Link to="/" className="flex items-center text-[1rem] mb-[10px] p-3 w-[100%] rounded-l-2xl items">
                        <div className="text-center mr-[8px]">
                            <FaHome className="mr-[5px]" />
                        </div>
                        <div>
                            <p>Bảng Điều Khiển</p>
                        </div>
                    </Link>
                    <div className="flex items-center text-[1rem] mb-[10px] p-3 w-[100%] rounded-l-2xl items">
                        <div className="text-center mr-[8px]">
                            <MdOutlineMedicalServices className="mr-[5px]" />
                        </div>
                        <div>
                            <p>Dịch Vụ</p>
                        </div>
                    </div>
                    <Link to='/listuser' className="flex items-center text-[1rem] mb-[10px] p-3 w-[100%] rounded-l-2xl items">
                        <div className="text-center mr-[8px]">
                            <FiUser className="mr-[5px]" />
                        </div>
                        <div>
                            <p>Người Dùng</p>
                        </div>
                    </Link>
                    <div className="flex items-center text-[1rem] mb-[10px] p-3 w-[100%] rounded-l-2xl items">
                        <div className="text-center mr-[8px]">
                            <BiCommentDetail className="mr-[5px]" />
                        </div>
                        <div>
                            <p>Đánh Giá</p>
                        </div>
                    </div>
                    <Link to="/listappointment" className="flex items-center text-[1rem] mb-[10px] p-3 w-[100%] rounded-l-2xl items">
                        <div className="text-center mr-[8px]">
                            <BiTime className="mr-[5px]" />
                        </div>
                        <div>
                            <p>Lịch Hẹn</p>
                        </div>
                    </Link>
                    <Link to="/listblog" className="flex items-center text-[1rem] mb-[10px] p-3 w-[100%] rounded-l-2xl items">
                        <div className="text-center mr-[8px]">
                            <BsFileEarmarkPostFill className="mr-[5px]" />
                        </div>
                        <div>
                            <p>Bài Viết</p>
                        </div>
                    </Link>
                    <div className="flex items-center text-[1rem] mb-[10px] p-3 w-[100%] rounded-l-2xl icon-mxh">
                        <div className="mr-[8px]">
                            <PiInstagramLogoDuotone className="mr-[20px]" />
                        </div>
                        <div className="mr-[8px]">
                            <PiFacebookLogoBold className="mr-[20px]" />
                        </div>
                        <div className="mr-[8px]">
                            <PiTwitterLogoBold className="mr-[20px]" />
                        </div>
                        <div className="mr-[8px]">
                            <PiGithubLogoBold className="mr-[20px]" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Menu;