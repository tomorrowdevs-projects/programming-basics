
def getTheValue():
    inp = input("insert a number")
    if(inp != ""):
     while(inp.isnumeric() == False):
      inp = input("please, insert a number no a value")
      return inp
    return inp


def getValueUntilBank():
    
    res = getTheValue()

    if res == "":      

        return 0.0

    else:               

        return float(res) + getValueUntilBank()
    
print(getValueUntilBank())   


