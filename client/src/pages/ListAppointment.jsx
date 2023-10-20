import React from 'react';
import "../App.css"
import Menu from "../components/Home/Menu";
import Header from "../components/Home/Header";

import { PiTrashBold } from "react-icons/pi"
import { PiPencilSimpleLineBold } from "react-icons/pi"
import { Link } from 'react-router-dom';

const ListAppointment = () => {
    return (
        <div className='App w-full d-flex'>
            <Menu className="w-[25%]" />
            <div className='r-0 w-[75%] h-full ml-[25%] t-0'>
                <Header className="t-0 z-10 fixed r-0" />
                <div className="t-0" >
                    <div className="bg-[#EAE9F1] h-screen px-[5%] py-[30px]">
                        <h1 className="text-[1rem]">Danh sách bài viết EleganceBeauty</h1>
                        <div className="w-full mt-[20px] h-full p-4">
                            <table class="table-layout w-full">
                                <thead className="text-base font-medium list-user bg-white py-5">
                                    <tr className="font-semibold">

                                        <th>Mã lịch hẹn</th>
                                        <th>Khách Hàng</th>
                                        <th>Số điện thoại </th>
                                        <th>Ngày đặt lịch</th>
                                        <th>Trạng thái</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm justify-between">
                                    <tr className="text-justify blog-infor">
                                        <td>1</td>
                                        <td> Nguyen Kha Han</td>
                                        <td>0808235080</td>
                                        <td>
                                            <p>12:02</p>
                                            <p>12-02-2023</p>
                                        </td>
                                        <td>
                                            <select name="lang" id="select-app">
                                                <option value="">Đang tiến hành</option>
                                                <option value="csharp">Đã thực hiện</option>
                                                <option value="cpp">Đã hủy</option>

                                            </select>
                                        </td>
                                        <td><u>Chi tiết</u></td>


                                    </tr>
                                    <tr className="text-justify blog-infor">
                                        <td>1</td>
                                        <td> Nguyen Kha Han</td>
                                        <td>0808235080</td>
                                        <td>
                                            <p>12:02</p>
                                            <p>12-02-2023</p>
                                        </td>
                                        <td>
                                            <select name="lang" id="select-app">
                                                <option value="">Đang tiến hành</option>
                                                <option value="csharp">Đã thực hiện</option>
                                                <option value="cpp">Đã hủy</option>

                                            </select>
                                        </td>
                                        <td><u>Chi tiết</u></td>
                                    </tr>
                                    <tr className="text-justify blog-infor">
                                        <td>1</td>
                                        <td> Nguyen Kha Han</td>
                                        <td>0808235080</td>
                                        <td>
                                            <p>12:02</p>
                                            <p>12-02-2023</p>
                                        </td>
                                        <td>
                                            <select name="lang" id="select-app">
                                                <option value="">Đang tiến hành</option>
                                                <option value="csharp">Đã thực hiện</option>
                                                <option value="cpp">Đã hủy</option>

                                            </select>
                                        </td>
                                        <td><u>Chi tiết</u></td>


                                    </tr><tr className="text-justify blog-infor">
                                        <td>1</td>
                                        <td> Nguyen Kha Han</td>
                                        <td>0808235080</td>
                                        <td>
                                            <p>12:02</p>
                                            <p>12-02-2023</p>
                                        </td>
                                        <td>
                                            <select name="lang" id="select-app">
                                                <option value="">Đang tiến hành</option>
                                                <option value="csharp">Đã thực hiện</option>
                                                <option value="cpp">Đã hủy</option>

                                            </select>
                                        </td>
                                        <td><u>Chi tiết</u></td>


                                    </tr>
                                    <tr className="text-justify blog-infor">
                                        <td>1</td>
                                        <td> Nguyen Kha Han</td>
                                        <td>0808235080</td>
                                        <td>
                                            <p>12:02</p>
                                            <p>12-02-2023</p>
                                        </td>
                                        <td>
                                            <select name="lang" id="select-app">
                                                <option value="">Đang tiến hành</option>
                                                <option value="csharp">Đã thực hiện</option>
                                                <option value="cpp">Đã hủy</option>

                                            </select>
                                        </td>
                                        <td><u>Chi tiết</u></td>


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
                                <Link to="/addblog">
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
        </div>
    );
};

export default ListAppointment;