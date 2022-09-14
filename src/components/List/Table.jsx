import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button'


const Table = ({ lists, selectedListItem, editListEvent, deleteListEvent, setSelectedListItem }) => {



    const editListBodyTemplate = (data) => {
        return (
            <Button icon="pi pi-user-edit " className="p-2 cursor-pointer p-button-primary p-button-outlined mr-1 btn-sm"
                onClick={() => editListEvent(data?.id)} />
        )
    }

    const deleteListBodyTemplate = (data) => {
        return (
            <Button icon="pi pi-times" className="p-2 cursor-pointer p-button-primary p-button-outlined mr-1 btn-sm"
                onClick={() => deleteListEvent(data.id)}
            />
        )
    }


    return (
        <DataTable
            value={lists ?? []}
            responsiveLayout="scroll"
            className="p-datatable-gridlines"
            selectionMode="single"
            selection={selectedListItem}
            onSelectionChange={e => setSelectedListItem(e.value)}
        >
            <Column field="name" header="Name"></Column>
            <Column field="" header="Edit" body={editListBodyTemplate}></Column>
            <Column field="" header="Delete" body={deleteListBodyTemplate} ></Column>


        </DataTable>
    )
}

export default Table