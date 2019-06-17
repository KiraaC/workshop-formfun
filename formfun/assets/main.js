// page info pending front end team


$(document).ready(function() {
    // let mortyArray = []
    var queryUrl = "http://loremricksum.com/?paragraphs=1&words=4"

    $("#mortyBtn").on("click", function(event){
        event.preventDefault()
  var text = $("").val()
  mortyArray.push(text)

  
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) {
        // console.log()
        $("#quote-text").html(
            `<p>${}</p>`
        )
    })

})