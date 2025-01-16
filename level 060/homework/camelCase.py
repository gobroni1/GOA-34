def camel_case(s):
    word_ls = s.split()
    ls = []
    for i in word_ls:
        ls.append(i.capitalize())
    return "".join(ls)


