#how to convert number of seconds to days, hours, minutes and seconds!



#input
Hi= print("Hi buddy!Are you here again for waste some time?man,I'm in! but let's change the game!This time you type the seconds, and I give you back days, hours, and minutes")
S= float(input("are you ready? give me your seconds!"))



 
#Define input
Sxm= 60
Sxh= 3600
Sxd= 86400
 

 
#Calculate the days, hours, minutes and seconds
D= float(int(S/Sxd))
D_rest=float(int(S% Sxd))
FD= float(int("%d"%D))

H= float(int(D_rest/Sxh))
H_rest=float(int(D_rest%Sxh))
FH= float(int("%d"%H))

M= float(int(H_rest/Sxm))
FM= float(int("%d"%M))

S= float(int(H_rest %Sxm))



 
#Display the result
print("Here your time result:", "\n Days" , FD , "\n Hours", FH,"\n Minutes", FM , "\nAAAAAAAAAAAND......SECONDS", S )