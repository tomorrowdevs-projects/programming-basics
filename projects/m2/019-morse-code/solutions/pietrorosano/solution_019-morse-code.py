print("\nEnter your input")
user_input = input()
lower_string = user_input.lower()
morse_code = {"a":"._", "b":"_...", "c":"_._.", "d":"_..", "e":".", "f":".._.", "g":"__.", "h":"....", "i":"..", "j":".___", "k":"_._", "l":"._..", "m":"__", "n":"_.", "o":"___", "p":".__.", "q":"__._", "r":"._.", "s":"...", "t":"_", "u":".._", "v":"..._", "w":".__", "x":"_.._", "y":"_.__", "z":"__..", "à":".__._", "é":".._..", "1":".____", "2":"..___", "3":"...__", "4":"...._", "5":".....", "6":"_....", "7":"__...", "8":"___..", "9":"____.", "0":"_____"}

keys = list(morse_code.keys())
values = list(morse_code.values())

for l in lower_string:
    if l in keys:
        print(values[keys.index(l)], end= "")
    else:
        print(l, end= "")