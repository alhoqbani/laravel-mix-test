export const newTask = (state, payload) => {
  state.tasks.push({id:0, body: payload})
}

export const destroyTask = (state, payload) => {
    state.tasks.splice(state.tasks.findIndex(tasks => tasks.id === payload), 1);
}
