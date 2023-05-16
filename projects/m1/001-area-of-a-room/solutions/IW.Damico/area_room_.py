from builtins import input

def area_room(w, h):
    area = w*h
    return area

if __name__ == "__main__":
  w = int(input("lunghezza stanza"))
  h = int(input("larghezza stanza "))
  print(area_room(w,h))
