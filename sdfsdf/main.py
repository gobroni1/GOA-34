import random

# Create an environment with a simple grid (3x3)
grid_size = 3
states = [(x, y) for x in range(grid_size) for y in range(grid_size)]
actions = ['up', 'down', 'left', 'right']

# Reward function (for simplicity)
def reward(state, action):
    if state == (2, 2):  # Reaching the goal
        return 10
    else:
        return -1

# Initialize Q-table (a form of dynamic memory to store agent's experience)
Q = {}
for state in states:
    Q[state] = {action: 0 for action in actions}  # Initially, no preference for any action

# The agent explores the environment
def choose_action(state):
    # Exploration: Random action
    return random.choice(actions)

# Ensure the next state is within bounds
def get_next_state(state, action):
    if action == 'up' and state[1] < grid_size - 1:
        return (state[0], state[1] + 1)
    elif action == 'down' and state[1] > 0:
        return (state[0], state[1] - 1)
    elif action == 'left' and state[0] > 0:
        return (state[0] - 1, state[1])
    elif action == 'right' and state[0] < grid_size - 1:
        return (state[0] + 1, state[1])
    else:
        return state  # If the action goes out of bounds, stay in the current state

# Learning process
def update_q(state, action, reward, next_state):
    learning_rate = 0.1
    discount_factor = 0.9
    best_next_action = max(Q[next_state], key=Q[next_state].get)  # Best action in the next state
    Q[state][action] = Q[state][action] + learning_rate * (reward + discount_factor * Q[next_state][best_next_action] - Q[state][action])

# Simulate the agent moving through the grid
current_state = (0, 0)
for episode in range(1000):
    action = choose_action(current_state)
    next_state = get_next_state(current_state, action)  # Get the next valid state
    reward_value = reward(next_state, action)
    update_q(current_state, action, reward_value, next_state)
    current_state = next_state  # Move to the next state

    # Print the Q-table periodically
    if episode % 100 == 0:
        print(f"Q-table after {episode} episodes:")
        print(Q)
