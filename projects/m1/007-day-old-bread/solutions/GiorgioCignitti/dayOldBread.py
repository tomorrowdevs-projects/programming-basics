amount=int(input("number of loaves:  "))


def dayOldBreadCalc(number):
  loaves = 3.49
  oldLoaves = 2.94
  fullPrice = number * loaves
  discountedPrice = number * oldLoaves
  total = fullPrice + discountedPrice
  return f"full price is = {fullPrice}\n discounted price is = {discountedPrice}\n the total is = {total}"

print(dayOldBreadCalc(amount))