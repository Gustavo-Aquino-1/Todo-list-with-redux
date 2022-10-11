import { ADD_TASK, REMOVE_TASK, EDIT_TASK, CHANGE_EDITOR,
  RECICLE_ITEM, REMOVE_TRASH, CLEAN_TRASH } from "../actions/actionTypes";

const INITIAL_STATE = {
  tasks: [],
  trash: [],
  editor: false,
  idToEdit: 0,
}

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks,action.task] }
    case REMOVE_TASK:
      return { 
        ...state,
        tasks: state.tasks.filter((e) => e.id !== action.task.id),
        trash: [...state.trash, action.task]
      }
    case EDIT_TASK:
      return { ...state, tasks: action.todo }
    case CHANGE_EDITOR:
      return {
        ...state,
        editor: !state.editor,
        idToEdit: action.id
      }
    case RECICLE_ITEM:
      return {
        ...state,
        tasks: [...state.tasks, action.task ],
        trash: state.trash.filter((e) => e.id !== action.task.id )
      }
    case REMOVE_TRASH:
      return {
        ...state,
        trash: state.trash.filter((e) => e.id !== action.task.id )
      }
    case CLEAN_TRASH:
      return { ...state, trash: [] }
    default:
      return state;
  }
}

export default todoReducer;
