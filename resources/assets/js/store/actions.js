import axios from 'axios';

export const addTask = function ({commit}, payload) {
    commit('newTask', payload)
}

export const deleteTask = ({commit}, payload) => {
    commit('destroyTask', payload)
}

export const fetchAllTasks = ({commit}) => {
    axios.get('http://laravel-mix.app/tasks')
        .then(({data}) => commit('setAllTasks', data));
}