$(document).ready(function() {
    // Selecting paragraphs
    $("p").css("color", "blue");
    
    // Selecting button
    $("button").click(function() {
        $(this).css("background-color", "yellow");
    });
    
    // Selecting div
    $("div").mouseenter(function() {
        $(this).css("background-color", "lightgreen");
    }).mouseleave(function() {
        $(this).css("background-color", "white");
    });
    
    // Selecting list items
    $("li").hover(function() {
        $(this).css("font-weight", "bold");
    }, function() {
        $(this).css("font-weight", "normal");
    });
});