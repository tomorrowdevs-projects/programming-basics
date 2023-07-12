bit_8 = []
bit=str(input("Insert 0 or 1, for 8 times, to determinate a 8bit:"))
bit_8 = list(bit)
while len(bit)== 8:
    for bit in bit_8:
        if bit == "1" or bit == "0":
            sum_bit_8 = [int(numeric_string) for numeric_string in bit_8]
            if sum(sum_bit_8) % 2 == 0:
                print("The parity bit is 0")
                break
            else:
                print("The parity bit is 1") 
                break
        else:
            print("Error! You enter something wrong!")
            break
    break 
else:
    print("Error! You enter something wrong!")
    
   