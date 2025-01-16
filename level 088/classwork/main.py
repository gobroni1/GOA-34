def validate_pin(pin):
    if len(pin) == 4 and pin.isnumeric():
        return True
    elif len(pin) == 6 and pin.isnumeric():
        return True
    else:
        return False        


def solution(number):
    return sum([i for i in range(number) if i % 3 == 0 or i % 5 == 0])
  