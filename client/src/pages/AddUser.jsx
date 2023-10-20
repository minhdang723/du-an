import React from 'react';
import "../App.css"
import Menu from "../components/Home/Menu";
import Header from "../components/Home/Header";
import { Link } from 'react-router-dom';

const AddUser = () => {
    return (
        <div className='App w-full d-flex'>
            <Menu className="w-[25%]" />
            <div className='r-0 w-[75%] h-full ml-[25%] t-0'>
                <Header className="t-0 z-10 fixed r-0" />
                <div className="t-0" >
                    <div className="bg-[#EAE9F1] h-screen px-[5%] py-[30px]">
                        <h1 className="text-center title-page">Thêm Người Dùng</h1>

                        <div className="grid grid-cols-2 mt-[20px] add-user">
                            <div className="user-id">
                                <label htmlFor="">Mã người dùng</label><br />
                                <input type="text" placeholder='Auto Number' />
                            </div>
                            <div className="username">
                                <label htmlFor="">Tên người dùng</label><br />
                                <input type="text" placeholder='Anna Jahn' />
                            </div>
                        </div>
                        <div className="pt-3 email">
                            <label htmlFor="email">Email</label> <br />
                            <input type="email" placeholder=' name@example.xom' />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-[20px] add-user">
                            <div className="user-phone">
                                <label htmlFor="">Số điện thoại</label><br />
                                <input type="number" placeholder='0808235...' />
                            </div>
                            <div className="image">
                                <label htmlFor="image">Ảnh</label><br />
                                <input type="file" />
                            </div>
                        </div>
                        <div className='pt-3 role-title'>
                            <label htmlFor="role" >Vai Trò</label> <br />
                            <div className='role'>
                                <input type="radio" className='m-3' />Nhân viên
                                <input type="radio" className='m-3' />Khách hàng
                            </div>
                        </div>

                        <div class="grid grid-cols-8 gap-2 btn-list mt-[20px]">
                            <Link to="/adduser">
                                <button>Thêm mới</button>
                            </Link>
                            <button>Nhập lại</button>
                            <button>Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUser;