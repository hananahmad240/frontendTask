import React, { useEffect } from 'react'
import _ from 'lodash'


import { getAllLists, createList, getListById, updateListById, deletListById } from '../../store/action/list';
import {getAllTodosByListId} from '../../store/action/todo'
import { useDispatch, useSelector } from 'react-redux'
import Table from './Table';
import AddOrEdirListItem from './AddOrEdirListItem';

const List = () => {
  const [lists, setLists] = React.useState([])
  const [listName, setListName] = React.useState("")
  const [selectedListItem, setSelectedListItem] = React.useState(null);
  const [update, setUpdate] = React.useState(false)


  const dispatch = useDispatch()
  const State = useSelector(state => state.list)

  useEffect(() => {
    dispatch(
      getAllLists()
    )
  }, [])

  useEffect(() => {
    if (State.lists.length > 0) {
      setLists(prev => {
        return [...State.lists]
      })
    }
  }, [State.lists])


  const addNewList = () => {

    if (_.isEmpty(State.list) && !update) {
      dispatch(
        createList({
          data: {
            name: listName
          }
        })
      )

      setLists((prev) => {
        return [...State.lists]
      })
    } else {
      dispatch(
        updateListById(
          {
            id: State.list.id,
            data: {
              name: listName
            }
          }
        )
      )
      setLists((prev) => {
        return [...State.lists]
      })
    }
    setUpdate(false)

    setListName("")
  }



  const editListEvent = (id) => {

    dispatch(
      getListById({ id })
    )

    const data = lists.find((x) => x.id == id);
    setListName(data.name)
    setUpdate(true)

  }

  const deleteListEvent = (id) => {
    dispatch(deletListById({ id }))
    setLists((prev) => prev.filter((x) => x.id !== id))

  }


  const setTodoOfSelectedListItem = (data) => {
    console.log("data", data);
    dispatch(
      getAllTodosByListId({
        listId:data.id
      })
    )
  }

  console.log("State", State);

  return (
    <div className="list">

      <AddOrEdirListItem listName={listName} setListName={setListName} addNewList={addNewList} update={update} />


      {
        lists.length > 0 && (
          <Table lists={lists} editListEvent={editListEvent} deleteListEvent={deleteListEvent} selectedListItem={selectedListItem} setSelectedListItem={setTodoOfSelectedListItem} />
        )
      }
    </div>
  )
}

export default List