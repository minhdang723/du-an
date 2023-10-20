import React from 'react';
import "../App.css"
import Menu from "../components/Home/Menu";
import Header from "../components/Home/Header";
import { Link } from 'react-router-dom';
const AddContentB = () => {
    return (
        <div>
            <div className='App w-full d-flex'>
                <Menu className="w-[25%]" />
                <div className='r-0 w-[75%] h-full ml-[25%] t-0'>
                    <Header className="t-0 z-10 fixed r-0" />
                    <div className="t-0" >
                        <div className="bg-[#EAE9F1] h-screen px-[5%] py-[30px]">
                            <h1 className="text-center title-page">Thêm nội Dung Bài Viết</h1>
                            <div className="pt-3 avt">
                                <label htmlFor="email">Hình Ảnh</label> <br />
                                <input type="file" />
                            </div>
                            <div className='pt-3 des'>
                                <label htmlFor="des" >Mô tả</label> <br />
                                <div className='description'>
                                    <textarea name="descripton" id="" cols="167.5" rows="10"></textarea>
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
        </div>
    );
};

export default AddContentB;