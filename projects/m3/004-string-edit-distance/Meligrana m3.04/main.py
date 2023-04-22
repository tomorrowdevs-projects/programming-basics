def distanza(s, t):
    if len(s) == 0:
        return len(t)
    elif len(t) == 0:
        return len(s)
    else:
        ris = 0
        if s[0] != t[0]:
            ris = 1
        d1 = distanza(s[1:], t) + 1
        d2 = distanza(s, t[1:]) + 1
        d3 = distanza(s[1:], t[1:]) + ris
        return min(min(d1,d2),d3)


if __name__ == '__main__':
    s = input("Prima stringa: ")
    t = input("Seconda stringa: ")
    print(f"distanza tra {s} e {t}={distanza(s, t)}")
