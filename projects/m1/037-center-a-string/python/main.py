s1 = '_TEST__TEST__TEST__TEST__TEST__TEST__TEST_'
s2 = 'SHORT_TEST'
s3 = 'A SLIGHTLY LONGER TEST'

# w is ok for my screen but i dont know how to get a relative size
w = 172


def stringCenter(s, w):
    if len(s) >= w:
        print(s)
    else:
        space = (w - len(s)) // 2
        leading = ' ' * space
        print(leading, s)

stringCenter(s1, w)
stringCenter(s2, w)
stringCenter(s3, w)