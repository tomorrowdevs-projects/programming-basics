#User insert a choise:
while True:
    choise = input('Do you want to encrypt or decrypt your word? Use "c" to encrypt and "d" to decrypt: ')
    if choise == "":
        break
    
    if choise == 'c':
        print("Ok let's encrypt.")
        user_input = input('Insert a keyword: ')
        user_input = user_input.upper()
        translation_dict = str.maketrans('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'DEFGHIJKLMNOPQRSTUVWXYZABC')
        new_user_input = user_input.translate(translation_dict)
        print(new_user_input)
    
        
    elif choise == 'd':
        print("Ok let's decrypte.")
        print("DEFGHIJKLMNOPQRSTUVWXYZABC are the corresponding letters of ABCDEFGHIJKLMNOPQRSTUVWXYZ")
        user_input = input('Insert a keyword: ')
        user_input = user_input.upper()
        translation_dict = str.maketrans('DEFGHIJKLMNOPQRSTUVWXYZABC', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        new_user_input = user_input.translate(translation_dict)
        print(new_user_input)
    else:
        print(f"Not a valid choise")
