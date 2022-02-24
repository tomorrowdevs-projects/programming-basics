#create a list without minimum and maximum
def last_element(list1):
        list1=(sorted(list1))
        del list1[-1]
        del list1[0]
        return list1
    
def main():
    element=str(input("Insert a positive integer to add element to a list. Empty line to stop."))
    list1=[]
    while element !="":
        list1.append(element)
        element=str(input("Insert your integer, empty line to stop: "))
    #list without minimum and maximum
    if len(list1)>=4:
        list1=(sorted(list1))
        del list1[-1]
        del list1[0]
        print(last_element(list1))
    #error if elements are < 4
    else:
        print("Error! Your input isn't valid!")
    
if __name__ == "__main__":
    main()