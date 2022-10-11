import { ADD_TASK, REMOVE_TASK, EDIT_TASK, CHANGE_EDITOR,
  RECICLE_ITEM, REMOVE_TRASH, CLEAN_TRASH, LOGIN} from "./actionTypes";

// TODO ACTIONS 

export const actionAddTask = (task) => ({
  type: ADD_TASK,
  task
})

export const actionRemoveTask = (task) => ({
  type: REMOVE_TASK,
  task
})

export const actionEditTask = (todo) => ({
  type: EDIT_TASK,
  todo
})

export const actionChnageEditor = (id) => ({
  type: CHANGE_EDITOR,
  id
})

export const actionCleanTrash = () => ({
  type: CLEAN_TRASH,
})

export const actionRemoveTaskTrash = (task) => ({
  type: REMOVE_TRASH,
  task
}); 

export const actionRecicleItem = (task) => ({
  type: RECICLE_ITEM,
  task
})

// LOGIN ACTIONS

export const actionLogin = (user) => ({
  type: LOGIN,
  user
})

