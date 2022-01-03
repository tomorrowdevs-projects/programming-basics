bread_price= 3.49
discount_bread_price=3.49*0.4 
number_old_breads = int (input ("how many pieces of old bread? "))

full_price=      bread_price*number_old_breads
total_discount=  discount_bread_price*number_old_breads
must_pay=        full_price-total_discount

print ("Price of bread is:            {} $".format(bread_price))
print (f"Full Price of old bread is:  {full_price:.2f} $")
print (f"Discount for {number_old_breads} pieces is:    {total_discount:.2f} $")
print (f"You must pay only:           {must_pay:.2f} $")
