def vocaleConsonante():
    '''Determina se la lettera inserita è una vocale, una consonante o una y'''
    lettera = input('Inserisci una lettera alfabetica ')
    if lettera in ('a', 'e', 'i', 'o', 'u'):
        print('La lettera inserita è una vocale')
    elif lettera in ('b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','w','z'):
        print('La lettera inserita  è una consonante')
    elif lettera =='y':
        print('La lettera inserita  è talvolta una vocale e talvolta una consonante')
    else:
        print("Carattere non valido")
    return

if __name__=='__main__':
    vocaleConsonante()