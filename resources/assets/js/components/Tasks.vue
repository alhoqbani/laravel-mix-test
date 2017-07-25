<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Tasks</div>

                    <ul class="list-group">
                        <li class="list-group-item" v-for="task in tasks" v-text="task"></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tasks",
        data: function () {
            return {

            }
        },
        computed: {
            tasks: function () {
                return this.$store.getters.tasks;
            }
        }


    }
</script>
