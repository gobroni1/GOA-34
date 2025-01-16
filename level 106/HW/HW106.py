def to_underscore(t: str) -> str:
    ls = ["1", "2", "3", "4", "5", "6", "7", "8","9","0"]
    if t in ls:
        return t
    ltts =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    words = []
    temp = []
    t= str(t)
    if t[0] not in ls:
        t = t[:1].lower() + t[1:]

    for i in t:
        if i in ltts:
            words.append("".join(temp))
            temp = []
        temp.append(i)
    words.append(("".join(temp)).lower())
    return ("_".join(words)).lower()


#უაზრობაა მაგრამ მუშაობს 

def is_sorted_and_how(arr):
    if arr == sorted(arr):
        return "yes, ascending" 
    elif arr == sorted(arr, reverse=True):
        return "yes, descending"
    else:
        return "no"

#ეს კარგია


#ბოლო .js შია


gg = []

arr1 = [1, 0, 2]
arr2 = ["x", "y", "z"]

for i in range (len(arr1)):
    gg.append(arr2[arr1[i]])
    
print(gg)