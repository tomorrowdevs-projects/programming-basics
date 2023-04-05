def run_length_decompression(l:list) -> list:
    '''
    
    '''
    if len(l)==0:
         return []
    else:
        if l[1]==0:
            return run_length_decompression(l[2:])
        else:
            result_l = list(l[0])
            l[1] -= 1
            result_l2 = run_length_decompression(l)
            return result_l + result_l2


lista = ["A",12,"B",4,"A",6,"B",1]
print(f"Compressed list {lista}")
print(f"Decompressed list {run_length_decompression(lista)}\n")

lista = ["R",5,"A",4,"F",6,"Y",5]
print(f"Compressed list {lista}")
print(f"Decompressed list {run_length_decompression(lista)}\n")

lista = ["H",10,"A",4,"P",6,"Y",3]
print(f"Compressed list {lista}")
print(f"Decompressed list {run_length_decompression(lista)}\n")
