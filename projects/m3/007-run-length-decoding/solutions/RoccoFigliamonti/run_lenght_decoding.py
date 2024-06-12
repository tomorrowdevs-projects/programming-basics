"""
Run-length encoding is a simple data compression technique that can be effec- tive when repeated values occur at adjacent positions within a list. 

Compression is achieved by replacing groups of repeated values with one copy of the value, fol- lowed by the number of times that it should be repeated. For example, the list `["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"]`would be compressed as `["A",12,"B",4,"A",6,"B",1]`. 

Decompression is performed by replicating each value in the list the number of times indicated.

Write a recursive function that decompresses a run-length encoded list. Your recursive function will take a run-length compressed list as its only argument. It will return the decompressed list as its only result. 

Create a main program that displays a run-length encoded list and the result of decoding it.
		 """


def decompressed_list(compr_lst):
    if len(compr_lst) == 0:
        return compr_lst
    else:
        decomp_lst = [compr_lst[0]]*compr_lst[1] + decompressed_list(compr_lst[2:])
        return decomp_lst

print(decompressed_list(["A",12,"B",4,"A",6,"B",1]))
