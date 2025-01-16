def to_jaden_case(string):
    words = string.split(" ")
    list1 = []
    for i in words: 
        list1.append(i.capitalize())
    return " ".join(list1)

#
#

def stray(arr):
    list1 =[]
    for num in arr:
        if arr.count(num) == 1:
            return num
        
        
        
# join function takes a simbol and puts it in between all elements 
# replace takes two simboles and replaces every x simbol with y
