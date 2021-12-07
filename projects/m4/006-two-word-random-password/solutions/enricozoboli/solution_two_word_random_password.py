import random
import sys

def create_password(words_lst):
        """
        Takes a list of words, randomly chooses two words,
        concatenates them in a new string and returns it.
        Parameter:
            a list.
        Return:
            a string.
        """
        while True:
            index_1, index_2 = random.sample(range(0, len(words_lst)), 2)
            first_word = words_lst[index_1].capitalize()
            second_word = words_lst[index_2].capitalize()
            password = first_word + second_word
            if len(first_word) >= 3 and len(second_word) >= 3\
                and 8 <= len(password) <= 10:
                return password

def main():
    """Takes a text with a list of words as command line argument and returns a string"""
    try:
        with open(sys.argv[1]) as reader:
            words_lst = [word.strip() for word in reader]
            password = create_password(words_lst)
            print(f"Your new password is: {password}")

    except FileNotFoundError as fnf_error:
        print("File doesn't exist or wrong path")
    except IndexError as idx_error:
        print("No file as entered as argument.")
    
if __name__ == "__main__":
    main()


    


