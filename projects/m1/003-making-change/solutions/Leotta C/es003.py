cents = int(input("inserisci la cifra in centesimi: "))
toonie = cents // 200
print(f"il n. di toonies da usare è {toonie}" )
cents = cents - 200*toonie
loonie = cents // 100
print(f"il n. di loonies da usare è {loonie}" )
cents = cents - 100*loonie
quarter = cents // 25
print(f"il n. di quarters da usare è {quarter}" )
cents = cents - 25*quarter
dime = cents // 10
print(f"il n. di dimes da usare è {dime}" )
cents = cents - 10*dime
nickel = cents // 5
print(f"il n. di nickels da usare è {nickel}" )
cents = cents - 5*nickel
print(f"il n. di pennies da usare è {cents}" )





