function reactStatus(){
    $( ".MonkeyHeroImage" ).attr("src", "./static/3.png")
    var el = parseInt($('#TotalCost').text())
    $('#TotalCost').text(el+2)
    $( "*" ).css("background-color", "#FF0E0E")
}

function reactStatusOff(){
    $( ".MonkeyHeroImage" ).attr("src", "./static/1.png")
    $( "*" ).css("background-color", "#9D00FF")
}

function monkeyToCoverEars(){
    $( ".MonkeyHeroImage" ).attr("src", "./static/2.png")    
}

function reactToSwear(){
    reactStatus()
    var audio = new Audio('static/cash_register.wav');
    audio.play();
    setTimeout(reactStatusOff, 1500)
}


// #FF0E0E