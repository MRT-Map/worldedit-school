# Block Queries

Queries are used to select blocks from a selection or region. It is used in commands like `//replace` and flags like `-m` (mask).

# Or and And

Remember that multiple blocks can be combined with a comma. For example, `stone,andesite` matches either stone or andesite.

In this case, `,` here works as an OR operator. The AND operator is a space ` `, requiring the entire query to be surrounded by double quotes.

For example, `"stone >water"` means `stone AND >water`. Note that OR gets precedence over AND, so `stone,andesite >water` is `(stone OR andesite) AND >water`.

# Under and Over

To select a block that is under or over (a) specific block(s), prepend `<` and `>` respectively before the block ID(s). For example, `>stone` selects all blocks above stone.
