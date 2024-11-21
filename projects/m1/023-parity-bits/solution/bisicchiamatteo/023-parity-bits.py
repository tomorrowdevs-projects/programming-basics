point=0
while True:

    parity_bits=input ("inserisci il valore in bits :  ")
    if ("0"in parity_bits ):
        point=0
    elif ("1"in parity_bits ):
        point=0
    elif (parity_bits==""):
        break
    else :
        print("il valre inserito non e idoneo ")
    control =list(parity_bits)
    if ((int(control[0])^int(control[1])^int(control[2])^int(control[3])^int(control[4])^int(control[5])^int(control[6])^int(control[7])^0)==0 ):
           print (" si usa il bit di parita  pari")
    elif((int(control[0])^int(control[1])^int(control[2])^int(control[3])^int(control[4])^int(control[5])^int(control[6])^int(control[7])^0)==1 ):
          print (" si usa il bit di parita  dispari")