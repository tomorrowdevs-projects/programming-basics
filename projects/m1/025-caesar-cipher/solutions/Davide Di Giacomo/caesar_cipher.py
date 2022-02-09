import string
alphabet_a = []
alphabet_b = []
new_text = []
alphabet_a = list(string.ascii_lowercase)
alphabet_b = list(string.ascii_uppercase)
text = (input("Insert a text and the the shift amount, separate those with a ','")) 
code, shift_amound = text.split(',')
single_code = list(code)
for i in single_code:
    if i in alphabet_a:
        shift_tot=int(alphabet_a.index(i)) + int(shift_amound)
        if shift_tot < len(alphabet_a):
            new_code = (alphabet_a[shift_tot])
            new_text.append(new_code)
        else:
            new_code = (alphabet_a[shift_tot-(len(alphabet_a))])
            new_text.append(new_code)
   
    elif i in alphabet_b:
        shift_tot=int(alphabet_b.index(i)) + int(shift_amound)
        if shift_tot <= len(alphabet_b):
            new_code = (alphabet_b[shift_tot])
            new_text.append(new_code)
        else:
            new_code = (alphabet_b[shift_tot-(len(alphabet_b))])
            new_text.append(new_code)
        
    else:
        new_text.append(i)
        
print("The new code is: ") 
print(''.join(new_text))