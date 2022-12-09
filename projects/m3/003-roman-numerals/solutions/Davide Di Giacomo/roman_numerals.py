#Create a recursive function that converts a Roman numeral to an integer.
#write a main program that reads a Roman numeral from the user and displays its value.

#create a dictionary
#slip the input in one single letter, bring the respective value from the dictionary

roman={"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1}
change_roman_in_integer=[]

#use two counters: n for move throught index and y to find "special characther" like "IV"
def convert_roman_to_int(letter, n=0, y=1):
    #if there is only one roman letter to translate
    if len(letter)==1: return roman[letter[n]]
    elif y<=len(letter)-1:
        #if the letters aren't in decreasing way
        if roman[letter[y-1]]<roman[letter[y]]:
            #take the respective value from the dictionary
            correct_number=roman[letter[y]]-roman[letter[y-1]]
            change_roman_in_integer.append(correct_number)
            letter.pop(y-1)
        #if the letters are in decreasing way
        else: change_roman_in_integer.append(roman[letter[n]])
        n+=1
        y+=1
        convert_roman_to_int(letter, n, y)
    elif n<=len(letter)-1: 
        change_roman_in_integer.append(roman[letter[n]])
        n+=1
        y+=1
        convert_roman_to_int(letter, n, y)
    return sum(change_roman_in_integer)    
    
def main():
    rom=str(input("Enter a roman number to convert in a int: "))
    #put each single letter from the input in a list
    letter= list(rom)
    print(f"The value of yout roman numbers is: {convert_roman_to_int(letter)}")

main()