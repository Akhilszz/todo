import { useState } from "react"

import './ToDo.css'

export default function ToDo() {

    const [item, setItem] = useState("")

    const [add, setAdd] = useState([])

    const [edit, setEdit] = useState(null)

    const [editText, setEditText] = useState()


    const Display = () => {
        if (edit !== null) {

            const EditTask = [...add]
            EditTask[edit] = editText
            setAdd(EditTask)
            setEdit(null)

        }
        else {
            setAdd([...add, item])
            setItem("")
        }
    }

    function Delete(index) {
        const deleteTask = [...add]
        deleteTask.splice(index, 1)
        setAdd(deleteTask)
    }

    function Edit(index) {

        setEdit(index)

        setEditText(add[index])

    }

    return (
        <div className="card">
            <div className="header">
                <div className="text">
                    <h2>Get Things Done</h2>
                </div>
                <div className="input">
                    <input className="inp" type="text" value={item} onChange={(e) => setItem(e.target.value)}
                    placeholder="Enter Task"/>
                    <button className="btn-1" onClick={Display}>Add Task</button>
                </div>
            </div>
            <div className="bottom">
                <ul>
                    {
                        add.map((data, index) => {
                            return (
                                <>

                                    <li key={index}>
                                        {edit !== null && edit === index ? (
                                            <>
                                                <div className="out">
                                                    <input className="inp-op" type="text" value={editText}
                                                        onChange={(e) => setEditText(e.target.value)} />
                                                    <button className="btn-3" onClick={Display} >Save</button>
                                                </div>

                                            </>
                                        ) : (
                                            <>
                                                <div className="out">
                                                    <input value={data} readOnly className="inp-op" />
                                                    <button className="btn-2" onClick={() => Delete(index)}>Delete</button>
                                                    <button className="btn-2" onClick={() => Edit(index)}>Edit</button>
                                                </div>

                                            </>
                                        )}

                                    </li>
                                </>
                            )

                        }
                        )
                    }

                </ul>
            </div>
        </div>
    )
}