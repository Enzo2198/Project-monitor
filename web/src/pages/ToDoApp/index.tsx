import {Grid, Box, Button, IconButton, Paper, TextField } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {RefObject, useReducer, useRef} from "react";
import {reducer, Todo, State} from './util.ts'
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import EditIcon from '@mui/icons-material/Edit';


export default function () {
  const [state, dispatch] = useReducer(reducer, {
    todos: [
      {id: 1, name: "test 1234", status: 'done'}
    ],
    job: '',
    selectedTodo: null
  })

  const inputRef: RefObject<HTMLInputElement | null> = useRef(null)

  const onClick = () => {
    console.log(state)
    state.selectedTodo?.id ? dispatch({type: 'updateTodos'}) : dispatch({type: 'addNewTodos'})
    // @ts-ignore
    inputRef.current?.querySelector('input')?.focus()
  }

  const onUpdate = (id: number) => {
    const todo: Todo = state.todos.find((t: Todo) => t.id === id)
    dispatch({type: 'jobUpdate', value: todo.name})
    dispatch({type: 'selectedTodoUpdate', value: todo})
  }

  const onDelete = (id: number) => {

  }

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <TextField
        ref={inputRef}
        fullWidth
        label="New Task"
        value={state.job}
        onChange={(e) => dispatch({type: 'jobUpdate', value: e.target.value})}
        onKeyDown={(e) => e.key === 'Enter'}
      />
      <Button
        sx={{ mt: 2 }}
        variant="contained"
        fullWidth
        onClick={onClick}
      >
        Save Todo
      </Button>

      <>
        {state.todos.map((todo, index) => (
          <Grid container spacing={2} alignItems="center" key={todo.id || index}>
            <Grid size={1}>
              <Box padding={1}>
                <Typography variant="body2">{todo.id}</Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box padding={1}>
                <Typography variant="body1">{todo.name}</Typography>
              </Box>
            </Grid>
            <Grid size={2}>
              <Box padding={1}>
                <Typography variant="body2" color={todo.status === 'done' ? 'green' : 'text.secondary'}>
                  {todo.status}
                </Typography>
              </Box>
            </Grid>
            <Grid size={1}>
              <IconButton edge="end" aria-label="delete" color="success" onClick={() => onUpdate(todo.id)}>
                <EditIcon />
              </IconButton>
            </Grid>
            <Grid size={1}>
              <IconButton edge="end" aria-label="delete" color="error" onClick={() => onDelete(todo.id)}>
                <DeleteOutlineIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </>

      {/*<List sx={{ mt: 2 }}>*/}
      {/*  {state.todos.map((todo, index) => (*/}
      {/*    <ListItem*/}
      {/*      key={index}*/}
      {/*      secondaryAction={*/}
      {/*        <IconButton edge="end" aria-label="delete" >*/}
      {/*          <DeleteOutlineIcon />*/}
      {/*        </IconButton>*/}
      {/*      }*/}
      {/*    >*/}
      {/*      <ListItemText primary={todo.name} />*/}
      {/*    </ListItem>*/}
      {/*  ))}*/}
      {/*</List>*/}
    </Paper>
  )
}