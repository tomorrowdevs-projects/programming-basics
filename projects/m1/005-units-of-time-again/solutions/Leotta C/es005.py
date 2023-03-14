s=int(input("inserisci il n. di secondi: "))
d= s // (24*3600)
s= s-d*24*3600
h= s // 3600
s = s - h*3600
m= s // 60
s= s - 60*m

if h<10 : h=f"0{h}"
if m<10 : m=f"0{m}"
if s<10 : s=f"0{s}"

print(f"D:HH:MM:SS = {d}:{h}:{m}:{s}")