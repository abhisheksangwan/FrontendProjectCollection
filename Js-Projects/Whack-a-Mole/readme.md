# Whack-a-Mole
New project which works/performs asynchronous operations.A mole will appear in any random square out of nine squares every second. A player should track & hit a mole (square) by clicking on them. And to complete the game in sixty seconds.Four operations that are to be performed at the same time (asynchronously) in this game are -
1. Operation 1: "Time left" ⏳
This is a count down starts decrementing the value by one from 60 Seconds to 0 Seconds.
2. Operation 2: "Your Score" 🎯
This is a score that adds value every time you hit the mole. It will keep on adding till you time 60 Seconds gets over.

3. Operation 3: "Placement of mole randomly" 🕹️
Placing a mole randomly on any one of the squares every second.

4. Operation 4: "Execute hit music" 🎵
The hit music will execute whenever the player hits a mole.

Functions used to perform asynchronous operation:
 a. setInterval(Operation1 & Operation3, 1000)
 b. setTimeout(Operation2 & Operation4, 1000)
 c. clearInterval()

Conclusion:

Asynchronous operation is the "Execution of multiple operations parallelly without waiting for any operation to execute fully" (Or) "Performing multiple functions/tasks simultaneously" 🌟