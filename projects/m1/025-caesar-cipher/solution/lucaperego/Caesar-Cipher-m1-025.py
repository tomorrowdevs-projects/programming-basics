

alphabet = "abcdefghijklmnopqrstuvwxyz" 
alphabet_2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

message = input("Write the Coded Message ---> ")

decoded_message = "" 

shift = int(input("Enter shift number ---> "))

for element in message:
        
    if ("a"<=element<="z"):
        index = alphabet.find(element) - alphabet.find("a")     
        index = (index + shift) % 26
        decoded_element = alphabet[index + alphabet.find("a")] 
        
        decoded_message = decoded_message + decoded_element
        
    elif ("A"<=element<="Z"):
        index = alphabet_2.find(element) - alphabet_2.find("A")     
        index = (index + shift) % 26
        decoded_element = alphabet_2[index + alphabet_2.find("A")] 
        
        decoded_message = decoded_message + decoded_element
        
    
    else:
        decoded_message = decoded_message + element 
 
            
print(f"Decoded Message: {decoded_message}")



