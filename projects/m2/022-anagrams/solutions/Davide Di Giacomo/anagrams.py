#Create a program that reads two strings from the user, determines if they are anagrams.

#create a alphabet dictionary
#with a cicle compare if each single letter for the first input and put them in a list
#do the same with the second input in another list
#if list1(sorted) == list2(sorted) they are anagrams

def anagrams(input1, input2):
    alphabet = {
        'a' : 1, 'b' : 2, 'c' : 3, 'd' : 4, 'e' : 5, 'f' : 6, 'g' : 7, 'h' : 8, 
        'i' : 9, 'j' : 10, 'k' : 11, 'l' : 12, 'm' : 13, 'n' : 14, 'o' : 15, 'p' : 16, 
        'q' : 17, 'r' : 18, 's' : 19, 't' : 20, 'u' : 21, 'v' : 22, 'w' : 23, 'x' : 24, 
        'y' : 25, 'z' : 26,
        }
    check1=[]
    check2=[]
    #compare if each single letter for the first input
    for x in input1:
        for key in alphabet:
            if x==key:
                #put value in a list
                check1.append(alphabet[key])
    #compare if each single letter for the second input
    for y in input2:
        for key in alphabet:
            if y==key:
                #put value in a list
                check2.append(alphabet[key])
    #if sorted list1 it's the same of sorted list2, they are anagrams
    if sorted(check1)==sorted(check2): return True
    else: return False
#print function       
def main(input1, input2):
    if anagrams(input1, input2)==True:
        print(f"The words {input1} and {input2} are anagrams!")
    else:
        print(f"The words {input1} and {input2} aren't anagrams!")             
    
input1=input("Insert first word to compare: ")
input2=input("Insert second word to compare: ")
main(input1, input2)