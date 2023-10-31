import {createSlice, nanoid} from '@reduxjs/toolkit'


const initialState = {
    todo : [{id:'1', text:'Hello world'}]
}

export const todoSlice  = createSlice({

    name: 'todo',
    initialState,
    reducers: {
        addTODO : (state, action) =>{
              const todo={
                id: nanoid(),
                text: action.payload
              }

              state.todo.push(todo)
        },
        removeTODO : (state, action)=>{
               state.todo = state.todo.filter((todo)=> todo.id !== action.payload)
               console.log('deleted')
        }
    }

})

export const { addTODO, removeTODO } = todoSlice.actions;

export default todoSlice.reducer;