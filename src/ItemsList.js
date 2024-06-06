import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ItemsList =
    ({ items, handleCheck, deleteTODO }) => {

        return (
            <ul>
                {items.map((item) => (
                    <li className='li' key={item.id}>
                        <input
                            type='checkbox'
                            id='myCheck'
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked} />
                        <label
                            style={(item.checked) ? { textDecoration: 'line-through', color: 'red' } : null}
                        >{item.item}</label>
                        <FaTrashAlt
                            role='button'
                            tabIndex="0"
                            onClick={() => deleteTODO(item.id)}
                        />
                    </li>
                ))}
            </ul>

        )
    }

export default ItemsList