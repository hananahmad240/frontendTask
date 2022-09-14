import React from 'react'

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext'

const AddOrEdirListItem = ({ listName, update, setListName, addNewList }) => {


    return (
        <>
            <InputText value={listName} onChange={(e) => setListName(e?.target?.value)} placeholder="Enter Name of list" className="m-2" />
            <Button onClick={addNewList} label={update ? "Update" : "Add"} className="m-2" disabled={listName ? false : true} />
        </>
    )
}

export default AddOrEdirListItem