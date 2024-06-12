"""
Your program should read a message from the user. Then it should translate all of
the letters and digits in the message to Morse code, leaving a space between each sequence of dashes and dots. 
Your program should ignore any characters that are not listed in the previous table. 

The Morse code for Hello, World! is shown below:
.... . .-.. .-.. --- .-- --- .-. .-.. -..

"""
 	 	 	 		


morse_code = {"a":"._", "b":"_...", "c":"_._.", "d":"_..", "e":".", "f":".._.", "g":"__.", "h":"....", "i":"..", "j":".___", "k":"_._",
             "l":"._..", "m":"__", "n":"_.", "o":"___", "p":".__.", "q":"__._", "r":"._.", "s":"...", "t":"_", "u":".._", "v":"..._", 
             "w":".__", "x":"_.._", "y":"_.__", "z":"__..", "à":".__._", "é":".._..", "1":".____", "2":"..___", "3":"...__", "4":"...._",
             "5":".....", "6":"_....", "7":"__...", "8":"___..", "9":"____.", "0":"_____"}


sentence = "Hello, World!".lower()
output = ""
for ch in sentence:
    if ch in morse_code.keys():
        output += morse_code[ch] + " "
    else:
        continue
print(output)

