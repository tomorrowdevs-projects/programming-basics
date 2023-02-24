def remove_outliers(list_of_number: list, n: int)-> list:
    '''
    Remove from 'list_of_number' the 'n'-largest number and the 'n'smallest and return the new list
    '''
    output_list = list_of_number.copy()

    output_list.sort()
    del output_list[:n]
    del output_list[-n:]

    return output_list


if __name__=="__main__":
    
    list_of_number = []

    number = int(input("Insert a number. 0 to stop "))

    while number != 0:
        list_of_number.append(number)
        number = int(input("Insert a number. 0 to stop "))

    if len(list_of_number) < 4:
        raise ValueError("Inserisci almeno 4 numeri")
    
out_list = remove_outliers(list_of_number,2)

print(out_list)
print(list_of_number)
