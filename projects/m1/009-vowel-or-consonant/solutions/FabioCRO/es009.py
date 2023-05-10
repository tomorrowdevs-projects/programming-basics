lettera = input("inserisci una lettera dell'alfabeto: ").lower()

if lettera in ('a', 'e', 'i', 'o', 'u'):
    print(f"La lettera {lettera}  è una vocale")
elif lettera == 'y':
    print("Talvolta y è una vocale, altre è una consonante")
else:
    print(f"La lettera {lettera} inserità è una consonante")
