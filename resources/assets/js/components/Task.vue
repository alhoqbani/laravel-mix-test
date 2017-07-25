<template>
    <li class="list-group-item">
        <strong v-text="task.body + task.id"></strong>
        <span class="glyphicon" :class="task.completed ? 'glyphicon-ok-circle' : 'glyphicon-remove-circle'"></span>
        <span class="glyphicon glyphicon-remove pull-right" @click="deleteTask(task.id)"></span>
    </li>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "tasks",
        props: ['task'],
        methods: {
            ...mapActions({
                deleteTask: 'deleteTask'
            }),
        },
    }
</script>

<style scoped>
    .glyphicon-remove {
        color: red
    }
</style>

<style scoped>
    .glyphicon-remove {
        color: red
    }
</style>
