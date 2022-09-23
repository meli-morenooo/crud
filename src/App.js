import React, {useState} from "react"
import {isEmpty, size} from "lodash"
import shortid from "shortid"

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")

  const addTask = (e) => {
    e.preventDefault()
    if (isEmpty(task)){
      console.log("Task empty")
      return
    }

    const newTask = {
      id: shortid.generate(),
      name: task
    }

    setTasks([ ...tasks, newTask ])
    setTask("")
  }

  const saveTask = (e) => {
    e.preventDefault()
    if (isEmpty(task)){
      console.log("Task empty")
      return
    }

    const editedTasks = tasks.map(item => item.id === id ? {id, name: task} : task)
    setTasks(editedTasks)
    setEditMode(false)
    setTask("")
    setId("")
  }

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  const editTask = (theTask) => {
    setTask(theTask.name)
    setEditMode(true)
    setId(theTask.id)
  }
  
  return (
    <div className="container mt-5" style={{height:'100vw'}}>
      <h1>Tareas</h1>
      <hr/>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center">Pendiente</h4>
          {
            size(tasks) == 0 ? (
              <h5 className="text-center lead">No hay tareas.</h5>
            ) : (
              <ul className="list-group">
                {
                  tasks.map((task) => (
                    <li className="list-group-item list-group-item-primary" key={task.id}>
                      <span className="lead">{task.name}</span>
                      <button 
                        className="btn btn-danger btn-sm float-right mx-2"
                        onClick={() => deleteTask(task.id)}
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                      <button 
                        className="btn btn-warning btn-sm float-right"
                        onClick={() => editTask(task)}
                      >
                        <i class="bi bi-pencil-square"></i>
                      </button>
                    </li>
                  ))
                }
              </ul>
            )
          }
        </div>

        <div className="col-3">
          <h4 className="text-center">En Proceso</h4>
          <ul className="list-group">
            <li className="list-group-item list-group-item-danger">
              <span className="lead">Tarea</span>
              <button className="btn btn-danger btn-sm float-right mx-2">
                <i class="bi bi-trash"></i>
              </button>
              <button className="btn btn-warning btn-sm float-right">
                <i class="bi bi-pencil-square"></i>
              </button>
            </li>
          </ul>
        </div>

        <div className="col-3">
          <h4 className="text-center">En Pausa</h4>
          <ul className="list-group">
            <li className="list-group-item list-group-item-warning">
              <span className="lead">Tarea</span>
              <button className="btn btn-danger btn-sm float-right mx-2">
                <i class="bi bi-trash"></i>
              </button>
              <button className="btn btn-warning btn-sm float-right">
                <i class="bi bi-pencil-square"></i>
              </button>
            </li>
          </ul>
        </div>

        <div className="col-3">
          <h4 className="text-center">Realizado</h4>
          <ul className="list-group">
            <li className="list-group-item list-group-item-success">
              <span className="lead">Tarea</span>
              <button className="btn btn-danger btn-sm float-right mx-2">
                <i class="bi bi-trash"></i>
              </button>
              <button className="btn btn-warning btn-sm float-right">
                <i class="bi bi-pencil-square"></i>
              </button>
            </li>
          </ul>
        </div>       
      </div>

      <hr/>
      <div className="col-4">
        <h4 className="text-center">
          {editMode ? "Modificar Tarea" : "Agregar Tarea"}
        </h4>
        <form onSubmit={editMode ? saveTask : addTask}>
          <input type="text" className="form-control mb-2" placeholder="Ingrese la tarea..."
            onChange={(text) => setTask(text.target.value)}
            value={task}
          />
          <button className={editMode ? "btn btn-warning btn-block" : "btn btn-dark btn-block"} type="submit">
            {editMode ? "Guardar" : "Agregar"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
