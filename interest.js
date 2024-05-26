
function answer() {

    var amount = parseInt (document.getElementById ('amount').value)
        console.log (amount) 
    
    var rate = parseInt (document.getElementById('rate').value)
        console.log (rate)

    var tax = parseInt (document.getElementById('tax').value)
        console.log (tax) 

    var time = parseInt (document.getElementById('time').value)
        console.log (time) 

    //here is the formulars
    var interest = (amount * rate * time)/100
    var tax = (amount * 0.02) 
    var revenue = (interest - tax) 
    var total_value = (interest + amount)


    document.getElementById('output_1').innerHTML= amount
    document.getElementById('output_2').innerHTML= interest
    document.getElementById('output_3').innerHTML= tax
    document.getElementById('output_4').innerHTML= revenue
    document.getElementById('output_5').innerHTML= total_value

}




 
























