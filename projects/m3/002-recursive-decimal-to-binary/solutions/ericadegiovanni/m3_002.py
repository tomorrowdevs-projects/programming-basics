
def decimal_tobinary(n):

    #converts a non-negative decimal number to binary.

    if n == 0 or n == 1:
        return f'{n}'
    else:      
        return decimal_tobinary(n // 2) + str(n % 2)

def main():
    entred_integer = int(input('Enter a decimal positive integer: '))
    if entred_integer < 0:
        print('Enter a positive integer!')
    else:
        print(f'The binary equivalent is {decimal_tobinary(entred_integer)}.')
        
if __name__ == '__main__':
    main()