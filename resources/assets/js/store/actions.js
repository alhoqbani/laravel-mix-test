import axios from 'axios';

export const addTask = function ({commit}, payload) {

    axios.post('http://laravel-mix.app/tasks', {'body': payload})
        .then(({data}) => commit('newTask', data));

}

export const deleteTask = ({commit}, payload) => {
    axios.delete('http://laravel-mix.app/tasks/' + payload)
        .then(({data}) => console.log(data));

    commit('destroyTask', payload)
}

export const fetchAllTasks = ({commit}) => {
    axios.get('http://laravel-mix.app/tasks')
        .then(({data}) => commit('setAllTasks', data));
}

export const toggleStatus = function ({commit}, taskId) {

    axios.put('http://laravel-mix.app/tasks/' + taskId)
        .then(({data}) => commit('updateTask', data));
}
