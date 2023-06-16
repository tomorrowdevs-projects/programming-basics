import os
if __name__ == '__main__':
    nomefile=input("head -n 10 ")
    if nomefile=="":
        print("manca l'argomento della linea di comando")
    else:
        try:
            cmd = 'head -n 10 ' + nomefile
            fp = os.popen(cmd)
            res=fp.read()
            print(res)
            os.close(fp)
        except:
            if not os.path.exists(nomefile):
                print("Il file non esiste")

