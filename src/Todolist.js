import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Listitem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Listitemtext from '@material-ui/core/ListItemText'

function todolist(props){
    return(
        <Paper>
            <List>
            {props.todos.map(todo=>(
                <>
                <Listitem>
                    <Listitemtext>
                    {todo.task}
                    </Listitemtext>
                    </Listitem>
                    <Divider/>
                    </>
                                ))}
            </List>
        </Paper>
    )
}

export default todolist