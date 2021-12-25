
def main():
    password = input('Check the password: ')
    def checkpass(word):
        if len(word) < 8:
            return False
        else:
            uppercase = False
            lowercase = False
            number = False
            for letter in word:
                looked = ord(letter)
                if looked >= 65 and looked <= 90:
                    uppercase = True
                elif looked >= 97 and looked <= 122:
                    lowercase = True
                elif looked >= 48 and looked <= 57:
                    number = True
            if lowercase == True and uppercase == True and number == True:
                return True
            else:
                return False
    print(checkpass(password))

if __name__ == '__main__':
    main()