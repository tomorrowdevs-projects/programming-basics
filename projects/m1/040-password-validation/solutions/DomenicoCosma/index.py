
import re                                    #need mport re to use re.search

def main():
    while True:
        password = input("Enter a password: ")                                                  
        if len(password) < 8:
            print("Your password is too short. At least 8 characters")
        elif re.search('[0-9]',password) is None and re.search('[A-Z]',password) is None:                                #re.search has the job to find a specific character
            print("Your password has to contain a at least one number and one capital letter")
        elif re.search('[0-9]',password) is None:
            print("Your password has to contain a at least one number")
        elif re.search('[A-Z]',password) is None:
            print("Your password has to contain a at least one capital letter")
        else:
            print("Your password is OK!")
            break

if __name__ == '__main__':
    main()