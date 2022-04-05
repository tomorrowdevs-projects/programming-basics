function values() {
  value = prompt ("value?");
  if (value === "") return 0;
  value = +value + +values();
  return value
}
 
alert(values())