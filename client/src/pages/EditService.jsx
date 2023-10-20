import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Menu from "../components/Home/Menu";
import Header from "../components/Home/Header";
import { getServiceById, updateService } from "../services/serviceAPI";

const EditService = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const loadServiceById = async (id) => {
      const response = await getServiceById(id);
      if (response && response.data) {
        const { name, price, imageUrl, description } = response.data;
        setName(name);
        setPrice(price);
        setImageUrl(imageUrl);
        setDescription(description);
      }
    };
    loadServiceById(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedService = { id, name, price, imageUrl, description };
    await updateService(id, updatedService);
    alert('Cập nhật dịch vụ thành công!');
  };

  return (
    <div>
      <div className='App w-full d-flex'>
        <Menu className="w-[25%]" />
        <div className='r-0 w-[75%] h-full ml-[25%] t-0'>
          <Header className="t-0 z-10 fixed r-0" />
          <div className="t-0" >
            <div className="bg-[#EAE9F1] h-screen px-[5%] py-[30px]">
              <h1 className="text-center title-page">Sửa Dịch Vụ</h1>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 mt-[20px] add-user">
                  <div className="user-id">
                    <label htmlFor="">Tên Dịch vụ</label><br />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="username">
                    <label htmlFor="">Giá</label><br />
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      min="0"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 mt-[20px] add-user">
                  <div className="image">
                    <label htmlFor="">Ảnh</label><br />
                    <input
                      type="text"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='pt-3 des'>
                  <label htmlFor="">Mô tả</label> <br />
                  <div className='description'>
                    <textarea
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      cols="167.5"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="grid grid-cols-8 gap-2 btn-list mt-[20px]">
                  <button type="submit">Lưu</button>
                  <button type="reset">Nhập lại</button>
                  <Link to="/services">
                    <button>Hủy</button>
                  </Link>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditService;