import React, { useState, useReducer } from "react";
import THead from "./tableComponents/Thead";
import TBody from "./tableComponents/Tbody";
import FormInput from "./tableComponents/formInput";

let initial = [
    { id: 1, name: 'Nguyễn Văn A', address: '12', birthday: '20/2/1990', phone: '1234567890' },
    { id: 2, name: 'Đinh Thanh C', address: '123', birthday: '7/9/2000', phone: '1998899898' },
    { id: 3, name: 'Phạm Chung H', address: '123456', birthday: '3/5/1992', phone: '1234567890' },
    { id: 4, name: 'Hoàng Anh Q', address: '12', birthday: '15/1/1998', phone: '1234567890' },
    { id: 5, name: 'Linh Thiên H', address: '11', birthday: '24/9/2004', phone: '1234567890' },
    { id: 6, name: 'Bá Cao Đ', address: '12345', birthday: '12/12/2003', phone: '1234567890' },
]

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":
            return [...state, action.payload];
            
        case "EDIT":
            let updated = state.map(u => {
                if(u.id === action.payload.id){
                    u.name = action.payload.name;
                    u.address = action.payload.address;
                    u.birthday = action.payload.birthday;
                    u.phone = action.payload.phone    
                }
                
                return u;
            })
            console.log(updated)
            return [...updated];
        case "DELETE":
            let del = state.findIndex(u => u.id === action.payload.id);
            if(del !== -1) {
                state.splice(del,1);
            }
            return[...state];
        case "SORT":
            let a = action.payload.toggle ? 1 : -1
            let _data = state.sort((u1, u2) => u1[action.payload.field].localeCompare(u2[action.payload.field]) * a)
            return [..._data];
        case "SEARCH":
            
        default: 
            return state;
        
    }
}
export default function Table() {
    const columns = [
        { lable: 'id', field: 'id' },
        { lable: 'name', field: 'name' },
        { lable: 'address', field: 'address' },
        { lable: 'birthday', field: 'birthday' },
        { lable: 'phone', field: 'phone' }
    ]
    const [dataS, dispatch] = useReducer(reducer, initial)

    const [dataSearch, setDataSearch] = useState({
        id:"",
        address:"",
        name:"",
        phone:"",
        birthday:""
    }) 
    
    const handleSort = (field, toggle) => {
        dispatch({
            type: 'SORT',
            payload:{
                field,
                toggle
            }
        })

    }
    // search
    const handleOnchange  = (searchData) =>{
        setDataSearch(
            {...dataSearch, ...searchData}
        )

    }
    const handleAdd = () => {
        dispatch({
            type: "ADD",
            payload: {
                id: 7,
                name: 'Hoang Quyen K'
            }
        })
   }
    const handleDelete = () => {
        dispatch({
            type: "DELETE",
            payload: {
                id: 1,

            }
        })
   }
    const handleEdit = () => {
        dispatch({
            type: "EDIT",
            payload: {
                id: 1,
                name: 'a',
                address: 'a',
                birthday:'',
                phone: ''
            }
        }) 
   }
    return (
        <>
            <h1>Table Hook</h1>

            <FormInput columns={columns}  handleAdd={handleAdd} handleDelete={handleDelete} handleEdit={handleEdit}/>
            <table border={1} cellPadding={5} cellSpacing={0} width={'100%'}>
                <THead columns={columns} handleSort={handleSort} handleOnchange={handleOnchange}/>
                <TBody TbodyData={dataS} columns={columns} searchData={dataSearch}/>
            </table>
        </>
    )
}

// const [isSort, setIsSort] = useState('')
// lấy các lable
// viết hàm có đối số const handleSort = (param) => {} truyền hàm xuống component rồi sử dụng
// ở hàm con trong map buộc phải dùng arrow function nếu không bị vòng lặp vô hạn
// dùng lable kiểm tra để sort

/* tạo components form, render dựa vào state của data */
/* dùng reducer để xử lí crud */ 

// updateBooks([...books, { name: 'A new Book', id: '...'}]);

// tạo hook, truyền hook xuống component THead
// THead hiển thị nội dung ở hook
// thuận tiện khi thêm hoặc xóa phần tử trong hook
// nhập chữ hiện lên liên quan, không nhập trả về cái cũ, có thể viết chung 1 state không?
// const handleReturn = (param) => {
//     return param
// }