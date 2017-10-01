const commandsFunc = function (modelFactory, database) {
    const createEmployeeCommand = {
        get name() {
            return 'createEmployee'
        },
        execute: (parameters) => {
            const name = parameters[0].value
            const password = parameters[1].value
            const qualificationLevel = parameters[2].value
            const canManage = parameters.find(p => p.name == 'canManage') ? parameters[3].value : false
            const available = parameters.find(p => p.name == 'available') ? (parameters.find(p => p.name == 'canManage') ? parameters[4].value : parameters[3].value) : false
            const assignedTasks = []

            const employee = modelFactory.createEmployee(name, password, qualificationLevel, canManage, available, assignedTasks)
            database.employees.push(employee)

            let successMessage = `Eployee with ID: ${database.employees.length - 1} and Name: ${employee.name} was created.`

            return [successMessage, employee]
        }
    }

    const createTaskCommand = {
        get name() {
            return 'createTask'
        },
        execute: (parameters) => {
            const taskName = parameters[0].value
            const taskPriority = parameters[1].value
            const taskDifficulty = parameters[2].value
            const taskStatus = parameters[3].value
            const deadLine = parameters[4].value
            const taskComment = parameters.find(p => p.name == 'taskComment') ? parameters[5].value : ''
            const assignedEmployees = []

            const task = modelFactory.createTask(taskName, taskPriority, taskDifficulty, taskStatus, deadLine, taskComment, assignedEmployees)
            database.tasks.push(task)

            //$task.draggable({revert: "invalid"})
            
            let successMessage = `Task with ID: ${database.tasks.length - 1} and Name: ${task.taskName} was created.`

            return [successMessage, task]
        }
    }

    return [createEmployeeCommand, createTaskCommand]
}