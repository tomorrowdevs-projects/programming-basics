# Run-length encoding is a simple data compression technique that can be effective when repeated values
# occur at adjacent positions within a list.

# Compression is achieved by replacing groups of repeated values with one copy of the value,
# followed by the number of times that it should be repeated. For example, the list
# ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"]
# would be compressed as ["A",12,"B",4,"A",6,"B",1].

# Decompression is performed by replicating each value in the list the number of times indicated.

# Write a recursive function that decompresses a run-length encoded list. Your recursive function will take a run-length
# compressed list as its only argument. It will return the decompressed list as its only result.

# Create a main program that displays a run-length encoded list and the result of decoding it.

encoded_list = ["A",12,"B",4,"A",6,"B",1]
def dec_list(enc):
    if len(enc) == 0:
        return enc
    else:
        char = enc[:1]
        mult = enc[1]
        return char * mult + dec_list(enc[2:])
    
print(dec_list(encoded_list))