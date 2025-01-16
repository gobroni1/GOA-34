# take a guess 
# is it lower or higher?
# how to guess second time?

import random

my_num = 5
AI_guess = None
ran = 10**10
time_guessed = 0

while my_num != AI_guess:
    AI_guess = random.randint(0,ran)
    print(AI_guess)
    time_guessed += 1
    if ran > AI_guess and AI_guess > my_num:
        ran = AI_guess
    
    
print(f"guesses {time_guessed}")
    
