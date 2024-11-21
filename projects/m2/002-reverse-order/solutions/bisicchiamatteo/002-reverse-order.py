list_numbers=[]


def insert_number():
    while True:
         number=input("insert the number : ")
         if number =="0":
             break
       
         if number.isnumeric()==True:
            list_numbers.append(int(number))
         else:
             print ("the value insert is not a number")

def main():
    insert_number()
    list_numbers.sort(reverse=True)
    print( list_numbers)

if __name__ == "__main__":
    main()

