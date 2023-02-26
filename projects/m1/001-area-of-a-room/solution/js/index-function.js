function RoomArea()  {
  let roomLength = document.getElementById("id-roomLength").value;
  let roomWidth = document.getElementById("id-roomWidth").value;
  let roomArea = roomLength * roomWidth;
  document.getElementById( "id-roomArea" ).innerHTML = `The area of the room is ${roomArea.toFixed(2)} square meters`;
}
RoomArea();
