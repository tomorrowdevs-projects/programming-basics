def main():
    global list_number
    list_number=[]

    number=input("insert the number : ")
    
    try:
        int(number)
        value_int=True

    except ValueError:
        value_int=False

    if value_int==True:
        for i in range(2, number+1):
            if (number % i) == 0:
                list_number.append(i)   
    else:
            print  ("the value  insert is not a number ")
             
   
   
   

if __name__ == "__main__":
    main()
