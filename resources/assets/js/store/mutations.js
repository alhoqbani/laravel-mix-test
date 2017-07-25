export const newTask = (state, payload) => {
  state.tasks.push(payload)
}

export const deleteTask = (state, payload) => {
  state.tasks.splice(payload, 1)
}
