# Clipboard 1 (//copy, //cut, //paste)

This is one of the harder topics to explain, but with some intuition it will make sense.

`//copy` is like `Ctrl+C`: copies the current selection to the clipboard. `//cut` is like `Ctrl+X`: same as `//copy`, but replaces the blocks in the selection with air (by default). `//paste` is like `Ctrl+V` and simply pastes the contents of the clipboard.

The clipboard is **relative to the player's position when it was copied or cut**. For example, if you were to copy a selection, stand two blocks in front of it and copy, when you paste the clipboard, it would be two blocks behind you.

<div class="warning">
    If a conductor is doing a w/e for you, remember to specify copy/cut/paste points. You should
    * mark a copy point with a visible material (preferably different fron that of points), stand next to it and say "copy on <block>" or "copy here"
    * copying from a point is also possible, for example "copy on p2"
</div>

`//copy` has three flags (options):
* `-e` to copy entities to the clipboard.
* `-a` to exclude air from the selection. When you paste the clipboard, the air does not get pasted along (remember air is just another block). For example, `//copy -a``
* `-m <mask>` to only include specific blocks from the selection. For example, `//copy -m stone`

You can also have multiple options: `//copy -a -m <mask>` or `//copy -am <mask>` since `-a` does not take further arguments.

`//cut` has the same flags as `//copy`, together with one additional optional argument `[fill]` which sets the selection to the block(s) specified instead of air after copying. For example, `//cut stone` replaces the selection with stone after cutting.

<div class="warning">
    Clipboards may unintentionally be cleared, so if you need a backup of something you intend to `//cut`, please consider copying instead, or having a backup somewhere.

    There has been one case where someone lost an entire airplane due to this
</div>

`//paste` has a few flags:
* `-e` to paste entities in the clipboard.
* `-a` to prevent air from being pasted.
* `-m <mask>` to only paste specific blocks in the clipboard.
* `-s` to move the current selection to the region that has been pasted.

Note that if you want to paste entities, you must `//copy` **and** `//paste` with the `-e` flag.
