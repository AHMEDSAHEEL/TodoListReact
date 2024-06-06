import React from "react"
import { FaPlus } from "react-icons/fa"

export const AddItem = ({newItem,setNewItem,handleSubmit}) => {
    return (
        <form className="addForm" onSubmit={handleSubmit}>

            <label htmlFor="addItem" className="addItem">Add Item</label>
            <input
                type="text"
                placeholder="Add Item"
                id="addItem"
                autoFocus
                required
                value={newItem}
                onChange={(e)=>{
                    setNewItem(e.target.value)
                }}
            />
            <button className="btn-form"
                type="submit"
                aria-label="Add Item">

                <FaPlus className="add"/>
            </button>
        </form>

    )
}
export default AddItem