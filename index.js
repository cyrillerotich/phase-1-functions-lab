function distanceFromHqInBlocks(block){
    return Math.abs(block-42)
}
function   distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block)*264;
}
function  distanceTravelledInFeet(startblock,endblock){
    return Math.abs(startblock-endblock)*264
}
function calculatesFarePrice(distance){
   if(distance < 400){
    return `free`
   }
   else if(distance >400 && distance <= 2000){
    return (distance-400)*0.02;
   } 
   else if(distance>2000 && distance <=2500){
    return 25;
   }
   else if(distance> 2500){
   return `does not allow rides over 2500 feet`;
   }
}


