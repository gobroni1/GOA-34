def filter_odd (ls):
    ls2 = []
    for i in ls:
        if i % 2 == 0:
            ls2.append(i)
    return ls2