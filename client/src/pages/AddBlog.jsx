import React from 'react';
import "../App.css"
import Menu from "../components/Home/Menu";
import Header from "../components/Home/Header";
import { Link } from 'react-router-dom';

const AddBlog = () => {
    return (
        <div>
            <div className='App w-full d-flex'>
                <Menu className="w-[25%]" />
                <div className='r-0 w-[75%] h-full ml-[25%] t-0'>
                    <Header className="t-0 z-10 fixed r-0" />
                    <div className="t-0" >
                        <div className="bg-[#EAE9F1] h-screen px-[5%] py-[30px]">
                            <h1 className="text-center title-page">Thêm Bài Viết</h1>

                            <div className="grid grid-cols-2 mt-[20px] add-user">
                                <div className="user-id">
                                    <label htmlFor="">Tiêu đề</label><br />
                                    <input type="text" />
                                </div>
                                <div className="username">
                                    <label htmlFor="">Ngày đăng</label><br />
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 mt-[20px] add-user">
                                <div className="user-phone">
                                    <label htmlFor="">Tác Giả</label><br />
                                    <input type="text" placeholder='Duong Ngoc Hoa' />
                                </div>
                                <div className="image">
                                    <label htmlFor="image">Ảnh</label><br />
                                    <input type="file" />
                                </div>
                            </div>
                            <div className='pt-3 des'>
                                <label htmlFor="des" >Mô tả</label> <br />
                                <div className='description'>
                                    <textarea name="descripton" id="" cols="167.5" rows="10"></textarea>
                                </div>
                            </div>

                            <div class="grid grid-cols-8 gap-2 btn-list mt-[20px]">
                                <Link to="/addcontentblog">
                                    <button>Thêm nội dung</button>
                                </Link>
                                <button>Nhập lại</button>
                                <button>Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;