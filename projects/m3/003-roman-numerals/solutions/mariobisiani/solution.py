#script that convert roman numbers to integer numbers


# dict that mapping roman values
mapping_romans = {
    'M' : 1000,
    'D' : 500,
    'C' : 100,
    'L' : 50,
    'X' : 10,
    'V' : 5,
    'I' : 1
}

#recursive function for sum the values
def romanTodec(romanList,i):
    length_list = len(romanList)
    if romanList == []:
        print('You entered an empty string.')
        exit()
    elif i < length_list:
        #condition to avoid out of range for i+1 when counter = length_list
        if i != (length_list-1):
            #check if next number is greater than the currrent one
            if mapping_romans[romanList[i+1]] > mapping_romans[romanList[i]]:
                current_value = mapping_romans[romanList[i]]
                next_value = mapping_romans[romanList[i+1]]
                partial_value = next_value-current_value
                #jump two numbers
                i = i + 2
                return romanTodec(romanList,i) + partial_value
            else:
                #sum each numbers and mapping
                fetch_the_value = mapping_romans[romanList[i]]
                i += 1
                return romanTodec(romanList,i) + fetch_the_value
        else:
            #sum each numbers and mapping
            fetch_the_value = mapping_romans[romanList[i]]
            i += 1
            return romanTodec(romanList,i) + fetch_the_value

    else:
        return 0

# catch the roman string and converted to list
string_to_be_converted = input('Insert a Roman number: ')
string_to_list = list(string_to_be_converted)
numeral_number = romanTodec(string_to_list,0)

print(f'Roman number {string_to_be_converted} values {numeral_number} in numeral form')
