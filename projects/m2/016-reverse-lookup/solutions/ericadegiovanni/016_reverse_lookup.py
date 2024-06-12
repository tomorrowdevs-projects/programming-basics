
def reverseLookup(d, value):

    # recieve the dictionary (d) and the value to search for as its only parameters. 
    # return a list of keys from the dictionary that map to the provided value.

    return [key for key in d if d[key] == value]


# create a dictionary and then show that the reverseLookup function works correctly 
# when it returns multiple keys, a single key, and no keys (empty list). 

def main():

    user_info = {'name': 'Jack',
               'age': 25,
               'job': 'programmer',
               'home town': 'London',
               'birthplace': 'London'
               }
    
    print(reverseLookup(user_info, 'London'))
    print(reverseLookup(user_info, 25))
    print(reverseLookup(user_info, 'dog'))

if __name__ == '__main__':
    main()