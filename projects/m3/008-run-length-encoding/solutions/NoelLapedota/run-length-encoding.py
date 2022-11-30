tv = ["A", "A", "A", "A", "A", "A", "A", "A", "A",
 "A", "A", "A", "B", "B", "B","B","A","A","A","A",
 "A","A","B"]
def run(date):
    # case base
    if len(date)  == 0:
        return date
    # Fn recursion
    else:
     count = 1
     for io in date:
         if count < len(date) and io == date[count]:
             count += 1
         else:
              hyup = [count,io]  
         return hyup + run(date[count])       

print(run(tv))




