import React from "react";
import "../App.css";
import Menu from "../components/Home/Menu";
import Header from "../components/Home/Header";

import { PiTrashBold } from "react-icons/pi";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const ListService = () => {
  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
    // Khởi tạo danh sách dịch vụ
    const initialServices = [
      {
        id: 1,
        name: "Dịch vụ 1",
        image: "https://via.placeholder.com/150",
        price: 100,
        description: "Mô tả dịch vụ 1",
      },
      {
        id: 2,
        name: "Dịch vụ 2",
        image: "https://via.placeholder.com/150",
        price: 200,
        description: "Mô tả dịch vụ 2",
      },
      {
        id: 3,
        name: "Dịch vụ 3",
        image: "https://via.placeholder.com/150",
        price: 300,
        description: "Mô tả dịch vụ 3",
      },
    ];

    setServices(initialServices);
  }, []);

  const deleteService = (id) => {
    const updatedServices = [...services];
    const index = updatedServices.findIndex((service) => service.id === id);
    updatedServices.splice(index, 1);
    setServices(updatedServices);
  };

  const handleDelete = (id) => {
    deleteService(id);
  };

  return (
    <div className="App w-full d-flex">
      <Menu className="w-[25%]" />
      <div className="r-0 w-[75%] h-full ml-[25%] t-0">
        <Header className="t-0 z-10 fixed r-0" />
        <div className="t-0">
          <div className="bg-[#EAE9F1] h-screen px-[5%] py-[30px]">
            <h1 className="text-[1rem]">Danh sách dịch vụ EleganceBeauty</h1>
            <div className="w-full mt-[20px] h-full p-4">
              <table class="table-layout w-full">
                <thead className="text-base font-medium list-user bg-white py-5">
                  <tr className="font-semibold">
                    <th>Mã lịch hẹn</th>
                    <th>Tên Dịch vụ</th>
                    <th>Ảnh </th>
                    <th>Giá</th>
                    <th>Mô tả</th>
                    <th>Trạng thái</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="text-sm justify-between">
                  {/* Hiển thị danh sách dịch vụ */}
                  {services.map((service) => (
                    <tr className="text-justify blog-infor" key={service.id}>
                      <td>{service.id}</td>
                      <td>{service.name}</td>
                      <td>
                        <img src={service.image} alt={service.name} />
                      </td>
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
                        {/* Thêm nút xóa */}
                        <button onClick={() => handleDelete(service.id)}>
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
              <div className="grid grid-cols-12 gap-4 font-semibold">
                <div class="col-start-7 col-span-9 btn-nav">
                  <button className="m-[20px] bg-[#548EFA]">01</button>
                  <button className="bg-[#D9D9D9]">02</button>
                </div>
              </div>
              <div class="grid grid-cols-8 gap-2 btn-list">
                <Link to="/addservice">
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

export default ListService;