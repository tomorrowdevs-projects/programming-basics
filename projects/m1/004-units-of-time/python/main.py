# data introduction ( days ,hours,minutes,seconds)
Hi= print("Hi buddy!we are wasting time together, so why not having fun and calculate it in seconds?")
D= float(input("how many days?"))
H= float(input("and the hours?"))
M= float(input("what about minutes?"))
S= float(input("just another one...seconds?"))

##data definition "secondo for"
Sxm=60
Sxh= 3600
Sxd=86400

###Calculate the days, hours, minutes and seconds
Tot_Sxd= D*Sxd
Tot_Sxh= H*Sxh
Tot_Sxm=M*Sxm
Tot_Sec=S+Tot_Sxd+Tot_Sxh+Tot_Sxm


#Display the result
print("Here is your total time #humblebrag ","%d"%(Tot_Sec))