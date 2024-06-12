'''
Write a recursive function that decompresses a run-length encoded list.
Your recursive function will take a run-length compressed list as its only
argument. It will return the decompressed list as its only result. 
'''

def list_decompression(l):
    if l == []:
        return l
    else:       
        return [l[0]] * l[1] + list_decompression(l[2:])
          
def main():
    print(list_decompression(["A",12,"B",4,"A",6,"B",1]))

if __name__ == '__main__':
    main()