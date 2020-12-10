
 $(document).ready(function() {
    // currentDay
    $("#currentDay").text(dayjs().format('dddd, MMM D'))
    console.log(dayjs().format('h'))

    function time (){
        var dayjshour = dayjs().format("h")
        if (dayjshour < 5 ) {
            .past = true 
        }
    }

 })