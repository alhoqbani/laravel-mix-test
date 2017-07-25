<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="form-group">
                    <input class="form-control" placeholder="add new task, press enter" type="text" v-model="task" @keyup.enter="pushTask">
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading"><h4>Tasks</h4></div>

                    <ul class="list-group">
                        <li class="list-group-item" v-for="(task, index) in tasks">
                            <strong v-text="task"></strong>
                            <span class="glyphicon glyphicon-remove pull-right" @click="deleteTask(index)"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "tasks",
        data: function () {
            return {
                task: '',
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
                deleteTask: 'deleteTask'
            }),
            pushTask: function () {
                this.addTask(this.task);
                this.task = null;
            }
        }


    }
</script>

<style scoped>
    .glyphicon-remove {
        color:red
    }
</style>
