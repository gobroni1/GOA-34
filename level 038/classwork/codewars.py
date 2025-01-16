#1
def is_divisible(n,x,y):
    return n % x == 0 and n% y == 0

#2
def array_plus_array(arr1,arr2):
    sum = 0
    for i in range(len(arr1)):
        sum += arr1[i] + arr2[i]
    return sum 
    
#3
def feast(beast, dish):
    # Check if the first and last letters of the beast and dish match
    return beast[0] == dish[0] and beast[-1] == dish[-1]

#4
def say_hello(name, city, state):
    # Join the name array into a single string with spaces
    full_name = ' '.join(name)
    # Create the welcome message
    return f"Hello, {full_name}! Welcome to {city}, {state}!"

#5
def points(games):
    points = 0
    for match in games:
        x, y = map(int, match.split(':'))
        if x > y:
            points += 3  # Win
        elif x == y:
            points += 1  # Tie
        # No points for a loss
    return points