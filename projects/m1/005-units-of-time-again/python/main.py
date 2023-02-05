#Take input from users in second
total_seconds = int(input("Enter an amount of seconds: ")) 

#inizialize variable
days = 0
hours = 0
minutes = 0
seconds = 0

 
# I take the days starting from the total seconds (1 day = 86400 seconds)
days = total_seconds // 86400 #in this step the // round down
total_seconds = total_seconds % 86400 #i carry with me the rest that is less than 1 day (also is true for other steps)

# I take the hours starting from the total seconds (1 hours = 3600 seconds)
hours = total_seconds // 3600
total_seconds = total_seconds % 3600

# I take the minutes starting from the total seconds (1 minutes = 60 seconds)
minutes = total_seconds // 60
total_seconds = total_seconds % 60

# The rest of total_seconds remained are seconds
seconds = total_seconds

# Print the result using zfill for hours, minutes and seconds so i can use 0 for a total of 2 digits.
print(days, str(hours).zfill(2), str(minutes).zfill(2), str(seconds).zfill(2))