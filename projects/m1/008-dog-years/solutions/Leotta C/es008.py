years=int(input("Enter an integer: "))
if years<=0 :
    print("you must enter a positive number")

if years>0 and years<=2 :
    print(f"A {years} years old dog is like a {years*10.5} years old human")

if years>2 :
    print(f"A {years} years old dog is like a {21+(years-2)*4} years old human")

