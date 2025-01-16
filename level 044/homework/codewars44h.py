def pig_it(text):
    punctuation_marks = "!?.,:;'\"-()[]{}<>@#$%^&*~"
    ls = text.split(" ")
    ls2 = []
    
    for i in ls:
        if i in punctuation_marks:
            ls2.append(i)
        else:
            ls2.append(i[1:] + i[0] + "ay")
    
    return " ".join(ls2)

# Example usage:
print(pig_it("Hello world !"))  # Output: "elloHay orldway !"


#
#

def duplicate_count(text):
    text = text.lower()
    list1 = []
    list2 = []
    for letter in text:
        if letter not in list1:
            list1.append(letter)
        else:
            list2.append(letter)
    return len(tuple(set(list2)))


#
#

