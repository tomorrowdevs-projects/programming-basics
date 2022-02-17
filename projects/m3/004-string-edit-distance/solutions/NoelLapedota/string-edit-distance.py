def distance(s,t):
    cost = 0
    if  len(s) == 0:
        return len(t)
    else:
          len(t) == 0
          return len(s) 
    if s[-1] != t[-1]:
        cost = 1
        d1 = distance(s[:-1],t)+1
        d2 = distance(s[:],t[:-1])+1
        d3 = distance(s[:-1] ,t[:-1]) + cost

    return min(d1,d2,d3)  

print(distance())     

def main():
    a = input('Enter the first world')
    b = input('Enter the second  world')
    print(f'The two words have {distance(a,b)}.')


if __name__ == "__main__":
    main()    

