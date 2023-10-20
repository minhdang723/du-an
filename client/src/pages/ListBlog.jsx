import "../App.css"
import React from 'react';
import Menu from "../components/Home/Menu";
import Header from "../components/Home/Header";
import { PiTrashBold } from "react-icons/pi"
import { PiPencilSimpleLineBold } from "react-icons/pi"
import { Link } from "react-router-dom";

const ListBlog = () => {
    return (
        <div className="App w-full d-flex">
            <Menu className="w-[25%]" />
            <div className='r-0 w-[75%] h-full ml-[25%] t-0'>
                <Header className="t-0 z-10 fixed r-0" />
                <div className="t-0" >
                    <div className="bg-[#EAE9F1] h-screen px-[5%] py-[30px]">
                        <h1 className="text-[1rem]">Danh sách bài viết EleganceBeauty</h1>
                        <div className="w-full mt-[20px] h-full p-4">
                            <table class="table-layout w-full">
                                <thead className="text-justify justify-between text-base font-medium">
                                    <tr className="text-center text-sm">
                                        <th>#</th>
                                        <th>Tên tiêu đề</th>
                                        <th>Mô tả</th>
                                        <th>Ngày đăng</th>
                                        <th>Tác giả</th>
                                        <th>Ảnh</th>
                                        <th>Nội dung</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="text-justify text-xs ">
                                    <tr className="text-justify blog-infor">
                                        <td>1</td>
                                        <td>Địa chỉ đáng tin cậy về thẩm mỹ</td>
                                        <td> Nếu bạn đang muốn tạo dựng nét đẹp tự nhiên và hoàn hảo cho chân mày của mình ...</td>
                                        <td><p>12-02-2023</p></td>
                                        <td>Admin</td>
                                        <td><img className="text-center justify-center mt-[10px]" src={"https://lavenderstudio.com.vn/wp-content/uploads/2018/11/word-image-12.jpeg"} width={100} /></td>
                                        <td><u>thêm</u></td>
                                        <td>
                                            <div className="grid grid-cols-2 gap-1">
                                                <button>
                                                    <PiPencilSimpleLineBold className="mr-[10px] text-green-500 text-xl" />
                                                </button>
                                                <button>
                                                    <PiTrashBold className="ml-5 text-red-600 text-xl" />
                                                </button>
                                            </div>

                                        </td>

                                    </tr>
                                    <tr className="text-justify blog-infor">
                                        <td>1</td>
                                        <td>Địa chỉ đáng tin cậy về thẩm mỹ</td>
                                        <td> Nếu bạn đang muốn tạo dựng nét đẹp tự nhiên và hoàn hảo cho chân mày của mình ...</td>
                                        <td><p>12-02-2023</p></td>
                                        <td>Admin</td>
                                        <td><img className="text-center justify-center mt-[10px]" src={"https://lavenderstudio.com.vn/wp-content/uploads/2018/11/word-image-12.jpeg"} width={100} /></td>
                                        <td><u>thêm</u></td>
                                        <td>
                                            <div className="grid grid-cols-2 gap-1">
                                                <button>
                                                    <PiPencilSimpleLineBold className="mr-[10px] text-green-500 text-xl" />
                                                </button>
                                                <button>
                                                    <PiTrashBold className="ml-5 text-red-600 text-xl" />
                                                </button>
                                            </div>

                                        </td>

                                    </tr>
                                    <tr className="text-justify blog-infor">
                                        <td>1</td>
                                        <td>Địa chỉ đáng tin cậy về thẩm mỹ</td>
                                        <td> Nếu bạn đang muốn tạo dựng nét đẹp tự nhiên và hoàn hảo cho chân mày của mình ...</td>
                                        <td><p>12-02-2023</p></td>
                                        <td>Admin</td>
                                        <td><img className="text-center justify-center mt-[10px]" src={"https://lavenderstudio.com.vn/wp-content/uploads/2018/11/word-image-12.jpeg"} width={100} /></td>
                                        <td><u>thêm</u></td>
                                        <td>
                                            <div className="grid grid-cols-2 gap-1">
                                                <button>
                                                    <PiPencilSimpleLineBold className="mr-[10px] text-green-500 text-xl" />
                                                </button>
                                                <button>
                                                    <PiTrashBold className="ml-5 text-red-600 text-xl" />
                                                </button>
                                            </div>

                                        </td>

                                    </tr>
                                    <tr className="text-justify blog-infor">
                                        <td>1</td>
                                        <td>Địa chỉ đáng tin cậy về thẩm mỹ</td>
                                        <td> Nếu bạn đang muốn tạo dựng nét đẹp tự nhiên và hoàn hảo cho chân mày của mình ...</td>
                                        <td><p>12-02-2023</p></td>
                                        <td>Admin</td>
                                        <td><img className="text-center justify-center mt-[10px]" src={"https://lavenderstudio.com.vn/wp-content/uploads/2018/11/word-image-12.jpeg"} width={100} /></td>
                                        <td><u>thêm</u></td>
                                        <td>
                                            <div className="grid grid-cols-2 gap-1">
                                                <button>
                                                    <PiPencilSimpleLineBold className="mr-[10px] text-green-500 text-xl" />
                                                </button>
                                                <button>
                                                    <PiTrashBold className="ml-5 text-red-600 text-xl" />
                                                </button>
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
        </div >
    );
};

export default ListBlog;