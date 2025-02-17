import random
max_len=[]
ascii=[]
password=[]
for i in range(33, 127):
    ch = chr(i)
    ascii.append(ch)
def main():
    for i in range (7, 11):
        max_len.append(i)
    for i in range (1, 11):        
        element = random.choice(ascii)
        password.append(element)
        if len(password)==random.choice(max_len):
            print(f"Your random password is: {(''.join(password))}")
        
main()