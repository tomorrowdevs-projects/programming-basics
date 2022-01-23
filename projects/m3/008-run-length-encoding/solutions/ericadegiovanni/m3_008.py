'''
 Your function will take a list or a string as its only argu- ment. 
 It should return the run-length compressed list as its only result. 
'''
def encoding(l):
    if l == []:
        return l
    else:
        i = 1
        while i < len(l) and l[i] == l[i - 1]:
            i += 1
        return [l[0], i] + encoding(l[i:])
         
            
# read a string from the user, compresses it, 
# and display the run-length encoded result.

def main():
    text = [l for l in input('Enter a string: ')]
    print(encoding(text))

if __name__ == '__main__':
    main()