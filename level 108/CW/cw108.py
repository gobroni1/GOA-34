def first_non_repeating_element(sequence):
    freq = {}

    for i in sequence:
        freq[i] = freq.get(i, 0) + 1

    for i in sequence:
        if freq[i] == 1:
            return i

    return False
