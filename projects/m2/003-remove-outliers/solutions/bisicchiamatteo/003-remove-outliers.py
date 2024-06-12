

def main():
    global list_numbers
    list_numbers=[]
    #punto 1
    while True:
         number=input("insert the number : ")
         if number =="0":
             break
       
         if number.isnumeric()==True:
            list_numbers.append(int(number))
            
         else:
             print ("the value insert is not a number")
    list_numbers.sort()
    #punto 2
    if (int(len(list_numbers)))>4:
        i=len(list_numbers)-2
        list_numbers=list_numbers[2:i]
        print(list_numbers)
    else:
        print("error the user enters less than 4 values")
   

if __name__ == "__main__":
    main()

