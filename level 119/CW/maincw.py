def multi_table(number):
    return "\n".join(f"{i} * {number} = {i * number}" for i in range(1, 11))

def is_flush(cards):
    return len(set(card[-1] for card in cards)) == 1

def wave(people):
    ls = []
    for i in range(len(people)):
        if people[i] != ' ':
            pop = people[:i] + people[i].upper() + people[i+1:]
            ls.append(pop)
    return ls