function refoundConteiner() {
  const deposit_SmallConteiner = 0.10;
  const deposit_BigConteiner = 0.25;
  var SmallConteiner = document.getElementById("id-SmallConteiner").value;
  var BigConteiner = document.getElementById("id-BigConteiner").value;
  let refoundTot = SmallConteiner * deposit_SmallConteiner + BigConteiner * deposit_BigConteiner;
  document.getElementById( "id-roomArea" ).innerHTML = `The total reimbursement of the deposited containers is $ 
   ${refoundTot.toFixed(2)}`;
}
refoundConteiner();
