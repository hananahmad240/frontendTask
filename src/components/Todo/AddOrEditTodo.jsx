import React from 'react'


import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';



const AddOrEditTodo = ({ todo, update, setTodo, addNewTodo }) => {
    return (
        <>
            <InputText value={todo.title} onChange={(e) => setTodo((prev) => {
                return {
                    ...prev,
                    title: e?.target?.value
                }

            })} placeholder="Enter Name of Todo" className="m-2" />

            <Calendar value={new Date(todo?.dueDate)} onChange={(e) => setTodo((prev) => {
                return {
                    ...prev,
                    dueDate: (e?.target?.value).toString()
                }

            })} />

            <Button onClick={addNewTodo} label={update ? "Update" : "Add"} className="m-2" disabled={(todo.title && todo.dueDate) ? false : true}  />

        </>
    )
}

export default AddOrEditTodo