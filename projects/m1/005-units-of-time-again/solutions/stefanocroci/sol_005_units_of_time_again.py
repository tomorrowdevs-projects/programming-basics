# Ask the user for number of seconds
tot_seconds = int(input('Insert total seconds: '))

# Converts seconds in days, hours, minutes

d = tot_seconds // (24 * 60 * 60)
d_rest = tot_seconds % (24 * 60 * 60)
h = d_rest // (60 * 60)
h_rest = d_rest % (60 * 60)
m = h_rest // (60)
m_rest = h_rest % (60)
s = m_rest

# Format variables with two digit with leading zeros
h = "{:02d}".format(h)
m = "{:02d}".format(m)
s = "{:02d}".format(s)

# Display the results
print('The equivalent amount of time is:')
print(str(d) + ':' + h + ':' + m + ':' + s)