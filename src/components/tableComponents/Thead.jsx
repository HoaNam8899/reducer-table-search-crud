import React, { useState } from "react";

export default function THead({ columns, handleSort, handleOnchange }) {

    const [toggle, setToggle] = useState(false)
    const handleSortTh = (param) => {
        setToggle(!toggle)
        handleSort(param, toggle)
    }
    const handleStopPropagation = (e) => {
        e.stopPropagation()
    }
    const handleOnchangeTh = (dataSearch) => {
        handleOnchange(dataSearch)
    }
    return (
        <>
            <thead>
                <tr>
                    {columns.map((col, index) =>
                        <th key={index} onClick={() => handleSortTh(col.lable)}>{col.lable} <br /> <input onClick={e => handleStopPropagation(e)}
                            type="text" style={{ width: '50%' }} onChange={(e) => handleOnchangeTh({ [col.lable]: e.target.value })} />
                        </th>)}
                </tr>
            </thead>
        </>
    )
}
