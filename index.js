function distanceFromHqInBlocks(pickupLocation) {
    const hqStreet = 42;
    return Math.abs(pickupLocation - hqStreet);
  }

  function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
  }

  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }

  console.log(distanceFromHqInBlocks(60))
  console.log(distanceFromHqInFeet(60))
  console.log(distanceTravelledInFeet(60,23))