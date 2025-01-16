def count(s):
    my = {}
    for i in s:
        my[i] = my.get(i,0) +1 
    return my

#2

def order(sentence):
    # Split the sentence into words
    words = sentence.split()
    
    # Sort the words based on the number found in each word
    sorted_words = sorted(words, key=lambda word: int(''.join(filter(str.isdigit, word))))
    
    # Join the sorted words back into a single string
    return " ".join(sorted_words)