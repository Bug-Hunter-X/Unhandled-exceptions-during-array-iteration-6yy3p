# Unhandled Exceptions During Array Iteration in DApps

This repository demonstrates a common error in decentralized applications (DApps): unhandled exceptions during array iteration.  This can lead to unexpected behavior or crashes in the application. 

The `bug.js` file contains code that iterates through an array of items, calculating a total. However, it doesn't handle cases where some items might be missing required properties (like `price` and `quantity`).  This results in an error.

The `bugSolution.js` file provides a corrected version that handles potential errors using appropriate checks.