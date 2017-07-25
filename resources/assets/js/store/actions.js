export const addTask = function({commit}, payload) {
    commit('newTask', payload)
}

export const deleteTask = ({commit}, payload) => {
  commit('destroyTask', payload)
}
