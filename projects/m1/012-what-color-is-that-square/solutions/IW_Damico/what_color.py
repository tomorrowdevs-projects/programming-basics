from builtins import str

colonne = ["a", "b", "c", "d", "e", "f", "g", "h"]
righe = ["1", "2", "3", "4", "5", "6", "7", "8"]

def calcolo_posizione(ri1, col1):

 #calcolo della posizione partendo da 1

 pos_col = colonne.index(ri1) + 1
 pos_rig = righe.index(col1) + 1

#calcolo dei resti per la definizione di pari o dispari
 res_col = pos_col % 2
 res_rig = pos_rig % 2
 if ((res_rig == 1 and res_col == 1) or (res_rig == 0 and res_col == 0)):
  colore = "casella nera"
 if ((res_rig == 0 and res_col == 1) or (res_rig == 0 and res_col == 1)):
  colore = "casella bianca"

 return colore


if __name__ == "__main__":
 cella = str(input("posizione "))
 ri =  cella[0]
 col = cella[1]
 posizione = calcolo_posizione(ri, col)
 print(posizione)