const container = (function () {
    const modelFactory = modelFactoryFunc()
    const database = createDatabase()
    const commands = commandsFunc(modelFactory, database)
    const commandProcessor = commandProcessorFunc(commands)
    
    return {
        commandProcessor,
        database
        //TODO: hide the database!!!!!!!!!!!!!!!!!!!!!
    }
}())