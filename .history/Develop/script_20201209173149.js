
 $(document).ready(function() {
    // currentDay
    $("#currentDay").text(dayjs().format('dddd, MMM D'))
    console.log('current hour',dayjs().format('h'))

    function time (){
        var dayjshour = dayjs().format("h")
        if (dayjshour < 5 ) {
        
        }

        $('textarea').each(function(){

            if()

            console.log('this', $(this).attr('id'))
        }) 


    }

    time();

 })