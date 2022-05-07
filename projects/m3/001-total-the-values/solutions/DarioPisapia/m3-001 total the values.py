def nValues():
    inpt = input("Enter a value, blank line to stop: ")
    if inpt == "":
        return 0.0
    else:
        return float(inpt) + nValues()
        
if __name__ == "__main__":
    input("Press ENTER to start summing your numbers ")
    print(nValues())
