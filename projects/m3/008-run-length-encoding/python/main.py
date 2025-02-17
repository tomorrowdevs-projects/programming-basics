def run_lengt_encoding(l:list) -> list:

    if len(l)== 0:
        return []
    else:
            l2=[]
            count = 1
            index = 1
            dato = l[0]
            l2.append(dato)
            while index < len(l) and l[index] == dato:
                count +=1
                index +=1
            l2.append(count)
            return l2 + run_lengt_encoding(l[index:])
    
string = input("Insert a string to encode ").upper()
lista_string = list(string)

print(f" String encoded: {run_lengt_encoding(lista_string)}")