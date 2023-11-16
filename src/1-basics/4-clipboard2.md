# Clipboard 2 (//rotate, //flip)

After copying to the clipboard, its contents can be rotated or flipped.

`//rotate` does rotation. Specify the angle to rotate in degrees (it can also be negative). For example, `//rotate 90` or `//rotate -90`. Note that angles that are not multiples of 90 are not recommended as they may leave holes in the contents.

`//flip` does flipping. Specify the direction to flip to (n/s/e/w/u/d/ne/nw/se/sw). For example, `//flip n` to flip it in the north-south direction.

Note that these are done relative to the player's point when the contents are copied to the clipboard.

Both of these by default rotate and flip along the horizontal plane. Rotating and flipping along the vertical plane is covered in TODO.
