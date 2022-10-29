# Inserire numero bottiglie da un litro o meno
print("number of small bottle inserted:")
small_bottle = int(input())

# Inserire numero bottiglie da più di un litro
print("number of big bottle inserted:")
big_bottle = int(input())

# rcalcolo rimborso
refund_small_bottle = small_bottle * 0.10
refund_big_bottle = big_bottle * 0.25
total_refund = refund_small_bottle + refund_big_bottle

# stampa rimborso totale
if(total_refund < 1):
    print("Congratulation! Your total refund is: " + str(int(total_refund * 100)) + " cents")
else:
    print("Congratulation! Your total refund is: $" + str(round(total_refund, 2)))