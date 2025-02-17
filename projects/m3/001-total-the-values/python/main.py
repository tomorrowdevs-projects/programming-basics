value_list = []

def read_value():
    value = input("Enter a value (blank to finish): ")
    if value != "":
        value = int(value)
        value_list.append(value)
        read_value()
    if value == "":
        if len(value_list) == 0:
            print("0.0")
        else:
            total = sum(value_list)
            print(total)
            
read_value()