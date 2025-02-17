import random

list_launch=[]
list_dice=[]
str_dice = ""  
dice_dict={}


def generate_dict (): 
   
    for i in range(1000):
        
        list_launch.append(random.randint(1,6))
        list_launch.append(random.randint(1,6))
           
     
        
        list_dice.append(list_launch)
        #qui voglio poi con un dizionario prendere i valori di tutte le occorenze prensenti nella lista list_launch e per ogni valore presente, poi utilizzo metodo
        #per estrapolare il numero di volte di un dato indice  seguendo l'espessione 100xvalore indice/1000 e mi dà il valore in percentuale di ogni occorenza di lancio dadi
    
    print(list_dice)
      


def main():
  generate_dict ()
 

if __name__ == "__main__":
    main()