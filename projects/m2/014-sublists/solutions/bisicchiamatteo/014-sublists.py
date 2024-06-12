
    
def isSublist():
   i=0
   j=0
   global value
   original_list=list(input("insert the list"))
   control_list=list (input("insert control list"))

   for i in range(len(original_list)) :

     if original_list[i] ==control_list[0]: 

      for j in range (len(control_list)): 

        if control_list[j] != original_list[i+j]: 

            value=False
            break
        else:
            
            value=True
        

def main():
    isSublist()
    if value==True:
        print ("the control list is in the original list")
    else :
        print("the control list is not in the original list")

if __name__ == "__main__":
    main()
