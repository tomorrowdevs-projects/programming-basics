object_1 = 10.99
object_others= 2.99
def shipping_charge(objects):
    if objects == 1:
        print (f"You bought {objects} objects, so spend {object_1}€ for shipping charge.")
    elif objects > 1:
        print(f"You bought {objects} objects, so spend {object_1+((objects-1)*object_others)}€ for shipping charge.")
    else:
        print("Error! your input isn't valid!")

objects= int(input("Insert how many objects you bought: "))
shipping_charge(objects)