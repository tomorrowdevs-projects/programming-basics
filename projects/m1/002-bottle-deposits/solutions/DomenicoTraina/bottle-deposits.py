             
smallbottle= int(input ("Enter number of bottle <= 1 Litre: ")) 
bigbottle= int(input ("Enter number of bottle > 1 Litre: "))

                ##calcolo rimborso per le due categorie
refundsmallbottle=smallbottle*0.10
refundbigbottle=bigbottle*0.25

                ##visualizzo risultati
print ("The small bottle refund is {} $" .format(refundsmallbottle))
print ("The big bottle refund is {} $" .format(refundbigbottle))
print ("Total refund is {} $" .format(refundsmallbottle+refundbigbottle))