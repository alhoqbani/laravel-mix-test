export const newTask = (state, payload) => {
    state.tasks.push({
        id: payload.id,
        body: payload,
        completed: payload.completed
    })
}

export const destroyTask = (state, payload) => {
    state.tasks.splice(state.tasks.findIndex(tasks => tasks.id === payload), 1);
}

export const setAllTasks = (state, payload) => {
    state.tasks = payload
}

export const updateTask = (state, task) => {    
    let index = state.tasks.findIndex(tasks => tasks.id === task.id);
    state.tasks[index] = task;
}
