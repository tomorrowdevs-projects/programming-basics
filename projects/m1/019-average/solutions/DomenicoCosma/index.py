
try:
 first_num = int(input('Enter a series of integers numbers to know their avarage. \nTo stop the series enter the number 0 at the end.\nPlease enter the number one by one followed by the enter key.'))
 list=[]

 if first_num == 0:                                       #se il primo numero inserito dovesse essere 0 allora risulterà un messaggio di errore
  print('Error!! The first number cannot be 0')
 else:
    list.insert(0, first_num)
    while True:                                         #while statements per continuare a inserire elementi nella lista.
      other_num = int(input('Enter another number'))
      list.insert(0,other_num)
      if other_num == 0:
        list.remove(0)
        break
        print(other_num)
    print(sorted(list))
    average= sum(list) / len(list)


    if type(average) == type(float):                     #se la media è un numero con la virgola il risultato verrà visualizzato con 2 cifre dopo la virgola.
        print(f'Your average is {(average):.2f}')
    else:                                                #se il numero è intero non verrà visualizzato nessun numero dopo la virgola
        print(f'Your average is {(average):.0f}')
except:
    print('Please enter only integer numbers')