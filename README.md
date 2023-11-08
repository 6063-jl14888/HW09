# p5.js Template

This is a README file that can be used to describe and document your assignment.

Markdown Cheatsheet (from [https://www.markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/)):

---
---
After browsing through the library, I developed an interest in interactions that involve mouse or keyboard-controlled movement. p5.play is commonly used to create simple games. Subsequently, I delved into the details on the p5.play webpage, discovering basic tutorials that demonstrated the utility and basic code included in this library. As I was learning, the idea for this week's assignment gradually took shape in my mind.

I noticed the "overlap" effect, and it seemed like it could be a fun interaction, reminiscent of the game "Snake." However, designing a snake shape proved to be quite challenging, so I simplified the controllable object to a basic shape: a circle. After that, I needed to make it follow the mouse's movements.

Once I had initially written the program, I encountered my first challenge: how to make the "coin" object, which is overlapped by the player, appear randomly on the screen. I used the random function to change the coin's coordinates.

Then I faced another problem: how to make the player's diameter increase after completing an overlap to convey the effect of "eating" a coin. So, I used an if statement to provide the condition for increasing the player's diameter.

Unlike the "moveTowards" function provided on the p5.play website, once the canvas was set to the window size, the player's follow speed with the mouse felt a bit slow. After revisiting previous tutorials and assignments, I adjusted the player's movement speed. However, this adjustment also caused the player to jitter rapidly when the mouse was not moving.

While solving these issues, I made numerous attempts to make all these numbers and variables work together. I found that when random, movement, or interactivity was involved, the code tended to become lengthy and could easily become confusing.

I have a few other ideas as well, such as creating a path with boundaries on both sides and allowing a circle or character to move along this path by following the mouse. During this process, the circle must not touch the "walls" on either side, or else it needs to restart. Additionally, I have an idea about how to automatically switch to the next randomly generated path after completing the current one.