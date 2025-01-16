import pygame
import sys

# Initialize pygame
pygame.init()

# Screen dimensions
WIDTH, HEIGHT = 1920, 1000

# Colors
WHITE = (255, 255, 255)
RED = (255, 0, 0)
BLUE = (0, 0, 255)

# Square properties
square_size = 50
square_x = WIDTH // 2
square_y = HEIGHT // 2
square = pygame.Rect(square_x, square_y, square_size, square_size)

# Object properties
o1_x, o1_y = 550, 930
ob1 = pygame.Rect(o1_x, o1_y, 100, 40)

# Physics properties
gravity = 0.5
jump_speed = -15
square_velocity_y = 0

# Screen setup
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Move the Square")
clock = pygame.time.Clock()

w_pressed = False
# Game loop
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    # Apply gravity
    square_velocity_y += gravity
    square.y += int(square_velocity_y)

    # Jump logic
    keys = pygame.key.get_pressed()
    if keys[pygame.K_SPACE] and not w_pressed:
        w_pressed = True
        square_velocity_y = jump_speed
    if not keys[pygame.K_SPACE]:
        w_pressed = False
    
    temp = square.copy()
    
    # Movement logic
    if keys[pygame.K_LEFT] or keys[pygame.K_a]:
        square.x -= 5

    if keys[pygame.K_RIGHT] or keys[pygame.K_d]:
        square.x += 5
            
    # Apply gravity and check collision for vertical movement
    temp = square.copy()
    temp.y += int(square_velocity_y)

    if not temp.colliderect(ob1):  # Check collision with ob1
        square.y += int(square_velocity_y)  # Only move the real square if no collision
    else:
        if square_velocity_y > 0:  # Falling
            square.y = ob1.top - square.height  # Snap to the top of the object
        square_velocity_y = 0  # Stop vertical movement
        
    # Prevent the square from going off-screen
    square.x = max(0, min(WIDTH - square_size, square.x))
    square.y = max(0, min(HEIGHT - square_size, square.y))

    # Drawing
    screen.fill(WHITE)
    pygame.draw.rect(screen, BLUE, ob1)  # Draw the object
    pygame.draw.rect(screen, RED, square)  # Draw the square
    pygame.display.flip()
    
    # Limit frame rate
    clock.tick(60)
