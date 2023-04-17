"""programma che legge una lettera dell'alfabeto dall'utente.
Se l'utente inserisce a, e, i, o o u, il programma visualizzare un messaggio che indica che la lettera inserita è una vocale.
Se l'utente inserisce y, il programma dovrebbe visualizzare un messaggio che indica che a volte y è una vocale e talvolta y è una consonante.
Altrimenti il ​​tuo programma dovrebbe visualizzare un messaggio che indica che la lettera è una consonante."""

import random

def vocali(carattere):
    voc = False

    if carattere in ("a", "A", "e", "E", "i", "I", "o", "O", "U", "u"):
        voc = True
    return voc

def find_y(carattere):
    voc = False
    if carattere in ("y", "Y"):
        voc = True
    return voc

if __name__ == "__main__":
  testo = input("inserisci il carattere ")
  car = testo[0]
  if vocali(car):
      print("il carattere", car, "è una vocale")
  elif find_y(car):
      x = random.random()
      if x > 0.5:
          print("il carattere", car, "è una vocale")
      else:
          print("il carattere", car, "è una consonante")

  else:
      print("il carattere", car, "è una consonante")
