$(document).ready(function () {

    // SELECTORS
    $("#selectorBtn").click(function () {
        $("p:first").css("color", "red");
        $("p:last").css("color", "blue");
        $("p:even").css("background", "yellow");
        $(".parent > p").css("border", "2px solid green");
        $("p:not(.demo)").css("font-weight", "bold");
    });

    // ATTRIBUTES
    $("#changeImg").click(function () {
        $("#img").attr("src", "https://via.placeholder.com/300");
    });

    $("#disableCheck").click(function () {
        $("#check").prop("disabled", true);
    });

    $("#getVal").click(function () {
        $("#output").text($("#input").val());
    });

    // EVENTS
    $("#clickBtn").click(function () {
        $("#eventOutput").text("Clicked");
    });

    $("#dblBtn").dblclick(function () {
        $("#eventOutput").text("Double Clicked");
    });

    $("#keyInput").keyup(function () {
        $("#eventOutput").text("Typing...");
    });

    $("#form").submit(function (e) {
        e.preventDefault();
        $("#eventOutput").text("Form Submitted");
    });

    // STYLE
    $("#colorBtn").click(function () {
        $("#text").css("color", "red");
    });

    $("#addClassBtn").click(function () {
        $("#text").addClass("highlight");
    });

    $("#removeClassBtn").click(function () {
        $("#text").removeClass("highlight");
    });

    $("#toggleBtn").click(function () {
        $("#text").toggleClass("highlight");
    });

    // TRAVERSING
    $("#traverseBtn").click(function () {
        $(".child").parent().css("border", "2px solid red");
        $(".child").parents().css("background", "lightgray");
        $(".parent").children().css("color", "blue");
    });

    // EFFECTS
    $("#showBtn").click(function () {
        $("#box").toggle();
    });

    $("#fadeBtn").click(function () {
        $("#box").fadeToggle();
    });

    $("#slideBtn").click(function () {
        $("#box").slideToggle();
    });

    $("#animateBtn").click(function () {
        $("#box").animate({ left: "200px", opacity: 0.5 });
    });

    $("#stopBtn").click(function () {
        $("#box").stop();
    });

});