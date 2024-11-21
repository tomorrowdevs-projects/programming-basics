q=int(input('Type 1 for plain to decrypt text or 2 \n'))
if q == 1:
    text=(input('Write a text to decipher...\n'))
    x = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"
    y = "dDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcC"

    mytable = text.maketrans(x, y)
    print(text.translate(mytable))
    print()
    print()
    print('Alea iacta est.')

else:
    text=(input('Write a text to decipher...\n'))
    x = "dDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcC"
    y = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"

    mytable = text.maketrans(x, y)
    print(text.translate(mytable))
    print()
    print()
    print('Alea iacta est.')

