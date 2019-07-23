<template>
    <div>
        <div class="form-group">
            <router-link :to="{name: 'createEmployee'}" class="btn btn-success">Create new Employee</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Employees list</div>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th width="100">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="employee, index in employees">
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.address }}</td>

                        <td>{{ employee.email }}</td>
                        <td>
                            <router-link :to="{name: 'editEmployee', params: {id: employee.id}}" class="btn btn-xs btn-default">
                                Edit
                            </router-link>
                            <a href="#"
                               class="btn btn-xs btn-danger"
                               v-on:click="deleteEntry(employee.id, index)">
                                Delete
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                employees: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/employee')
                .then(function (resp) {
                    app.employees = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load employees");
                });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/v1/employees/' + id)
                        .then(function (resp) {
                            app.employees.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete employee");
                        });
                }
            }
        }
    }
</script>
