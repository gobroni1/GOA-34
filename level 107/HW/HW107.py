def n_and_len_n (n,*args):
    sum = 0
    sum += max(args)
    args.remove(sum)
    sum+= max(sum)
    return sum 


def does_it_reapit (ls):
    t = {key: 0 for key in ls}
    for i in ls:
        for j in ls:
            if i == j:
                t[i] += 1
                ls.remove(j)
    return max(t, key=t.get)

print(does_it_reapit([1,2,4,7,4]))
