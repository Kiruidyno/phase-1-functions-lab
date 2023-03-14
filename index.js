// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    const hqLocation=42;
    return Math.abs(hqLocation-pickupLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const feetInBlock = 264;
    return distanceFromHqInBlocks(pickupLocation) * feetInBlock;

}

function distanceTravelledInFeet(start, destination) {
    const feetInBlock = 264;
    return Math.abs(destination - start) * feetInBlock;
  }
  
function calculatesFarePrice(start, destination){
    const distance=distanceTravelledInFeet(start, destination);
    let FarePrice;

    if (distance<=400){
        FarePrice=0;
    }else if (distance<=2000){
        FarePrice=(distance-400)*0.02;

    }else if (distance>2000 && distance<=2500){
        FarePrice=25;
    
    } else {
        FarePrice ='cannot travel that far';

    }
    return FarePrice;


}