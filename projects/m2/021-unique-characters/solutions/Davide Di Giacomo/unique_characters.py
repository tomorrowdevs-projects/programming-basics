#create a alphabet dictionary, with cicle find each letter in string.
#if it isn't a repetition count +1 

def main(string):
    alphabet = {
        'a' : '1', 'b' : '2', 'c' : '3', 'd' : '4', 'e' : '5', 'f' : '6', 'g' : '7', 'h' : '8', 
        'i' : '9', 'j' : '10', 'k' : '11', 'l' : '12', 'm' : '13', 'n' : '14', 'o' : '15', 'p' : '16', 
        'q' : '17', 'r' : '18', 's' : '19', 't' : '20', 'u' : '21', 'v' : '22', 'w' : '23', 'x' : '24', 
        'y' : '25', 'z' : '26', ' ': '27', '!': '28', '?': '29', '.': '30', ',': '31',
    }
    #transform each letter in lowercase to read by function
    new_string=string.lower()
    count=[]
    #bring eache element in string
    for x in new_string:
      for key, value in alphabet.items():
          if x==key:
              #if element isn't in count, add it
              if x not in count:
                  count.append(x)
    return(len(count))
    
string=input("Enter a string to count total different words: ")
print(main(string))