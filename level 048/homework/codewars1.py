def alphabet_position(text):
    # Remove spaces and convert to lowercase
    text = text.replace(" ", "").lower()
    # Define the alphabet dictionary with positions starting from 0
    alphabet_dict = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9,
        'k': 10,
        'l': 11,
        'm': 12,
        'n': 13,
        'o': 14,
        'p': 15,
        'q': 16,
        'r': 17,
        's': 18,
        't': 19,
        'u': 20,
        'v': 21,
        'w': 22,
        'x': 23,
        'y': 24,
        'z': 25
    }
    ls = []
    for i in text:
        if i in alphabet_dict:  # Only process alphabetic characters
            ls.append(str(alphabet_dict[i]+1))
    return " ".join(ls)