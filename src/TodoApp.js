import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import grid from '@material-ui/core/Grid'
import TodoList from './Todolist'



function ToDoApp(){
    const intialtodos=[
        {id:1, task:"cleaning", complete: false}
        ,{id:2, task:"cleaning1", complete: true}
        ,{id:3, task:"cleaning2", complete: false}

    ]
    const[todos, setTodos] = useState(intialtodos)

    return (
        <Paper
        style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
        >
            <AppBar color='primary' position='static' style={{height: '64px'}}>
                <Toolbar>
                    <Typography color='inherit'>Todos with hooks</Typography>
                </Toolbar>
            </AppBar>
            <TodoList todos ={todos}/>
        </Paper>
    )
}

export default ToDoApp