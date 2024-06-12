# VOWEL OR CONSONANT
# Individua se la lettera inserita è una vocale o una consonante.
 
lettera= str(input)
 
if lettera== str('a') or lettera== str('e') or lettera== str('i') or lettera== str('o') or lettera== str('u'):
    print(lettera, 'is a vowel!')
elif lettera== str('y'):
    print(lettera, 'solmetimes is a vowel, sometimes is a consonant.')
else:
    print(lettera, 'in a consonant!')