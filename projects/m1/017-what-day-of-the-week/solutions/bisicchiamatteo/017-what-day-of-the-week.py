#inserimento anno  
CONF_YEAR=1000
POS_DAYS=5
days_week= ["Sunday","Monday","Tuesday","Wednesday" ,"Thursday","Friday","Saturday"]
year=int(input("inserisci l'anno :"))
val_giorno=int(((year-CONF_YEAR)+((year-CONF_YEAR)/4))%7)
pos_day_tmp= (val_giorno+POS_DAYS)
if (pos_day_tmp>7):
    pos_day_tmp= pos_day_tmp-7

#uscita valori
print ("il giorno 1 gennaio del " + str(year) + " e' " + days_week[pos_day_tmp])