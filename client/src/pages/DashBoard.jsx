import React from 'react';
import "../App.css"
import { CiUser } from "react-icons/ci"
import { MdOutlineMedicalServices } from "react-icons/md"
import { BiCommentDetail } from "react-icons/bi"

import Header from '../components/Home/Header';
import Menu from '../components/Home/Menu';


const DashBoard = () => {
    return (
        <div className="App w-full d-flex">
            <Menu className="w-[25%]" />
            <div className='r-0 w-[75%] h-full ml-[25%] t-0'>
                <Header className="t-0 z-10 fixed r-0" />
                <div className="t-0" >
                    <div className="bg-[#EAE9F1] h-full px-[5%] py-[30px]">
                        <h1 className="text-[1rem]">Bảng Điều Khiển Elegance</h1>

                        {/* Thống Kê */}
                        <div className="grid grid-cols-4 gap-4 mt-[20px] ">
                            <div className="bg-white h-[100%] p-4 flex items-center justify-between rounded-2xl">
                                <div className="">
                                    <h1 className="text-[3.5rem] mb-[5px]">23</h1>
                                    <p>Người dùng</p>
                                </div>
                                <div className="text-[3rem]">
                                    <CiUser className="text-red-500" />
                                </div>
                            </div>
                            <div className="bg-white h-[100%] p-4 flex items-center justify-between rounded-2xl">
                                <div className="">
                                    <h1 className="text-[3.5rem] mb-[5px]">10</h1>
                                    <p>Dịch vụ</p>
                                </div>
                                <div className="text-[3rem]">
                                    <MdOutlineMedicalServices className="text-green-400" />
                                </div>
                            </div>
                            <div className="bg-white h-[100%] p-4 flex items-center justify-between rounded-2xl">
                                <div className="">
                                    <h1 className="text-[3.5rem] mb-[5px]">50</h1>
                                    <p>Đánh giá</p>
                                </div>
                                <div className="text-[3rem]">
                                    <BiCommentDetail className="text-purple-500" />
                                </div>
                            </div>
                            <div className="bg-white h-[100%] p-4 flex items-center justify-between rounded-2xl">
                                <div className="">
                                    <h1 className="text-[3.5rem] mb-[5px]">7</h1>
                                    <p>Bài viết</p>
                                </div>
                                <div className="text-[3rem]">
                                    <CiUser className="text-red-500" />
                                </div>
                            </div>


                        </div>

                        {/* Lịch Hẹn */}
                        <div className="bg-white w-full mt-[20px] h-full p-4">
                            <table class="table-layout w-full">
                                <thead className="text-center justify-between text-base font-medium">
                                    <tr className="text-center text-sm">
                                        <th>#</th>
                                        <th>Tên Khách Hàng</th>
                                        <th>Số Điện Thoại</th>
                                        <th>Dịch Vụ</th>
                                        <th>Avatar</th>
                                        <th>Thời Gian</th>
                                        <th>Trạng Thái</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center text-xs ">
                                    <tr className="text-center ">
                                        <td>1</td>
                                        <td>Leanne Graham</td>
                                        <td>02111111111</td>
                                        <td>Dịch vụ chăm sóc da toàn thân</td>
                                        <td>
                                            <img className="text-center justify-center mt-[10px] ml-[50%] translate-x-[-50%]" src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"} width={25} height={25} />
                                        </td>
                                        <td>
                                            <p>07 : 00 </p>
                                            <p>12-02-2023</p>
                                        </td>
                                        <td>Đã thực hiện</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ervin Howell</td>
                                        <td>02111111111</td>
                                        <td>Dịch vụ chăm sóc da toàn thân</td>
                                        <td>
                                            <img className="text-center justify-center mt-[10px] ml-[50%] translate-x-[-50%]" src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"} width={30} height={30} />
                                        </td>
                                        <td>
                                            <p>07 : 00 </p>
                                            <p>12-02-2023</p>
                                        </td>
                                        <td>Đang tiến hành</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Clementine Bauch</td>
                                        <td>02111111111</td>
                                        <td>Dịch vụ chăm sóc da toàn thân</td>
                                        <td>
                                            <img className="text-center justify-center mt-[10px] ml-[50%] translate-x-[-50%]" src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"} width={30} height={30} />
                                        </td>
                                        <td>
                                            <p>07 : 00 </p>
                                            <p>12-02-2023</p>
                                        </td>
                                        <td>Đã thực hiện</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Patricia Lebsack</td>
                                        <td>02111111111</td>
                                        <td>Dịch vụ chăm sóc da toàn thân</td>
                                        <td>
                                            <img className="text-center justify-center mt-[10px] ml-[50%] translate-x-[-50%]" src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"} width={30} height={30} />
                                        </td>
                                        <td>
                                            <p>07 : 00 </p>
                                            <p>12-02-2023</p>
                                        </td>
                                        <td>Đã thực hiện</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Glenna Reichert</td>
                                        <td>02111111111</td>
                                        <td>Dịch vụ chăm sóc da toàn thân</td>
                                        <td>
                                            <img className="text-center justify-center mt-[10px] ml-[50%] translate-x-[-50%]" src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"} width={30} height={30} />
                                        </td>
                                        <td>
                                            <p>07 : 00 </p>
                                            <p>12-02-2023</p>
                                        </td>
                                        <td>Đã hủy</td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default DashBoard;