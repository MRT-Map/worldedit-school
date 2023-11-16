# //set and //replace

`//set` is equivalent to vanilla /fill. It sets all the blocks in the selection with the specified block(s).

The syntax is `//set <pattern>`, for example `//set stone`.

Note that you can specify multiple blocks, separated by commas **without spaces**: this yields an equal distribution of blocks. For example, `//set stone,andesite`

If there is additional block data, you can append \[key=value\] to the block ID. For example, `stone_slab[type=top]`

`//replace` is similar to `//set`, but in this case it replaces specific blocks instead of every block in the selection.

The syntax is `//replace <mask> <pattern>`, for example `//replace dirt stone`.

Multiple blocks are also possible for both mask and pattern, for example `//replace dirt,podzol stone,andesite```

For the query, you can also select all blocks except certain blocks by prepending `!`. For example, `!stone` or `!stone,!andesite`.

<div class="warning">
    Be careful with falling blocks! Undoing blocks that have fallen is difficult.
</div>

More about block queries is covered in TODO.
