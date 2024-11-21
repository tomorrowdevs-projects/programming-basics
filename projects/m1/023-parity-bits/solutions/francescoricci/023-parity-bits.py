#exercise 023 by francesdco Ricci
import re

print('This program calculate add bit parity with parity Even ')

while True:
    bit_string = input('\nInsert 8 bit value [accept 0 or 1]: ')
    # I check if the string exceeds the length or the value of the user's insert bit is not valid
    if len(bit_string) > 8 or not re.match("^[0-1]+$",bit_string):
        print('error byte not value')
        continue

    if not bit_string: break
    count_one_bit = (bit_string.count("1"))
    if count_one_bit % 2 == 0:
        bit_parity = '0'
    else:
        bit_parity = '1'

    print(f"byte trasmitted {bit_string}")
    print(f"Parity bit should be {bit_parity}")


