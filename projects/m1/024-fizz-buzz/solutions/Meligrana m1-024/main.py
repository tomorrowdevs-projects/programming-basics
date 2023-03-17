def tre(num=0):
    return(num%3==0)
def cinque(num=0):
    return(num%5==0)
if __name__=='__main__':
    for n in range(1,100):
        if tre(n)==False and cinque(n)==True:
            print(f"{n:5}->Buzz")
        elif tre(n)==True and cinque(n)==False:
            print(f"{n:5}->Fizz")
        elif tre(n)==True and cinque(n)==True:
            print(f"{n:5}->Fizz-Buzz")
        else:
            print(f"{n:5}->{n}")
