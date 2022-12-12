---
layout: default
title: Home
nav_order: 1
description: "This is the website you go to if you want to know who Tony Le is." 
permalink: /
---

# Welcome to my humble abode
{: .fs-9 }

I am a Master of IT student at [UNSW](https://www.unsw.edu.au). You may also know me from [USYD](https://www.sydney.edu.au), where I dabbled in Medical Physics, or [ANU](https://www.anu.edu.au), where I majored in Astronomy. 
{: .fs-6 .fw-300 }

I run [coding and robotics classes](/teaching) in Sydney where I help primary school students develop their problem-solving capability, communication skills and programming ability. 
{: .fs-6 .fw-300 }

When I'm not collecting degrees, or teaching in the classroom, I like to keep busy with [unimportant nonsense]() in the company of friends and family.
{: .fs-6 .fw-300 }

[Connect on LinkedIn](https://www.linkedin.com/in/tonyfle){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2}
[View GitHub Projects](https://github.com/tfle){: .btn .fs-5 .mb-4 .mb-md-0}

```python
#--------- STEP 1 | SET UP -----------#
import random
import time
 
while True:
 #--------- STEP 2 | PRINT ASCII ART -----------#
    print(r"""
  _______ _            ___  __    _____                      
 |__   __| |          |__ \/_ |  / ____|                     
    | |  | |__   ___     ) || | | |  __  __ _ _ __ ___   ___ 
    | |  | '_ \ / _ \   / / | | | | |_ |/ _` | '_ ` _ \ / _ \
    | |  | | | |  __/  / /_ | | | |__| | (_| | | | | | |  __/
    |_|  |_| |_|\___| |____||_|  \_____|\__,_|_| |_| |_|\___|
                                                             
                                                             
    """)
 
    current_number = 1
    
 # Human or Computer? ---------------------#

    if random.randint(0, 1) == 0:
        current_player = "human"
    else:
        current_player = "computer"
 
#--------- STEP 3 | MAIN WHILE LOOP -------------------#

    while current_number <= 21:
 
        print("The current number is " + str(current_number) + ".")
        print()
        
#---------- STEP 4 | PLAYERS TURN ---------------------#

        if current_player == "human":
 
            print("Add 1, 2, or 3. Do not pass 21. The player who lands on 21 loses.")
 
            player_choice = ""
            while player_choice not in ["1", "2", "3"]:
                player_choice = input("What will you add? ")
 
            player_choice = int(player_choice)
            current_number = current_number + player_choice
            print()
 
            if current_number >= 21:
                print("The current number is " + str(current_number) + ".")
                print()
                print("Sorry, you lose.")
                break
            current_player = "computer"
            
#----------- STEP 5 | COMPUTERS TURN ---------------# 
        else:
 
            computer_choice = random.randint(1, 3)
            current_number = current_number + computer_choice
            print("Computer turn. The computer choses " +
                  str(computer_choice) + ".")
            print()
            time.sleep(1)

            if current_number >= 21:
                print("The current number is " + str(current_number) + ".")
                print()
                print("Well done, you won!")
                break
            current_player = "human"
            
#----------- STEP 6 | Do you want to play again? ---------------#
    print()
    play_again = input("Do you want to play again? ")
    if play_again.lower().startswith("y"):
        continue
    else:
        print("Goodbye")
        break







'''

Let's watch the instructor play the game! Then, let's discuss how the game
should work.

What are the elements of this program?

- What happens when we run the code?
- What is the aim of the game?
- What are the elements of the game?
- How does the player play this game?


'''
```
