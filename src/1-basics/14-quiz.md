# Quiz

I don't know if this is a good idea but I decided to do something to cover tips and tricks

# Questions
1. You have the first floor of a building built and selected. You want 10 floors. What is the command?
1. You have a section of rosd selected (no air blocks) on ground level and want to stack it through a mountain, so there must be air above the road. How would this be done 
1. A block is selected at (1,1,1) and copied at (0,0,0). After rotating by 180 degrees and pasting, where is the block pasted at?

# Answers
1. `//stack 9 u`. 1 selected + 9 stacked = 10
1. Three ways:
  * First stack, then set the space above the road inside the mountain to air
  * Redo the selection points to account for the air above the tunnel, and then stack
  * `//expand <n> u`, then stack (easiest)
1. (-1,1,-1)
