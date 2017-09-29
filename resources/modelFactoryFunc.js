const modelFactoryFunc = function () {
    const employeeToString = () => (
        `Employee =========<br />
        Name: ${this.name}. Manager: ${this.canManage}<br />
        Qualification: ${this.qualificationLevel}. Available: ${this.available}<br />
        Assigned Tasks:<br />
        ${this.assignedTasks.forEach(t => t.taskName + '<br />')}`
    )

    const createEmployee = (name, password, canManage, qualificationLevel, available, assignedTasks) => ({
        get name() {
            return name
        },
        get password() {
            return password
        },
        get canManage() {
            return canManage
        },
        get qualificationLevel() {
            return qualificationLevel
        },
        get available() {
            return available
        },
        get assignedTasks() {
            return assignedTasks
        },
        toString: employeeToString
    })

    const taskToString = () => (
        `Task =========<br />
        Name: ${this.taskName}<br />
        Priority: ${this.taskPriority}. Difficulty: ${this.taskDifficulty}<br />
        Status: ${this.taskStatus}. Dead line: ${this.deadLine}<br />
        Comment: ${this.taskComment}<br />
        Assigned to:<br />
        ${this.assignedEmployees.forEach(e => e.toString() + '<br />')}`
    )

    const createTask = (taskName, taskPriority, taskDifficulty, taskStatus, deadLine, taskComment, assignedEmployees) => ({
        get taskName() {
            return taskName
        },
        get taskPriority() {
            return taskPriority
        },
        get taskDifficulty() {
            return taskDifficulty
        },
        get taskStatus() {
            return taskStatus
        },
        get deadLine() {
            return deadLine
        },
        get taskComment() {
            return taskComment
        },
        get assignedEmployees() {
            return assignedEmployees
        },
        toString: taskToString
    })

    return {
        createEmployee,
        createTask
    }
}