def comfortable_word(word):
    r = ["y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m"]
    l = ["q", "w", "e", "r", "t", "a", "s", "d", "f", "g", "z", "x", "c", "v", "b"]
    
    for i in range(len(word) - 1):

        if (word[i] in l and word[i+1] in l) or (word[i] in r and word[i+1] in r):
            return False
    
    return True 