# Patterns

Patterns specify the blocks that operations set or draw in the world. For example, it is used in `//set`, `//line`, etc.

## Changing Distribution

From `Basics` you have known that one or more blocks can be specified to yield an equal distribution: `stone` yields 100% stone, and `stone,andesite` yields 50% andesite and 50% stone, or 1 part andesite and 1 part stone.

The distribution can also be changed: prepend `n%` to the block ID. For example, `3%stone,2%andesite,cobblestone` yields 3 parts stone, 2 parts andesite and 1 part (the default) cobblestone.

Notice how the numbers need not add to 100. They also need not be integers.

## Retaining Block State

This is useful in `//replace`, especially for stairs and slabs. Prepending ^ to a block ID retains the block state from the old block, like its orientation.

For example, if I have brick stairs facing a particular direction, `//replace brick_stairs ^oak_stairs` retains the position of the stairs while replacing brick with oak.


