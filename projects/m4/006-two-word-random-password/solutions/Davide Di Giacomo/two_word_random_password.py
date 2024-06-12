#Write a program that reads a file containing a list of words, randomly selects two and concatenates to produce a new password.
#the total length of password is between 8 and 10 characters, each word used is at least three letters long.
#Capitalize each word in the password, your program should display the password for the user.
import sys
import random

def pass_gen():
    #if command line doesn't have argument
    if len(sys.argv)!=2:
        print("the argument in your command line is omitted!")
    else:
        try:
            f=sys.argv[1]
            list_words=[]
            password=""
            with open(f,'r') as f:
                    for line in f:
                        #capitalize each word
                        output = line.title()
                        for word in output.split():
                            #if word used is at least three letters long
                            if len(word)>=3:
                                list_words.append(word)
                                #print(list_words)
                    #with random choice two words for password
                    pass1=random.choice(list_words) 
                    pass2=random.choice(list_words)
                    password=pass1+pass2
                    return password               
        #if file doesn't exist
        except FileNotFoundError:
            print("File doesn't exist!")
            
def main():
    for i in range(10):
        print(f"Your password is: {pass_gen()}")

if __name__ == "__main__":
    main()