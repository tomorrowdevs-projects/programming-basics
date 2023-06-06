import random
def get_pass():
    result = ''
    gen = random.randint(7,10)
    for i in range(gen):
          randomChar = chr (randint(33,126))
          result = result   + randomChar
    return result

print('get_pass()')