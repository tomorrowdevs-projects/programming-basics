#One of the first known examples of encryption was used by Julius Caesar. Caesar needed to provide written instructions to his generals, but he didn’t want his enemies to learn his plans if the message slipped into their hands. As a result, he developed what later became known as the Caesar cipher. The idea behind this cipher is simple (and as such, it provides no protection against modern code breaking techniques). Each letter in the original message is shifted by 3 places. As a result, A becomes D, B becomes E, C becomes F, D becomes G, etc.The last three letters in the alphabet are wrapped around to the beginning: X becomes A, Y becomes B and Z becomes C. Non-letter characters are not modified by the cipher. Write a program that implements a Caesar cipher. Allow the user to supply the message and the shift amount, and then display the shifted message. Ensure that your program encodes both uppercase and lowercase letters. Your program should also support negative shift values so that it can be used both to encode messages and decode messages.



choice=input("Do you want encrypt or decrypt (write enc to encrypt or dec to decrypt): ")
phrase=input("write your message: ")
number=int(input("insert a key to decrypt or encrypt( number ) "))

arr = list(phrase.lower())
 
alphabet=["a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z"]

#function to encrypt
def encrypt():
 encrypt=[]
 for i in arr: 
  if(i not in alphabet):
     encrypt.append(i)
  else:
   indexx=alphabet.index(i)
   #if index is minus 20 fill the array with the value at [indexx + number] in array of alphabet
   if(indexx<20):
    encrypt.append(alphabet[indexx+number])
   #if index is equal to 20 fill the array with the value at [indexx + number- lenght] of the array of alphabet
   elif(indexx==20):
    encrypt.append(alphabet[indexx+number-len(alphabet)]) 

 return (''.join(encrypt))

#function to decrypt works in the same way as well as encrypt()
def decrypt():
 decrypt=[]
 for i in arr: 
 
  if(i not in alphabet):
     decrypt.append(i)
  else:
   indexx=alphabet.index(i)
   if(indexx<20):
    decrypt.append(alphabet[indexx-number])
   elif(indexx==20):
    decrypt.append(alphabet[indexx-number-len(alphabet)]) 

 return (''.join(decrypt))

if(choice=="enc"):
    print(encrypt())
elif(choice=="dec"):
    print(decrypt())
else:
    "please coose enc or dec"
