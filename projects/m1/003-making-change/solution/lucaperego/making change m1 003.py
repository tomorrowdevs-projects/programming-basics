# Programma per far calcolare al BOT il resto
cifra_da_pagare = float(input("inserire la cifra da pagare ---> "))

cifra_da_pagare_con_centesimi = format((cifra_da_pagare), '.2f')

cifra_da_pagare_con_centesimi_x_100 = int(float(cifra_da_pagare_con_centesimi) * 100)
# qui bisogna vincolare tutto con int e float o si rischia che il BOT consideri i numeri come stringa: e quindi, invece di moltiplicare un numero per 100, finisce con lo stampare 100 volte un lo stesso numero, da lui inteso pero' come stringa!

cifra_pagata_in_contanti = float(input("inserire la cifra pagata in contanti ---> "))

cifra_pagata_in_contanti_con_centesimi = format((cifra_pagata_in_contanti), '.2f')

cifra_pagata_in_contanti_con_centesimi_x_100 = int(float(cifra_pagata_in_contanti_con_centesimi) * 100)

resto_con_centesimi_x_100 = (int(cifra_pagata_in_contanti_con_centesimi_x_100) - int(cifra_da_pagare_con_centesimi_x_100))

soldi_mancanti = format((float(cifra_da_pagare_con_centesimi) - float(cifra_pagata_in_contanti_con_centesimi)), '.2f')

if cifra_pagata_in_contanti > cifra_da_pagare or cifra_pagata_in_contanti == cifra_da_pagare:

    numero_monete_da_200 = int(resto_con_centesimi_x_100 / 200)
    resto_parziale_monete_da_200 = (resto_con_centesimi_x_100 % 200)

    numero_monete_da_100 = int(resto_parziale_monete_da_200 / 100)
    resto_parziale_monete_da_100 = (resto_parziale_monete_da_200 % 100)

    numero_monete_da_25 = int(resto_parziale_monete_da_100 / 25)
    resto_parziale_monete_da_25 = (resto_parziale_monete_da_100 % 25)

    numero_monete_da_10 = int(resto_parziale_monete_da_25 / 10)
    resto_parziale_monete_da_10 = (resto_parziale_monete_da_25 % 10)

    numero_monete_da_5 = int(resto_parziale_monete_da_10 / 5)
    resto_parziale_monete_da_5 = (resto_parziale_monete_da_10 % 5)

    numero_monete_da_1 = int(resto_parziale_monete_da_5 / 1)
    resto_parziale_monete_da_1 = (resto_parziale_monete_da_5 % 1)

    print(f"RESTO: {numero_monete_da_200} Tonnies --- {numero_monete_da_100} Loonies --- {numero_monete_da_25} Quarters --- {numero_monete_da_10} Dimes --- {numero_monete_da_5} Nickels --- {numero_monete_da_1} Pennies")

else:
    
    print(f"Scusi, ma non ha inserito abbastanza soldi - mancano ancora {soldi_mancanti} $")