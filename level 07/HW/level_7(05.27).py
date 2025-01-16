a = 10
b = 5 

test = a > b   #True    (if a is more than b)
#
test2 = a < b  #False   (if a is lesss than b)
#
test3 = a == b #False   (if a and b are equal)
#
test4 = a >= b #Treu    (if a is more than or qual to b)
#
test5 = a <= b #False   (is a is less than or equal to b)
#
test6 = a != b #True    (returnes False if a == b, else it returnes True )
#
print (test6)  


# test6 is same as 

if a == b: 
    print(False)
else: 
    print (True)
    
#
#

#when only one is True 

b = False    #False is same to say something like 5 < 1 or 3 > 10. so b = 5 < 1 is same     
c = True     #True is same as saying 5 == 5 or 8 > 6. so c = 9 > 4 is same

print (b and c) #when you use "and" is will not returne True if one statment is False 
print (b or c ) #when you use "or" it will returne True even when only one statment is True and othor is False

# when both are True 

d = 9 > 1 #True 
e = 4 < 6 #True

print (d and e)
print (d or e)

# what are "or" and "and" statments ? 



while 1 < 10:
 text_ = input("do you want ot knowe more about logical operators?: ")
 if text_ == "yes":
    print ("'or' will returne True if one of many inputs are True, False if every single input is False and same for True.")
    print ("'and' will returne False if one of many inputs are False and True if every single input is True")
    break
 elif text_ == "no":
    print ("hmm.. I thought you wanted to learn... try again, I think you miss typed :) ")
    
 else:
    print ("this is yes or no question")
    
