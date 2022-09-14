import React, { useEffect } from 'react'


import AddOrEditTodo from './AddOrEditTodo';
import Table from './Table';

import { deletTodoById, getTodoById, updateTodoMarkAsDone, createTodo, updateTodoById } from '../../store/action/todo'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash';

const Todo = () => {
    const [todos, setTodos] = React.useState([]);
    // const [selectedTodoItem, setSelectedTodoItem] = React.useState(null);
    const [update, setUpdate] = React.useState(false)

    const [todo, setTodo] = React.useState({ title: "", dueDate: "" })
    const State = useSelector(state => state.todo)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     // dispatch(
    //     //   getAllLists()
    //     // )
    // }, [])

    useEffect(() => {
        setTodos(prev => {
            return [...State.todos.todo ?? []]
        })

    }, [State.todos])




    const addNewTodo = () => {
        if (!_.isEmpty(State.todos) && !update) {
            dispatch(
                createTodo({
                    id: State.todos.id,
                    data: {
                        title: todo.title,
                        dueDate: new Date(todo.dueDate).toISOString()
                    }
                })
            )

            setTodos((prev) => {
                return [...State.todos.todo ?? []]
            })
        } else if (update) {
            dispatch(
                updateTodoById(
                    {
                        listId: State.todos.id,
                        todoId: State.todo.id,
                        data: {
                            title: todo.title,
                            dueDate: new Date(todo.dueDate).toISOString()
                        }
                    }
                )
            )
            setTodos((prev) => {
                return [...State.todos.todo ?? []]
            })
        }
        setUpdate(false)

        setTodo({ title: "", dueDate: "" })
    }


    const editTodoEvent = (id) => {

        dispatch(
            getTodoById({
                listId: State.todos.id,
                todoId: id
            })
        )
        const data = todos.find((x) => x.id == id);
        setTodo({
            title: data.title,
            dueDate: data.dueDate
        })

        setUpdate(true)

    }

    const deleteTodoEvent = (id) => {
        dispatch(
            deletTodoById({
                listId: State.todos.id,
                todoId: id
            })
        )
        setTodos((prev) => prev.filter((x) => x.id !== id))

    }

    const updateTodoItemAsMakeDone = (id) => {
        // console.log(id);
        // dispatch(
        //     updateTodoMarkAsDone(
        //         {
        //             listId: State.todos.id,
        //             todoId: id
        //         }
        //     )
        // )
    }


    console.log("State", State);
    return (
        <>
            <AddOrEditTodo todo={todo} setTodo={setTodo} addNewTodo={addNewTodo} update={update} />
            {
                todos.length > 0 && <Table todos={todos} editTodoEvent={editTodoEvent} deleteTodoEvent={deleteTodoEvent}
                    updateTodoItemAsMakeDone={updateTodoItemAsMakeDone} />
            }
        </>
    )
}

export default Todo