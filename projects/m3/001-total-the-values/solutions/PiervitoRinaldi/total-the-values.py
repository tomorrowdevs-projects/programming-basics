def total_the_values():
    value = input('Enter value: ')
    if value == '':
        return 0  
    return int(value) + total_the_values()
        
def main():
    print(total_the_values())

if __name__ == '__main__':
    main()