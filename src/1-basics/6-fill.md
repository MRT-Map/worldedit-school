# //fill and //fillr

Both fills a hole or depression, and do not need a selection. They consider all the air around and under the player's feet and fills it with the specified block(s).

For example, if I were to be standing on the side of a valley, `//fill 50 stone` would cover the valley with stone within 50 blocks of the player, but below the stone is air.

`//fill 50 5 stone` would fill for the Y-levels between that of the player's feet and 4 blocks below that.

The difference between `//fill` and `//fillr` is shown below: it fills any air pockets below the top Y-level.




