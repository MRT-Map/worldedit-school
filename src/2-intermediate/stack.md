# More on //stack

`//stack` can actually stack diagonally, saving time instead of manually copy-pasting on a diagonal.

`//stack n x,y,z` stacks a selection *n* times with an imterval of *x,y,z* between each copy. Each variable in *x,y,z* represents length in terms of the width, height or breadth of the selection.

For example, if I have a 2x1x2 block and I want 10 more of them to the east, with them being 4 blocks apart, I can do `//stack 10 3,0,0`, as shown below. Think of it as counting imaginary tiling of the same dimensions as the selection, and then pasting it after counting.

If I want the interal *x,y,z* to be in terms of *blocks* instead, add the `-r` flag.

For example, if I want a road going east to shift left 5 times every 10 blocks and I have 10m of road selected, I do `//stack 5 10,0,-1`. Think of it as offsetting the next copy by *x,y,z* from the selecrion or previous copy
