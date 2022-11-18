
ordinal = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth']

def int_to_ordinal(int_number):
    converted_N = ordinal[int_number - 1]
    return converted_N  

if __name__ == "__main__":
    int_number = int(input('Enter an integer to have its ordinal: '))
    int_to_ordinal(int_number)
