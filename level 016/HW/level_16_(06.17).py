#lists

fruit_list = ["apple","orange","banana","cherry"]
#print whole list
print (fruit_list)

#print item in place x
place = 3 
print(fruit_list[place])

#get lenght of the list (AKA number of items in it)
print (len(fruit_list))

#types of thing you can store in a list
list_1 = ["atring_1","string_2","string_3"]
list_2 = [1,2,3,4,5,6]
list_3 = [True,False,True,False]
list_4 = [1, "STRING", True]

#get the type of element used 
list_type = [1, "text", True, 36]
print(type(list_type))

#lisr() function
list_func = list(("apple", 3 , False, "text"))
 
#
#

#accsess list items 
#negative indexing
neg_list = ["text_0","text_1","text_2","text_3"]
print(neg_list[-1]) # -1 is the last item -2 is second to last and so on 

#range of index
ran_list = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(ran_list[2:5]) #2 is included but 5 is not 
#leaving firs black will make it start from the firs item (AKA item with index of 0)
print(ran_list[:4])
#leaving last one empty will make it go to the end of the list
print(ran_list[2:]) 

#negative indexing and :'s 
print (ran_list[-4:-1]) # AKA satarting from the forth element from the back and ending on the last element 

# lits in if statment 

if "apple" in ran_list:
    print("apple is in the list")
    
#
#

#change item value 
ch_list = ["apple", "banana", "cherry"]
ch_list[1] = "blackcurrant" #replases"banana" with "blackcurrant"
print(ch_list) 

#change a range of ttem values
ch_list = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
ch_list[1:3] = ["blackcurrant", "watermelon"] #replases "banana" and "cherry" (remember item with idex of 3 is not included) with "blackcurrant" and "watermelon"
print(ch_list)

#adding values by replasing one with two 
add_list = ["apple", "banana", "cherry"]
add_list[1:2] = ["blackcurrant", "watermelon"]
print(add_list)

# replasing two with one 
rep_list = ["apple", "banana", "cherry"]
rep_list[1:3] = ["watermelon"]
print(rep_list)

# .insert()
in_list = ["apple", "banana", "cherry"]
in_list.insert(2, "watermelon") #it adds value in the position of witch index is written
print(in_list)

#remove list items
rem_list = ["apple","banana","cherry"]
rem_list.remove("banana") #you have to use the name of the item or rem_list[x] 
print(rem_list)

#pop 
pop_list = ["apple","banana","cherry"]
pop_list.pop(1) #this removes item using the index of it (same as list[x] does)
print(pop_list)

# del also removes using indexes 
del__list = ["apple","banana","cherry"]
del del__list[1]
print(del__list)

# clear() empyes the list 
cl_list = ["apple","banana","cherry"]
cl_list.clear()
print(cl_list)
