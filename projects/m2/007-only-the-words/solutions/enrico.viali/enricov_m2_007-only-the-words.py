"""."""


import re

PUNCT = r"[.,;:?!'’]+"
REGEX = r"^"+PUNCT+"|"+PUNCT+"$"

def sostituisci(s):
    """approccio implicato dall'esercizio"""   
    return  [ re.sub(REGEX, ' ', w) for w in s.split()]

if __name__ == "__main__":
    test1 = "Contractions include: don’t, isn’t, and wouldn’t."
    test2 = ",.:!?prova...microfono!?:; prova... ok?!"

    test1_r = ' '.join(sostituisci(test1))
    test2_r = ' '.join(sostituisci(test2))

    print("-"*40,"\n",test1,"\n", test1_r)
    print("-"*40,"\n",test2,"\n", test2_r)
