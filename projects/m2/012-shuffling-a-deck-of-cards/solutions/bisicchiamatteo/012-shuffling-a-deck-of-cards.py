import string
import random
 
deck=[]
new_deck=[] 

def create_deck():
   card_type=[ "1","2","3","4","5","6","7","8","9","T","J","Q","K"]
   suits =["s","h","d","c"]

   for element in card_type :
       for seed in suits:
           new_card= element + seed
           deck.append(new_card)



def shuffle_deck():
    
    for element in deck:
        number=random.randint(1,10)
  
        new_deck.insert(number ,element)
    



def main():
       
       create_deck()
       shuffle_deck()
       print (new_deck)
      
       

if __name__ == "__main__":
    main()
