import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiPencilSimpleLineBold, PiTrashBold } from "react-icons/pi";
import { MdAddToDrive } from "react-icons/md";

const ListService = () => {

  const [services, setServices] = useState([
    {
      id: 1,
      name: "Dịch vụ 1",
      image: "https://via.placeholder.com/150",
      price: "100.000VNĐ",
      description: "Mô tả dịch vụ 1",
      status: "in-progress"
    },
    {
      id: 2,
      name: "Dịch vụ 2",
      image: "https://via.placeholder.com/150",
      price: "200.000VNĐ",
      description: "Mô tả dịch vụ 2",
      status: "done"
    },
    {
      id: 3,
      name: "Dịch vụ 3",
      image: "https://via.placeholder.com/150",
      price: "300.000VNĐ",
      description: "Mô tả dịch vụ 3",
      status: "cancelled"
    }
  ]);

  const deleteService = (id) => {
    const newServices = services.filter(service => service.id !== id);
    setServices(newServices);
  };

  return (
    <div className="mt-16">
      <h2 className="text-center text-2xl mb-4 font-bold">Danh sách dịch vụ</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Tên dịch vụ</th>
            <th className="px-4 py-2">Ảnh</th>
            <th className="px-4 py-2">Giá</th>
            <th className="px-4 py-2">Mô tả</th>
            <th className="px-4 py-2">Trạng thái</th>
            <th className="px-4 py-2">Thao tác</th>
          </tr>
        </thead>
        <tbody className="text-sm justify-between">
          {services.map(service => (
            <tr className="text-justify blog-infor" key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td><img src={service.image} alt={service.name} /></td>
              <td>{service.price}</td>
              <td>{service.description}</td>
              <td>
                <select name="status" id="select-status">
                  <option value="in-progress">Đang tiến hành</option>
                  <option value="done">Đã thực hiện</option>
                  <option value="cancelled">Đã hủy</option>
                </select>
              </td>
              <td>
                <button onClick={() => deleteService(service.id)}>
                  <PiTrashBold />
                </button>
                <Link to={`/editservice/${service.id}`}>
                  <button>
                    <PiPencilSimpleLineBold />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListService;
addd
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from "../components/Home/Menu";
import Header from "../components/Home/Header";
import { addService } from "../services/serviceAPI";

const AddService = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newService = { name, price, image, description };
    await addService(newService);
    alert('Thêm dịch vụ thành công!');
    setName('');
    setPrice('');
    setImage('');
    setDescription('');
  };

  return (
    <div>
      <div className='App w-full d-flex'>
        <Menu className="w-[25%]" />
        <div className='r-0 w-[75%] h-full ml-[25%] t-0'>
          <Header className="t-0 z-10 fixed r-0" />
          <div className="t-0" >
            <div className="bg-[#EAE9F1] h-screen px-[5%] py-[30px]">
              <h1 className="text-center title-page">Thêm Dịch Vụ</h1>

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
                      min={0}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 mt-[20px] add-user">
                  <div className="image">
                    <label htmlFor="image">Ảnh</label><br />
                    <input
                      type="text"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className='pt-3 des'>
                  <label htmlFor="description">Mô tả</label> <br />
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
                  <button>Xóa</button>
                  <Link to="/addcontentblog">
                    <button>Thêm nội dung</button>
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

export default AddService;