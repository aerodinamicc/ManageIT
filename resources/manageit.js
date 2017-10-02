$(function () {
    $('form').submit(function () {
        let formID = $(this)[0].id
        let formFieldValues = $(this).serializeArray()
        const log = $('#log')
        let commandResult
        try {
            commandResult = container.commandProcessor.processCommand(formID, formFieldValues)
        }
        catch (ex) {
            commandResult = ex
        }

        log.append(new Date().toLocaleDateString('en-GB') + ': ' + commandResult[0] + '<br />')
        if (commandResult[1].hasOwnProperty('name')) {
            let $employee = $('<div/>', {
                id: `${commandResult[1].name}`,
                class: "droppable",
                text: `${commandResult[1].name} [${commandResult[1].qualificationLevel}]`
            }).droppable({accept: ".draggable"});
            $employee.appendTo("#employees");
            //make it droppable
                $( ".droppable" ).droppable({accept: ".draggable"});

        } else if (commandResult[1].hasOwnProperty('taskName')) {
            let $task = $('<div/>', {
                id: `${commandResult[1].taskName}`,
                class: "draggable",
                text: `${commandResult[1].taskName} [${commandResult[1].taskPriority}]`
            }).draggable({revert:"invalid", helper:"clone"});
            $task.appendTo("#tasks");
            //draggable
            $( ".draggable" ).draggable({revert:"invalid", helper:"clone"});;
        }
        

        $(`#${formID}`)[0].reset()

        return false // avoid to execute the actual submit of the form and page refresh
    })
})