import React, {useState} from "react"
import {isEmpty} from "lodash"
import shortid from "shortid"

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

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
  
  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr/>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center">Pendiente</h4>
          <ul className="list-group">
            {
              tasks.map((task) => (
                <li className="list-group-item" key={task.id}>
                  <span className="lead">{task.name}</span>
                  <button className="btn btn-danger btn-sm float-right mx-2">
                    <i class="bi bi-trash"></i>
                  </button>
                  <button className="btn btn-warning btn-sm float-right">
                    <i class="bi bi-pencil-square"></i>
                  </button>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="col-3">
          <h4 className="text-center">En Proceso</h4>
          <ul className="list-group">
            <li className="list-group-item">
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
            <li className="list-group-item">
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
            <li className="list-group-item">
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

        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={addTask}>
            <input type="text" className="form-control mb-2" placeholder="Ingrese la tarea..."
              onChange={(text) => setTask(text.target.value)}
              value={task}
            />
            <button className="btn btn-dark btn-block" type="submit">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
