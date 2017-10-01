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
            $('<div class="employeeClass">', {
                id: `${commandResult[1].name}`,
                text: `${commandResult[1].name} [${commandResult[1].qualificationLevel}]`
            },'<div/>').appendTo("#employees");
            /*$( function() {
                $( ".employeeClass" ).droppable({accept: ".taskClass"});
              } );*/
        } else if (commandResult[1].hasOwnProperty('taskName')) {
            $('<div class="taskClass">', {
                id: `${commandResult[1].taskName}`,
                text: `${commandResult[1].taskName} [${commandResult[1].taskPriority}]`
            }, '<div/>').appendTo("#tasks");
            /*$( function() {
                $( ".taskClass" ).draggable({revert:"invalid",
                                            helper:"clone"});
              } );*/
        }

        $(`#${formID}`)[0].reset()

        return false // avoid to execute the actual submit of the form and page refresh
    })
})