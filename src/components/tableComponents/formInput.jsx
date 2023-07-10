import React from "react";
import './formInput.css'
export default function FormInput({ columns, handleAdd, handleEdit, handleDelete }) {
    let user = {
        id: '',
        name: '',
        adress: '',
        birthday: '',
        phone: ''
    }
    const hanldeOnchangeForm = (e, lable) => {
        console.log(columns)

    }
    return (
        <form>
            {columns.map((x, index) => <div key={index}>
                <span>{x.lable}</span> <input type="text" onChange={e => hanldeOnchangeForm(e, x.lable)} /> <br />
            </div>)}

            <div className="btn">
                <button type="button" onClick={handleAdd}>Thêm</button>
                <button type="button" onClick={handleEdit}>Sửa</button>
                <button type="button" onClick={handleDelete}>Xóa</button>
                <button type="button" >Lưu</button>
            </div>
        </form>
    )
}
// dupbleclick bên table, hiển thị sửa, xóa, lưu, nếu có bấm thì gửi lên table tín hiệu, table kiểm tra rồi xử lí ở table,
// riêng nút sửa thì gửi state đó xuống để hiển thị, nếu bấm nút lưu thì lấy dữ liệu gửi lên lại cho table tìm id rồi sửa lại
// khi input onchange sẽ lưu dữ liệu vào một state, khi ấn nút thêm sẽ gửi dữ liệu lên table update lại
//
// xóa gửi tín hiệu lên table để thông báo xóa