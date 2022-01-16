# Counter Component with useReducer in separate module

- reducer can be in an external file
- notice that its just a regular pure function, not a custom hook
- notice also that the dispatch "action" needs to be synced between files.  A `constants.js` file would be useful here
