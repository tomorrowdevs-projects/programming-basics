const conversionTwoYears = 10.5;
const conversionBeforeTwoYears = 10.5 / 2;

// enter human year to convert
const enterConvertYear = +prompt('Please enter human years to convert:')
const addConversionAfterTwoYears = (enterConvertYear * 4) + conversionTwoYears;
// conversion result for years less than 0
if(enterConvertYear < 0){
    alert('Error: The age entered is not valid')
}
// conversion result for years less than 2
else if(enterConvertYear === 1){
    alert(`${enterConvertYear} human years equals ${conversionBeforeTwoYears} dog years`)
}
// conversion result for years equals than 2
else if(enterConvertYear === 2){
    alert(`${enterConvertYear} human years equals ${conversionTwoYears} dog years`)
}
// conversion result for years more than 2
else{
    alert(`${enterConvertYear} human years equals ${addConversionAfterTwoYears} dog years`)
}