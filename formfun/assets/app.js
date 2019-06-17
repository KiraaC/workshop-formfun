// text id="todoText" 
// button id="todoBtn"
$(document).ready(function() {
    let todoArray = []
    var queryUrl = "http://quotes.rest/qod.json?category=inspire"


    $("#todoBtn").on("click", function(event) {
        event.preventDefault()
        var text = $("#todoText").val()
        todoArray.push(text)
        // console.log(todoArray)
        // $("#todoGroup").empty()
        // for (let i = 0; i < todoArray.length; i++) {
        //     $("#todoGroup").append(
        //         `<li class="list-group-item">${todoArray[i]}</li>`
        //     )
        // }
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response.contents.quotes[0].quote)
            $("#quote-text").html(
                `<p>${response.contents.quotes[0].quote}</p>`
            )
        })
    })
})