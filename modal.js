$(document).ready(function()
{
    $("button.open").click(function()
    {
        $(".modal").fadeIn(600);
    });

    $("button.close").click(function()
    {
        $(".modal").fadeOut(600);
    });
});
