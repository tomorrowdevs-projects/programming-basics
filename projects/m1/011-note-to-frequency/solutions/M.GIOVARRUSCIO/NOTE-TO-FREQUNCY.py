print("""\
La tabella seguente elenca un'ottava di note musicali, che iniziano con il Do centrale, lungo
con le loro frequenze.
| Note | Frequency (Hz) |
|------|-----------|
|   C4   |    261.63      |
|   D4   |    293.66      |
|   E4   |    329.63      |
|   F4   |    349.23      |
|   G4   |    392.00      |
|   A4   |    440.00      |
|   B4   |    493.88      |
...
""")
A4 = 440.00
nota = input("Inserisci una nota musicale [DO,RE,MI,FA,SOL,LA,SI]:")
N = int(input("Inserisci livello [0-8]:"))
if N < 4:
    A = A4*(2**(N-4))
elif N > 4:
    A = A4*(2**(N-4))
else:
    A = A4

if nota =='DO':
    C= 2**(-9/12)*A
    print('{:3.2f}'.format(C))
elif nota =='RE':
    C = 2 ** (-7 / 12) * A
    print('{:3.2f}'.format(C))
elif nota == 'MI':
    C = 2 ** (-5 / 12) * A
    print('{:3.2f}'.format(C))
elif nota == 'FA':
    C = 2 ** (-4 / 12) * A
    print('{:3.2f}'.format(C))
elif nota == 'SOL':
    C = 2 ** (-2 / 12) * A
    print('{:3.2f}'.format(C))
elif nota == 'LA':
    print(str(A))
elif nota == 'SI':
    C = 2 ** (2 / 12) * A
    print('{:3.2f}'.format(C))
else:
    print("NON E' STATA INSERITA UNA NOTA CORRETTA")
