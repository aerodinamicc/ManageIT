const commandProcessorFunc = function (commands) {
    const processCommand = function (commandSource, formData) {
        const formExtension = 'Form'
        const commandName = commandSource.replace(formExtension, '')
        const parameters = formData
        const command = commands.find((command) => command.name === commandName)
        if (command === undefined) {
            throw `Command ${commandName} is not defined!`
        }

        return command.execute(parameters)
    }

    return {
        processCommand
    }
}