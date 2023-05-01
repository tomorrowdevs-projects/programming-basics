import random


def colonna(chiave, a, b, d):
    d[chiave] = []
    while len(d[chiave]) < 5:
        num = random.randint(a, b)
        if num not in d[chiave]:
            d[chiave].append(num)
    return


def crea_card():
    d = {"B": [], "I": [], "N": [], "G": [], "O": []}
    colonna("B", 1, 15, d)
    colonna("I", 16, 30, d)
    colonna("N", 31, 45, d)
    colonna("G", 46, 60, d)
    colonna("O", 61, 75, d)
    return d


def stampa(dizionario):
    for k in dizionario.keys():
        print(f'{k:3}|', end=" ")
    print("\n")
    print("-" * 25)
    for j in range(0,5):
        for k in ["B", "I", "N", "G", "O"]:
            print(f'{dizionario[k][j]:3}|', end=" ")
        print("\n")
    print("-" * 25)


if __name__ == '__main__':
    dizionario = crea_card()
    print(dizionario)
    stampa(dizionario)
