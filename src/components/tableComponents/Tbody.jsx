import React from "react";

export default function TBody({ TbodyData, columns, searchData }) {

    let { id, name, address, birthday, phone } = searchData
    let listInfo = TbodyData.filter((e) => {

        if (id.trim() === '') {
            // includes true thì return về e.name
            return (e.name.includes(name) && e.address.includes(address) && e.birthday.includes(birthday) && e.phone.includes(phone))
        } else {
            return (e.id == id && e.name.includes(name) && e.phone.includes(phone) && e.birthday.includes(birthday) && e.address.includes(address))
        }
    })
    return (
        <>
            <tbody>
                {listInfo.map((x, index) => <tr key={index}>
                    {
                        columns.map((col, ind) =>
                            <td key={ind}>{x[col.field]}</td>
                        )
                    }

                </tr>)}
            </tbody>
        </>
    )
}
{/* <td> */ }
{/*onclick truyền id để xử lí */ }
{/* <button>sửa</button>
<button>xóa</button>
</td> */}

// dupbleclick vào td hiển thị 2 nút sửa xóa, ấn 2 nút đó sẽ xử lí sửa, xóa