# Schematics (//schem)

Schematics let you import and save structures to and from your **clipboard**.

Schematic files have an extention `.schem` and are put in the plugin folder. On the MRT, schematic files can be uploaded and downloaded on the file server.

To load a schematic into the clipboard, do `//schem load <file>`. `<file>` is case-sensitive and does not need the `.schem` extension. For example, `//schem load 7d-house` loads `7d-house.schem` to the clipboard. The clipboard can then be pasted as usual.

To save a schematic from the clipboard, do `//schem save <file>`. For example, after copying my house, I can do `//schem save 7d-house` and it saves to `7d-house.schem`.

However, if `7d-house` already exists, it would not save unless I overwrite it with the `-f` flag. For example, `//schem save 7d-house -f`. **Note that the old schematic is lost.**

On the MRT server, schematics can be uploaded and downloaded on the [file server](https://files.minecartrapidtransit.net).