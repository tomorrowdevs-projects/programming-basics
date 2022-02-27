def possible(v_end, n, res=False):
 cc=[ 0.25, 0.10, 0.5, 0.1] 
 v_end = round(v_end,2)
 if n == 0 and v_end ==0.0:
      res =  True
      return res
 else:
     if v_end >= cc[0] :
        res = possible(v_end-cc[0], n-1)
        print(v_end)
     elif v_end >= cc[1] and v_end > cc[2]:
         res =  possible(v_end-cc[1], n-1)
        # print(v_end)
     elif v_end >= cc[2] and v_end > cc[3]:
        res = possible(v_end-cc[2], n-1)
        #print(v_end)

     elif v_end >= cc[3] :
         res = possible(v_end-0.01, n-1)   #il problema é nella non rappresentazione di numeri a non base 10, nel ieee 75
         #print(v_end)
     return res

print(possible(2.06,10)) 

def main():
    val_tot =float(input('enter the total value.....\n'))
    n_coin=int(input('enter how many times you want to construct the value\n'))


#if __name__ == "__main__":
    main()