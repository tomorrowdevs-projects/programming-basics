function refoundConteiner() {
  const deposit_smallConteiner = 0.1;
  const deposit_bigConteiner = 0.25;
  var smallConteiner = document.getElementById("id-SmallConteiner").value;
  var bigConteiner = document.getElementById("id-BigConteiner").value;
  let refoundTot =
    smallConteiner * deposit_smallConteiner +
    bigConteiner * deposit_bigConteiner;
  document.getElementById(
    "id-roomArea"
  ).innerHTML = `The total reimbursement of the deposited containers is $ 
   ${refoundTot.toFixed(2)}`;
}
refoundConteiner();
