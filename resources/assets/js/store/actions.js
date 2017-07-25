export const addTask = ({commit}, payload) => {
  commit('newTask', payload)
}

export const deleteTask = ({commit}, payload) => {
  commit('deleteTask', payload)
}
