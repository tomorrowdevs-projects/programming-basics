
request_bread_fresh = int(input('How many loaves from today do you want?'))
request_bread_old = int(input('How many loaves from yesterday do you want?'))

price_loave = 3.49

loaves_fresh = (request_bread_fresh*price_loaves)

print(f'The amount for the fresh loaves is = {loaves_fresh}$')

#Calcolo del prezzo del pane di ieri con il 60% di sconto

loaves_old = loaves_fresh-(loaves_fresh/100*60)

print(f'The amount for the old loaves is = {loaves_old:.2f}$')

print(f'The total is {loaves_fresh+loaves_old:.2f}$')