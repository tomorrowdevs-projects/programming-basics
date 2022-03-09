#   I before E except after C
import sys
ie_word = []
ei_word = []
violate_the_rule = []
follow_the_rule = []

if len(sys.argv) < 1:
   print('The command line argument is omitted.')  

else:
    # Characteristics of words and list creation
        with open(sys.argv[1],'r') as f:
          for word in f:
              if word.isalpha():
                  word = word.lower()
                  if 'ie' in word and word not in ie_word:
                      ie_word.append(word)
                  elif 'ei' in word and word not in ei_word:
                      ei_word.append(word)    
                   
    # let's see if they respect the rule
for word in ie_word:
 index = word.index('ie')
 if index -1 != 'c':
    violate_the_rule.append(word)
 else:
    follow_the_rule.append(word)    

for word in ei_word:
  index = word.index('ie')
  if index -1 != 'c':
    violate_the_rule.append(word)
  else:
    follow_the_rule.append(word) 

print(violate_the_rule)
print(follow_the_rule)
print(f'The first is  {len(violate_the_rule)} long and the second is {len(follow_the_rule)} long')






          
