def manual_sort (ls, n):
    ls2 = []
    for i in range (1,n):
        if i in ls: 
            ls2.append(i)
    return ls2