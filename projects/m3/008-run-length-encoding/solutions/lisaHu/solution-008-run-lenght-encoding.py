def compress_list(l):
    #if the list is empty, return an empty list
    if len(l) == 0:
        return []
    else:
        #otherwise, start counting from 1 and for each number in range of l, check if the first and next character are the same and if the lenght is higher than the count
        #if it is, add 1 to count and proceed with next itiration. If these conditions are not satisfied, then it's time to add the results to list
        #and return the function with the same list minus the characters that have been itirated so far
        count = 1
        for i in range(len(l)):
            if len(l) > count and l[i] == l [i+1]:
                count += 1
            else:
                compressed_list = [l[i], count]
                return compressed_list + compress_list(l[count:])
def main():
    l1 = ["A","A","A","A","A","A","A","A","A","A","A","A","B","B","B","B","A","A","A","A","A","A","B"]
    l2 = 'AAABBCCCDDDDA'
    l3 = ['c','c','c','d','d','d','d','d','e','f','f','f','f','f']
    l4 = []
    print(compress_list(l1))
    print(compress_list(l2))
    print(compress_list(l3))
    print(compress_list(l4))
main()