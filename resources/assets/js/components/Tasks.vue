<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="form-group">
                    <input class="form-control" placeholder="add new task, press enter" type="text" v-model="task.body" @keyup.enter="pushTask">
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading"><h4>Tasks</h4></div>

                    <ul class="list-group">
                        <task v-for="task in tasks" :task="task" :key="task.id"></task>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Task from './Task.vue';

    export default {
        name: "tasks",
        components : {
            Task
        },
        data: function () {
            return {
                task: {},
            }
        },
        computed: {
            ...mapGetters({
                tasks: 'getTasks'
            })
        },
        methods: {
            ...mapActions({
                addTask: 'addTask',
                fetchAllTasks: 'fetchAllTasks'
            }),
            pushTask: function () {
                this.addTask(this.task.body);
                this.task.body = null;
            }
        },
        created() {
            this.fetchAllTasks();
        }
    }
</script>