import { configureStore, createSlice } from "@reduxjs/toolkit";


const arr = JSON.parse(localStorage.getItem('list')) || []
const mainSLice = createSlice({
    name: 'todo', 
    initialState: {
        todos: arr
    },
    reducers: {
        addTodo : (state, action) => {
            state.todos.push({
                title: action.payload,
                status: false,
                id: Date.now()
            });
        },
        deleteTodo: (state, action) => {
            const newArr = state.todos.filter((item) =>item.id !== action.payload)
            state.todos = newArr
        },
        statusChangeTodo: (state, action) => {
            const newTodosArr = state.todos.map((item) => {
                if (item.id === action.payload) {
                  return { ...item, status: !item.status};
                }
                return item;
              });
              state.todos = newTodosArr
        },
        InputChangeTodo: (state, action) => {
            const newTodosArr2 = state.todos.map((item) => {
                if (item.id === action.payload.id) {
                    return {...item, title: action.payload.text}
                };
                return item
            })
            state.todos = newTodosArr2
        },
    }
})


export const { addTodo, deleteTodo, statusChangeTodo, InputChangeTodo } = mainSLice.actions


const store = configureStore({
    reducer: mainSLice.reducer,
})


store.subscribe(() => {
    const state = store.getState()
    localStorage.setItem('list', JSON.stringify(state.todos))
})


export default store