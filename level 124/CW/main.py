def set_alarm(employed, vacation):
    return employed and not vacation

def comp(a, b):
    if a is None or b is None:
        return False
    return sorted([x ** 2 for x in a]) == sorted(b)

def update_light(current):
    if current == "green":
        return "yellow"
    elif current == "yellow":
        return "red"
    elif current == "red":
        return "green"
    else:
        return "Invalid input"
