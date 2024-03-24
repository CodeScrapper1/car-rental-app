export const getDistance = (lat1, long1, lat2, long2) => {
  const radius = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLong = deg2rad(long2 - long1);

  const result =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);

  const c = 2 * Math.atan2(Math.sqrt(result), Math.sqrt(1 - result));
  const distance = radius * c;
  return distance;
};

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
