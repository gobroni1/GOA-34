#print every number in between 0 - 20 
for i in range(20):
    print (i+1)
    if i == 20:
        break
    else:
        pass
    
#print first ten numbers 
for i in range (10):
    print (i)
    if i == 10:
        break
    else:
        pass

#print every even number in between 0 - 100
for i in range (100):
    
    if i % 2 == 0:
        print (i)

#get a number and get data about it 

x = int(input ("number pls: ") )
if x > 0 :
    print ("number is positive")
elif x < 0 :
    print ("number is negative")
else:
    print ("something went wrong") 
    
#18 yo manipulation 
#(just so you know virgin is someone who ghas never had intimate contact with anothor persone, not a persone whos under 18)

age = int(input ("what is you age?: "))

if age >= 18 :
    print ("you are an adolt")
else:
    print ("you are a virgin (in this case under 18), or something went wrong ") 
    
#week days based on inputs

y = int(input("choose a number in between 1 - 7: "))

if y > 7:
    y = 7
if y == 1:
    print ("MO")
elif y == 2: 
    print("TU")
elif y == 3:
    print("WE")
elif y == 4:
    print ("TR")
elif y == 5:
    print ("FR")
elif y == 6:
    print ("SA")
elif y == 7:
    print ("SU") 
else: 
    print ("eroor")