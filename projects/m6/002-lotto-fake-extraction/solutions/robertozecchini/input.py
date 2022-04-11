'''
Takes 2 arguments:
- a list of choices to show to the user
- (optional) a text containing the message to show at the beginning
Input request is repeated until answer becomes valid
The function returns both the index and the element chosen
'''
def input_from_list(options_list, text = ""):
    if text:
        print(text)
    for index, value in enumerate(options_list):
        print(f"{index+1} - {value}")
    while True:
        try:
            choice = int(input("Your choice: ")) - 1
            if choice < 0 or choice >= len(options_list):
                raise ValueError
        except ValueError:
            print("Not a valid choice, you have to choose the desired index.")
        else:
            break
    return choice, options_list[choice]

'''
Takes 3 arguments:
- (optional) a text containing the message to show when you takes input
- (optional) a minimum value
- (optional) a maximum value
Input request is repeated until answer becomes valid
The function return the user input as integer when it becomes valid
'''
def input_int(text = "", min = None, max = None):
    while True:
        try:
            value = int(input(text))
            if min != None:
                if value < min:
                    print("Too low.")
                    raise ValueError
            if max != None:
                if value > max:
                    print("Too high.")
                    raise ValueError
        except ValueError:
            print("Not a valid choice, try again.")
        else:
            break
    return value