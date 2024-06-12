
def binary(num):
    if num < 2:
        return f"{num}"
    else:
        return f"{binary(int(num/2))}{num % 2}"

def main():
    toconvert = int(input('Enter the positive integer to convert: '))
    if toconvert < 0:
        print('Error, the number must be positive!!')
    else:
        print(binary(toconvert))
        
if __name__ == '__main__':
    main()