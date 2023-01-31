from random import choice

coin_faces = ('H', 'T')


total_heads = 0
total_tails = 0

z = 0
x = 0
y = 0

total_flips = 0
flips = 0

#------------------------------#   
   
for el in range(10):
   
   
    while(True):
       
       
        z = choice(coin_faces)
        flips += 1
        print(z, end = " ")
       
        if z == 'H':
            x += 1
            y = 0
            if x == 3:
                print(f"({flips} flips)")
                total_flips += flips
                flips = 0
                break
             
   
        if z == 'T':
            x = 0
            y -= 1
            if y == -3:
                print(f"({flips} flips)")
                total_flips += flips
                flips = 0
                break
               
               
average = total_flips/10
print(" ")
print(f"Average: {average} flips were needed.")   