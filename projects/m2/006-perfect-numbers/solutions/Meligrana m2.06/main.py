def divisori_propri(n):
    lista = []
    for i in range(1, n):
        if n % i == 0:
            lista.append(i)
    return lista


def perfetto(n):
    lista = divisori_propri(n)
    somma = 0
    for i in lista:
        somma += i
    if somma == n:
        return True
    return False


if __name__ == '__main__':
    for i in range(1, 10001):
        if perfetto(i):
            print(f"{i} è un numero perfetto")
