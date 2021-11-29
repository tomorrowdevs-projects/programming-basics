




#contatore anni cani
anni_canini=0
#input anni umani
anniumani=int(input("anni umani: "))
# scrivo le 3 casistiche
if anniumani>2:
   anni_canini+=(10.5*2)+(4*(anniumani-2))
   print(anni_canini) 

if anniumani<=2 and anniumani > 0:
   anni_canini+=10.5*anniumani
   print(anni_canini)

if anniumani<=0:
   print("error years")
         
