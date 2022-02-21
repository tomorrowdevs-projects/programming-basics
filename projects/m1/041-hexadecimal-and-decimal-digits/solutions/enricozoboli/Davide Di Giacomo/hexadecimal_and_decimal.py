hexadecimal=("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F")
lower=("a", "b", "c", "d", "e", "f")
integer=("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15")
def int2hex(to_conv):
    new_conv=(integer.index(to_conv))
    print(hexadecimal[new_conv])
    
def hex2int(to_conv):
    new_conv=(hexadecimal.index(to_conv))
    print(integer[new_conv])
    
to_conv=str(input("Insert a parameter to convert in hexadecimal or decimal: "))
if to_conv in integer:
    int2hex(to_conv)
elif to_conv in hexadecimal:
    hex2int(to_conv) 
elif to_conv in lower:
    upper=to_conv.upper()
    hex2int(upper)
else:
    print("Error! Your input isn't a hexadecimal or decimal parameter!")