# Function that takes a string s as the first parameter and the width of a window in characters, w, as the second parameter. Returns the centered string.
def center_string(s, w):
    if len(s) >= w: return (s)
    else: 
        space = ""
        for i in range(0, -((len(s) - w)//2)):
            space += " "
        return (space + s)

# Main program showing example strings to demonstrate the center_string function.
def main():
    print(center_string("demonstration of the case s > w", 10))
    print(center_string("s is greater than w", 5))
    print(center_string("case s = w", 10))
    print(center_string("s is equal to w", 15))
    print(center_string("case s < w", 50))
    print(center_string("s is less than w", 100))

if __name__ == "__main__":
    main()