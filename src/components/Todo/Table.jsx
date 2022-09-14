import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button'


const Table = ({ todos, editTodoEvent, deleteTodoEvent, updateTodoItemAsMakeDone }) => {



    const editTodoBodyTemplate = (data) => {
        return (
            <Button icon="pi pi-user-edit " className="p-2 cursor-pointer p-button-primary p-button-outlined mr-1 btn-sm"
                onClick={() => editTodoEvent(data?.id)} />
        )
    }

    const deleteTodoBodyTemplate = (data) => {
        return (
            <Button icon="pi pi-times" className="p-2 cursor-pointer p-button-primary p-button-outlined mr-1 btn-sm"
                onClick={() => deleteTodoEvent(data.id)}
            />
        )
    }


    return (
        <DataTable
            value={todos ?? []}
            responsiveLayout="scroll"
            className="p-datatable-gridlines"
            selectionMode="single"
        >
            <Column field="title" header="Title"></Column>
            <Column field="dueDate" header="Date"></Column>
            <Column field="" header="MarkAsDone" body={(data) => updateTodoItemAsMakeDone(data.id)} ></Column>

            <Column field="" header="Edit" body={editTodoBodyTemplate}></Column>
            <Column field="" header="Delete" body={deleteTodoBodyTemplate} ></Column>


        </DataTable>
    )
}

export default Table