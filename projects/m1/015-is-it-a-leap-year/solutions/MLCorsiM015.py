#import calendar
anno = int(input("Inserisci l'anno da verificare"))
resto = int(anno) % 4
controllo = 0
if resto == 0:
    controllo = 1
else:
    resto = int(anno)  % 100
    if resto == 0:
        controllo = 1
    else:
        resto = int(anno) % 4
        if resto == 0:
            controllo = 1
if controllo == 1:
    print("Anno BISESTILE")
else:
    print("Anno NON bisestile")
#per verifica dei calcoli
#val = calendar.isleap(anno)
#if val == True:
#    print("VERIFICA --- ANNO BISESTILE")
#else:
#    print("VERIFICA --- NO BISESTILE")
