#1 

list_l = ["gio","tekla","luka","temo"]

for x in list_l:
    if "o" in x:
        print(x + " has o in it")

#2
list1_l = ["gio","tekla","luka","temo"]
list2_l = []
list3_l = []
for x in list1_l:
    if len(x) == 3:
        list2_l.append(x)
        print(x + " is added to the list because it is three vharacters long")
    elif len(x) == 4:
        list3_l.append(x)
        print(x + " is added to the list because it is four vharacters long")
        
#3