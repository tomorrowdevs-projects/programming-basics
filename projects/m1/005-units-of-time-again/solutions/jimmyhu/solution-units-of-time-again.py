input_seconds = int(input("please enter the time in seconds "))
seconds = input_seconds % 60
minute = (input_seconds / 60) % 60
hour = ((input_seconds / 60) / 60) % 24
days = ((input_seconds / 60) / 60) / 24
print("%02d" %days + ":" + "%02d" %hour + ":" + "%02d" %minute + ":" + "%02d" %seconds)