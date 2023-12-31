# //set and //replace

`//set` is equivalent to vanilla /fill. It sets all the blocks in the selection with the specified block(s).

The syntax is `//set <pattern>`, for example `//set stone`.

![](../images/set-stone.png)

Note that you can specify multiple blocks, separated by commas **without spaces**: this yields an equal distribution of blocks. For example, `//set stone,andesite`

![](../images/set-stone,andesite.png)

If there is additional block data, you can append \[key=value\] to the block ID. For example, `stone_slab[type=top]`

![](../images/set-stone-slab-top.png)

`//replace` is similar to `//set`, but in this case it replaces specific blocks instead of every block in the selection.

The syntax is `//replace <mask> <pattern>`, for example `//replace air stone`.

![](../images/re-air-stone.png)

Multiple blocks are also possible for both mask and pattern, for example `//replace air,red_wool stone,andesite`.

![](../images/re-air-red-wool-stone-andesite.png)

For the query, you can also select all blocks except certain blocks by prepending `!`. For example, `!air` or `!air,red_wool`.

![](../images/re-not-red-wool,air-stone,andesite.png)

<div class="warning">
    Be careful with falling blocks! Undoing blocks that have fallen is difficult.
</div>

More about block masks and patterns is covered [here](../2-intermediate/masks.md) and [here](../2-intermediate/patterns.md).
