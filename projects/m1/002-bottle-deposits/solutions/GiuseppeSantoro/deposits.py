
# small_container < 1 liter
small_container = 7

# medium_container = 1 liter
medium_container = 18

# big_container > 1 liter
big_container = 15

refound_small = round((7*0.10),2)
print("$",refound_small)

refound_medium = round((18*0.10),2)
print("$",refound_medium)

refound_big = round((15*0.25),2)
print("$",refound_big)

refound_total = round((refound_small+refound_medium+refound_big),2)
print("$",refound_total)