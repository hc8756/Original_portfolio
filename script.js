let game1= document.querySelector("#brickBreakerSection");
let game1Pic= document.querySelector("#game1Pic");
game1Pic.src= "images/project_images/brick_breaker.jpg";
game1.onmouseover=animate;
game1.onmouseout= stop;

function animate(){
game1Pic.src= "images/project_images/brick_breaker.gif";
}
function stop(){
game1Pic.src= "images/project_images/brick_breaker.jpg";
}


let art1= document.querySelector("#candyCrushSection");
let art1Pic= document.querySelector("#art1Pic");
art1Pic.src= "images/project_images/candyCrush.jpg";
art1.onmouseover=animate1;
art1.onmouseout= stop1;

function animate1(){
art1Pic.src= "images/project_images/candyCrush.gif";
}
function stop1(){
art1Pic.src= "images/project_images/candyCrush.jpg";
}

//code for contact box

$(document).ready(function(){
    $('.SubmitButton').click(function(event){
        
        console.log("button clicked")
        var sender=$('.sender').val()
        var message=$('.message').val()

        if(sender.length >5 && sender.includes('@') && sender.includes('.')){
            //console.log('Email is valid')
            document.getElementById("emailStatus").innerHTML = ""
        }

        else{
            //console.log('Email is not valid')
            event.preventDefault();
            document.getElementById("emailStatus").innerHTML = "Email is not valid"

        }

        if(message.length>20){
            document.getElementById("messageStatus").innerHTML = ""
        }
        else{
            event.preventDefault();
            document.getElementById("messageStatus").innerHTML = "Message is too short"
        }
    })
})