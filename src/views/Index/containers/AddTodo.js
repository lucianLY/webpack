import React from "react"
import { connect } from "react-redux"
import { addTodo } from "../../../actions"


const AddTodo = ({ dispatch }) =>{

    let input
    return (
        <div>
            <form>
                <input ref={ node => input = node}/>
                <button type="submit" onClick={
                    e=>{
                        console.log(e)
                        dispatch(addTodo(input.value))
                    }
                }>Add Todo</button>
            </form>
            
        </div>
    )

}

export default connect()(AddTodo)