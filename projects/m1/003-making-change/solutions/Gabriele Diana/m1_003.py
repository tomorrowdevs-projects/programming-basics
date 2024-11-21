# Consider the software that runs on a self-checkout machine.
# One task that it must be able to perform is to determine how much change to provide
# when the shopper pays for a purchase with cash.
# Write a program that begins by reading a number of cents from the user as an integer.
# Then your program should compute and display the denominations of the coins that should be used to give
# that amount of change to the shopper. The change should be given using as few coins as possible.
# Assume that the machine is loaded with pennies, nickels, dimes, quarters, loonies and toonies.

# chiedere input resto dell'utente in int
# 

ch = int(input("Due change: "))


def due(ch):
    tc = ch // 200
    tr = ch % 200
    if tc >= 1:
        print(str(tc) + " toonies")
    lc = tr // 100
    lr = tr % 100
    if lc >= 1:
        print(str(lc) + " loonies")
    qc = lr // 25
    qr = lr % 25
    if qc >= 1:
        print(str(qc) + " quarters")
    dc = qr // 10
    dr = qr % 10
    if dc >= 1:
        print(str(dc) + " dimes")
    nc = dr // 5
    nr = dr % 5
    if nc >= 1:
        print(str(nc) + " nickels")
    pc = nr // 1
    if pc >= 1:
        print(str(pc) + " pennies")


print("Due change will be given as per : ")
due(ch)