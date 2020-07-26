$("button").click(function () {
    if (event.target.type == "submit") {
        return;
    }
    let projectName = $(this).attr("id");
    writeToOverlay(projectsArr[projectName]);
