function calculateAge(){ 
    let currentDate = new Date ();
    console.log(currentDate.getTime())
    let currentMili = currentDate.getTime();
    let birthDate = new Date ('December 26, 2002 00:00:00');
    let birthMili = birthDate.getTime();
    let ageMili = currentMili - birthMili;
   
    let age = ageMili/(1000*60*60*24*365)
    
    document.getElementById("age").innerHTML = age.toFixed(20)+ " years.";
 
    setTimeout(calculateAge, 10);
}

calculateAge()

