import "../App.css"
import React from 'react';
import Menu from "../components/Home/Menu";
import Header from "../components/Home/Header";
import { PiTrashBold } from "react-icons/pi"
import { PiPencilSimpleLineBold } from "react-icons/pi"
import { Link } from "react-router-dom";
const ListUser = () => {
    return (
        <div className="App w-full d-flex">
            <Menu className="w-[25%]" />
            <div className='r-0 w-[75%] h-full ml-[25%] t-0'>
                <Header className="t-0 z-10 fixed r-0" />
                <div className="t-0" >
                    <div className="bg-[#EAE9F1] h-screen px-[5%] py-[30px]">
                        <h1 className="text-[1rem]">Danh sách khách hàng EleganceBeauty</h1>
                        <div className="w-full mt-[10px] h-full p-4">
                            <table className="table-layout w-full">
                                <thead className="bg-white text-base font-medium py-[30px] list-user">
                                    <tr className="font-semibold">
                                        <th>Mã Người Dùng</th>
                                        <th>Tên Người Dùng </th>
                                        <th>Email</th>
                                        <th>Vai trò </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm justify-between">
                                    <tr className="leading-10">
                                        <td className="text-center"> 1 </td>
                                        <td>Nguyễn Doãn Tùng</td>
                                        <td>nguyendoantung123@gmail.com</td>
                                        <td>Admin</td>
                                        <td>
                                            <div className="grid grid-cols-2 gap-1">
                                                <div>
                                                    <PiPencilSimpleLineBold className="ml-[30px] text-green-500 text-xl" />
                                                </div>
                                                <div>
                                                    <PiTrashBold className="text-red-600 text-xl" />
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr className="leading-10">
                                        <td className="text-center"> 2 </td>
                                        <td>Đào Thị Hương Nhung</td>
                                        <td>nhunghuong2003@gmail.com</td>
                                        <td>Nhân viên</td>
                                        <td>
                                            <div className="grid grid-cols-2 gap-1">
                                                <div>
                                                    <PiPencilSimpleLineBold className="ml-[30px] text-green-500 text-xl" />
                                                </div>
                                                <div>
                                                    <PiTrashBold className="text-red-600 text-xl" />
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr className="leading-10">
                                        <td className="text-center"> 3 </td>
                                        <td>Phùng Minh Đăng</td>
                                        <td>dangphung2003@gmail.com</td>
                                        <td>Nhân viên</td>
                                        <td>
                                            <div className="grid grid-cols-2 gap-1">
                                                <div>
                                                    <PiPencilSimpleLineBold className="ml-[30px] text-green-500 text-xl" />
                                                </div>
                                                <div>
                                                    <PiTrashBold className="text-red-600 text-xl" />
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr className="leading-10">
                                        <td className="text-center"> 4 </td>
                                        <td>Huỳnh Thị Yến Nhi</td>
                                        <td>nhiyenhuynht2113@gmail.com</td>
                                        <td>Khách hàng</td>
                                        <td>
                                            <div className="grid grid-cols-2 gap-1">
                                                <div>
                                                    <PiPencilSimpleLineBold className="ml-[30px] text-green-500 text-xl" />
                                                </div>
                                                <div>
                                                    <PiTrashBold className="text-red-600 text-xl" />
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr className="leading-10">
                                        <td className="text-center"> 5 </td>
                                        <td>Trần Minh Châu</td>
                                        <td>chautranminh980@gmail.com</td>
                                        <td>Khách Hàng</td>
                                        <td>
                                            <div className="grid grid-cols-2 gap-1">
                                                <div>
                                                    <PiPencilSimpleLineBold className="ml-[30px] text-green-500 text-xl" />
                                                </div>
                                                <div>
                                                    <PiTrashBold className="text-red-600 text-xl" />
                                                </div>
                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="grid grid-cols-12 gap-4 font-semibold">
                                <div class="col-start-7 col-span-9 btn-nav">
                                    <button className="m-[20px] bg-[#548EFA]">01</button>
                                    <button className="bg-[#D9D9D9]">02</button>
                                </div>
                            </div>
                            <div class="grid grid-cols-8 gap-2 btn-list">
                                <Link to="/adduser">
                                    <button>Thêm mới</button>
                                </Link>
                                <button>Chọn tất cả</button>
                                <button>Xóa tất cả</button>
                                <button>Xóa</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default ListUser;