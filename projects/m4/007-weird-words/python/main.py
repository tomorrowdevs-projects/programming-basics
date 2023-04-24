import sys

try:
    
    file = open(sys.argv[1],'r')

    words_follow_rule = set()
    words_violate_rule = set()

    for line in file:
        words = line.split()
        for w in words:
            w = w.upper()
            if "EI" in w:
                if "C" in w:
                    if w.index("EI")-1==w.index("C"):
                            #case: CEI: follow rule
                            words_follow_rule.add(w)
                    else:
                        #case: EI in word without an immediately preceding C: violate rule
                        words_violate_rule.add(w)
                else:   
                        #case: EI without C in word: violate rule               
                        words_violate_rule.add(w)
            elif "IE" in w:
                if "C" in w:
                    if w.index("IE")-1==w.index("C"):                    
                            #case: CIE: violate rule
                            words_violate_rule.add(w)
                    else:
                            #case: IE without an immediately C in word: follow rule
                            words_follow_rule.add(w)
                else:
                    #case: IE without C in word: follow rule               
                    words_follow_rule.add(w)
                    
    
    print(f"FOLLOWING RULE: {len(words_follow_rule)}")
    for word in words_follow_rule:
        print( f"{word}")

    print(f"VIOLATING RULE: {len(words_violate_rule)}")
    for word in words_violate_rule:
        print( f"{word}")    

    
    file.close()
except FileNotFoundError:
    print("File not founded")
except IndexError:
    print("Command line argument (file name) is omitted")