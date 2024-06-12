#create a function that takes an integer between 0 and 999, returns a string containing the English words for that number.
units_dict={0: "Zero", 1:"One", 2: "Two", 3:"Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven", 
            8:"Eight", 9: "Nine", 10:"Ten", 11: "Eleven", 12: "Twelve"}
decimal_dict={2:"twenty", 3: "thirty", 4: "fourty", 5: "fifty", 6:"sixty", 7: "seventy", 8: "eighty", 9: "ninty"}

def zero_to_99(number):
    translate=[]
    if number <=12:
        for key, value in units_dict.items():
            if number==key:
                translate.append(value)
    elif 13<=number<=19:
        #int to a list to bring last element 
        res = [int(x) for x in str(number)]
        for key, value in units_dict.items():
            if res[1]==key:
                #append teen at last element
                translate.append(value+"teen")
    else:
        #int to a list to bring single element 
        res = [int(x) for x in str(number)]
        for key, value in decimal_dict.items():
            if res[0]==key:
                translate.append(value)
        for key, value in units_dict.items():
            if res[1]==key and res[1]!=0:
                translate.append(value)
    return (" ".join(translate))
                
def main(number):
    if number < 100:
        translate=(zero_to_99(number))
    else:
        translate=[]
        #int to a list to bring single element 
        res = [int(x) for x in str(number)]
        for key, value in units_dict.items():
            if res[0]==key:
                translate.append(value)
                translate.append("hundred")
        number1=str(res[1])+str(res[2])
        number2=int(number1)
        translate1=(zero_to_99(number2))
        translate.append(translate1)
    return (" ".join(translate))
    
number=int(input("Insert a number between 0 and 999: "))
print(main(number))