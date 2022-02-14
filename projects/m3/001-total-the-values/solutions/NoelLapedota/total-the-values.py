z =[]
def decimal_to_binary(n):
    global z
    if n == 1 :
        z.reverse()
        StrA = "".join(map(str, z))
        print(StrA)
    else:
        (z).append(n%2)
        decimal_to_binary(n//2)

def main():
    q = int(input('enter the positive number to converte please\n'))
    if q < 0:
        print('only posite numbers')
        return main()
        
if __name__ == '__main__':
    main()        
        