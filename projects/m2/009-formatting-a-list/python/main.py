def elem_harvester():
    user_input = []
    elem = ' '

    while elem != '':
        elem = input('Enter your element (blank space to exit): ')

        if elem != '':
            user_input.append(elem)

        else:
            return user_input

def list_creator(user_input):
    new_list = []
    
    for elem in user_input:
        
        if elem == user_input[-1]:
            new_list.append('and ')
            new_list.append(elem)
            list_string = ''.join(new_list)

        new_list.append(elem)
        new_list.append(', ')
            
    return list_string

if __name__ == '__main__':
    print('Hello USER, this program will convert your strings into a list')

    print(list_creator(elem_harvester()))