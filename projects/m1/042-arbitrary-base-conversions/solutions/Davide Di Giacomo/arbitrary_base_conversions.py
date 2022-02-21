import numpy as geek
#function that converts from base 10 to an arbitrary base
def a_to_base_10(number, base_1):
                total_base=[]
                total_number=[]
                lenght = len(str(number))-1
                for i in range (0, lenght):
                    new_number=pow(base_1,lenght)
                    total_base.append(new_number)
                    lenght-=1
                total_base.append(1)
                numbers = list(str(number))
                total_number= [int(x) for x in numbers]
                result = geek.multiply(total_base, total_number)
                number=sum(result)
                return number 
#function that converts from an arbitrary base to base 10
def base_10_to_a(number, base_2):
                total_number=[]
                total_base=[]
                while number/base_2>=1:
                    new_number=number%base_2
                    total_base.append(new_number)
                    number=number//base_2
                    total_number.append(number)
                total_base.append(total_number[-1]%base_2)
                total_base.reverse()
                final= [str(x) for x in total_base]
                return (''.join((final)))
#if base outside of this range then an appropriate error message           
def main(number, base_1, base_2):
    if 2<=base_1<=16:
        if base_1 == 10:
            print(base_10_to_a(number, base_2))
        else:
            if base_2==10:
                print(a_to_base_10(number, base_1))          
            else:    
                a_to_base_10(number, base_1)
                print(base_10_to_a(number, base_2))
    else:
        print("Error, your base is not valid!")
        return  
number = int(input("Insert a number: "))
base_1= int(input("Insert a base (between 2-16) of your number: "))
base_2= int(input("Insert a base (between 2-16) to convert the number: "))

if __name__ == "__main__":
    main(number, base_1, base_2)