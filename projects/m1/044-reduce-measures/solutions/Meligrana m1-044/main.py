'''Primo parametro: numero di unità
Secondo parametro: unità di misura'''
def conversione(numero,s):
    if s=="tazza":
        return f"{numero} tazze"
    elif s=="cucchiaio":
        return conversione(numero//16,"tazza")+ f" {numero%16} cucchiai"
    else:
        return conversione(numero//3,"cucchiaio")+f" {numero%3} cucchiaini da the"

if __name__=='__main__':
    numero=int(input("numero di unità "))
    s=input("unità di misura ")
    print(conversione(numero,s))
