def romani_arabi(r):
    d = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    if len(r) == 0:
        return 0
    elif len(r) == 1:
        return d[r]
    i = 0
    if d[r[i]] > d[r[i + 1]]:
        return romani_arabi(r[i + 1:]) - d[i]
    else:
        return romani_arabi(r[i + 1:]) + d[i]
    i+=1

if __name__ == '__main__':
    r = input("Numero romano ")
    print(romani_arabi(r))
