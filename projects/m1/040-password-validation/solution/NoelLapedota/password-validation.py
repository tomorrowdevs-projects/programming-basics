password=(input('Enter th password please...\n'))

def validation(q):
    if len(q) >= 8 and q.isalnum() and q.upper() not in q and q.lower() not in q:
          
        print('olè')
        return True
    else:
        print('Password is not good!')
validation(password)

