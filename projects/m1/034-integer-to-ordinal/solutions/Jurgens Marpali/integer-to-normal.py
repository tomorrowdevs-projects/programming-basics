def ordinal(number):
    eng = ('Four', 'Fif', 'Six', 'Seven', 'Eigh', 'Nin', 'Ten', 'Eleven', 'Twelf')
    if number == 1:
        ord_num = 'First'
    elif number == 2:
        ord_num = 'Second'
    elif number == 3:
        ord_num = 'Third'
    elif 4 <= number <=12:
        ord_num = eng[number - 4] + 'th'
    else:
        ord_num = ''
    return (ord_num)

def main():
    for n in range(1,13):
        print(f"The ordinal english word for {n} is {ordinal(n)}.")

if __name__ == "__main__":
    main()

    

