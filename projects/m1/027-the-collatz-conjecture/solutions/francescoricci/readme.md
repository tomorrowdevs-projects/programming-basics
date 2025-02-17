# Resource
https://it.wikipedia.org/wiki/Congettura_di_Collatz

La congettura riguarda il seguente algoritmo:

1. Si prenda un intero positivo n.
2. Se n = 1, l'algoritmo termina.
3. Se n è pari, si divida per due; altrimenti si moltiplichi per 3 e si aggiunga 1.


# Pseudocode

read n </br>
loop while n is maior of 1 </br>
if n isEven n /= 2 </br>
else is odd then n = 3 * n + 1 </br>
exit from loop if n = 1 </br>


#The run of code

```

C:\Users\user\AppData\Local\Programs\Python\Python310\python.exe "C:/Users/user/Desktop/Repo TD/
programming-basics/projects/m1/027-the-collatz-conjecture/solutions/francescoricci/
027-the-collatz-conjecture.py"

6
3
10
5
16
8
4
2
1

Process finished with exit code 0


```
