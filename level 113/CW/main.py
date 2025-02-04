def greet(name):
    if name == "Johnny":
        return "Hello, my love!"
    else:
        return "Hello, {name}!".format(name=name)
    

def reverse_words(s):
    ls = []
    ls = s.split()
    ls = ls[::-1]
    return " ".join(ls)