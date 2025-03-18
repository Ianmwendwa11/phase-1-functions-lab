function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(pickupLocation) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(destination - start) * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
        return 25; 
    } else {
        return "cannot travel that far";
    }
}
