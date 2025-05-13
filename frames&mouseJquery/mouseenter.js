$(document).ready(function() {
    $("#demoBox").mouseenter(function() {
        $("#status").text("Mouse entered the box!");
    });
    
    $("#demoBox").mouseleave(function() {
        $("#status").text("Mouse left the box!");
    });
});