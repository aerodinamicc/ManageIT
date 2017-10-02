$(document).ready(function () {
    $("#createEmployee").click(function () {
        $("#createEmployeeForm").animate({
            height: 'toggle'
        })
    })

    $("#createTask").click(function () {
        $("#createTaskForm").animate({
            height: 'toggle'
        })
    })
})