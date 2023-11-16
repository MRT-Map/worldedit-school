# Selection Shapes (//sel)

Below are a list of selection shapes that are often used on the MRT. More selections are outlined in TODO.

## //sel cuboid

The default selection. p1 and p2 are the opposite corners of the cuboid.

For a wand, left-click sets p1 and right-click sets p2.

## //sel poly

Uses multiple points. Each point is an edge of a polygon. The height is derived from the highest and lowest points.

For a wand, left-click sets p1 and right-click selects the rest of the points.

## //sel convex

Uses multiple points. Each point is the edge of a *polyhedron*.

For a wand, this is similar to `//sel poly`
