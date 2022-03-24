
    let hr = 0;
    let minutes = 0;
    let seconds = 0;
    // let milliseconds = 0;

    let timer = 0;

        //Define vars to hold display value
            // let displayMilliseconds = 0;
            let displaySeconds = 0;
            let displayMinutes = 0;
            let displayHours = 0;

            let interval = null;

            let timestamp = null;


            

        //Update the timer

            function stopWatch() {
                seconds++;
              

                    if (seconds / 60 ===1){
                        seconds = 0;
                        minutes++;

                        if (minutes / 60 ===1){
                            minutes = 0;
                            hr++;
                        }
                    
                }
                
                document.getElementById("digits").style.fontSize = "40px";

            // Dispaly double 00s all the time
           

            //For seconds

                if(seconds < 10){
                    displaySeconds = "0" + seconds;
                }

                else{
                    displaySeconds = seconds;
                }

            //For minutes

                if(minutes < 10){
                    displayMinutes = "0" + minutes;
                }

                else{
                    displayMinutes = minutes;
                }

            //For hours

                if(hr < 10){
                    displayHours = "0" + hr;
                }

                else{
                    displayHours = hr;
                }

                
            
                 document.getElementById("digits").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds ;
                 timestamp = displayHours + ":" + displayMinutes + ":" + displaySeconds;
            }



        function start(){

            interval = window.setInterval(stopWatch,1000);
            
             setTimeout(stop,10000);
                
        }

        
        function stop(){
            clearInterval(interval);
            console.log(timestamp);
            add(5,10);
        }

        
        

        function reset() {

            window.clearInterval(interval);
            milliseconds = 0;
            seconds = 0;
            minutes = 0;
            hr = 0;
            document.getElementById("digits").innerHTML = "00:00:00";
}


function add(x, y){
    
    var addvalue ;


     addvalue = x+y;
     console.log(addvalue);
}
