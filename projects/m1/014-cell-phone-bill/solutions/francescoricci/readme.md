# Analisi dei requisiti

Bolletta del telefono cellulare Un particolare piano telefonico include 50 minuti di 
tempo di trasmissione e 50 messaggi di testo per € 15,00 al mese.
Ogni minuto aggiuntivo di tempo di trasmissione costa € 0,25, mentre i messaggi di
testo aggiuntivi costano € 0,15 ciascuno.
Tutte le bollette del telefono cellulare includono un costo aggiuntivo di € 0,44
per sostenere i call center del 911, e l'intera bolletta (compreso il costo del 911)
è soggetta al 5 per cento di imposta sulle vendite.
Scrivi un programma che legga il numero di minuti e messaggi di testo usati in un mese
dall'utente. 
Visualizzare il costo di base, i minuti aggiuntivi (se presenti), i messaggi di testo 
aggiuntivi (se presenti), il costo del 911, le tasse e l'importo totale della bolletta.
Visualizza solo gli addebiti dei minuti aggiuntivi e dei messaggi di testo se l'utente 
ha sostenuto costi in queste categorie. Assicurati che tutti gli addebiti siano visualizzati
utilizzando 2 cifre decimali.


base phone plan
1. voice_plan_minutes = 50
2. sms_plan_qty = 50
3. phone_plan = 15.00

extra phone plan
4. voice_extraplan_minutes = 0
5. sms_extraplan_qty = 0
6. voice_extraplan_price = 0.25
7. sms_extraplan_price = 0.15

phone plan additional charges
8. emergency911_fee = 0.44
9. tax = 5 / 100


1. read total voice minites of one month
2. read total sms of one month


1. See plane_base_price and see extra minutes and sms is present. 
2. calculate voice_extra and if present see value
3. calculate sms_extra and if present see value
4. see 911 price value
5. see tax value
6. see charges voice price if voice extra are present
7. see charges sms price if sms extra are present


# Cell Phone Bill

A particular cell phone plan includes 50 minutes of air time and 50 text messages for € 15.00 a month. 
Each additional minute of air time costs € 0.25, while additional text messages cost € 0.15 each. 
All cell phone bills include an additional charge of € 0.44 to support 911 call centers, and the entire bill (including the 911 charge) is subject to 5 percent sales tax.
Write a program that reads the number of minutes and text messages used in a month from the user. Display the base charge, additional minutes charge (if any),
additional text message charge (if any), the 911 fee, tax and total bill amount. 
Only display the additional minute and text message charges if the user incurred costs in these categories. 
Ensure that all of the charges are displayed using 2 decimal places.

# Documentation

For this project solution you may use:

- Variables, expressions, statements
- Conditionals and recursion
- Iteration
- Strings

# Deadline

This project requires to be completed in a maximum of **2 hours**


# The output run code

Run code 1
```
C:\Users\user\AppData\Local\Programs\Python\Python310\python.exe "C:/Users/user/Desktop/tommorowdevs-github/Repo TD/programming-basics/projects/m1/014-cell-phone-bill/solutions/francescoricci/014-cell-phone-bill.py"
Your phone plan includes 50 minutes and 50 sms.Its price is 15.00 €
Extra voice minutes: 10
There are extra charges in your phone plan this month

Total bill amount: 17.50 €

Process finished with exit code 0
```
Run code 1
```
C:\Users\user\AppData\Local\Programs\Python\Python310\python.exe "C:/Users/user/Desktop/tommorowdevs-github/Repo TD/programming-basics/projects/m1/014-cell-phone-bill/solutions/francescoricci/014-cell-phone-bill.py"
Your phone plan includes 50 minutes and 50 sms.Its price is 15.00 €
Extra sms: 10
There are extra charges in your phone plan this month

Total bill amount: 16.50 €

Process finished with exit code 0
```
Run code 3
```
C:\Users\user\AppData\Local\Programs\Python\Python310\python.exe "C:/Users/user/Desktop/tommorowdevs-github/Repo TD/programming-basics/projects/m1/014-cell-phone-bill/solutions/francescoricci/014-cell-phone-bill.py"
Your phone plan includes 50 minutes and 50 sms.Its price is 15.00 €
Extra voice minutes: 25
Extra sms: 40
There are extra charges in your phone plan this month

Total bill amount: 27.25 €

Process finished with exit code 0
```
Run code 4
```
C:\Users\user\AppData\Local\Programs\Python\Python310\python.exe "C:/Users/user/Desktop/tommorowdevs-github/Repo TD/programming-basics/projects/m1/014-cell-phone-bill/solutions/francescoricci/014-cell-phone-bill.py"
Your phone plan includes 50 minutes and 50 sms.Its price is 15.00 €
There are no extra charges in your phone plan this month

Total bill amount: 15.00 €

Process finished with exit code 0

```

Run code 5 after remove hard code
```
C:\Users\user\AppData\Local\Programs\Python\Python310\python.exe "C:/Users/user/Desktop/tommorowdevs-github/Repo TD/programming-basics/projects/m1/014-cell-phone-bill/solutions/francescoricci/014-cell-phone-bill.py"
Enter minutes used in mounth: 75
Enter sms used in mounth: 90
Your phone plan includes 50 minutes and 50 sms.Its price is 15.00 €
Extra voice minutes: 25
Extra sms: 40
There are extra charges in your phone plan this month

Total bill amount: 27.25 €

Process finished with exit code 0
```
