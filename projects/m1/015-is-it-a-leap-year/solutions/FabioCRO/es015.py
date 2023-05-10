# prg che acquisisce l'anno e stabilisce se  è bisestile
# codifica dell'algoritmo suggerito

anno=int(input("Inserisci l'anno: "))
if anno % 400 == 0:  #divisibile per 400
    print(anno,"è un anno bisestile")
elif anno % 100 == 0:
    print(anno, " non è bisestile")
elif anno % 4 == 0:
    print(anno," è bisestile")
else:
    print(anno, "non è bisestile")

