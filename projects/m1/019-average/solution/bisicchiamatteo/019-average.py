PRICE=["4.95"," 9.95", "14.95", "19.95 ","24.95"]
i=0
while (i <= 4 ):
    discount=(float(PRICE[i])*0.6)
    new_price=float(PRICE[i])- discount
    print('prezzo originale ={:0.2f}, sconto={:0.2f}, prezzo scontato={:0.2f}'.format(float(PRICE[i]), discount, new_price))
    i=i+1
