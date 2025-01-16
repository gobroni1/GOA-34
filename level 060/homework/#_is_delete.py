def clean_string(s):
    ls = []
    for i in s:
        if i != "#":
            ls.append(i)
        elif i == "#" and ls:
            ls.pop()
            
    return "".join(ls)
print(clean_string("abc####d##c#"))