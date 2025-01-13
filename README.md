# Coding 1 | MUST 4707

## Modifying an Existing Object

In this assignment, you will update the file `script.js` and commit it to your assignment repository. Your task will be to add **two new properties** to an existing object and test your work using `script.test.js`.

---

### Task Description

1. The provided `script.js` contains an object called `exampleObject` with a few properties already defined.
2. Your task is to add **two new properties** to `exampleObject`:
    - A property named `releaseYear` that contains a number (e.g., `2023`).
    - A property named `isAvailable` that contains a boolean value (`true` or `false`).

3. After adding these properties, make sure they meet the requirements listed below and pass the provided tests.

---

### Coding Instructions

You will add your code between these comments in `script.js`:

```javascript
//↓↓↓↓↓↓↓↓↓↓↓↓YOUR CODE goes below here↓↓↓↓↓↓↓↓↓↓↓↓

let song = {
   title: "Apple",
   album: "Brat"
}
```

_this is where you will type your code Edit the song object...._

```javascript
//↑↑↑↑↑↑↑↑↑↑YOUR CODE goes above here↑↑↑↑↑↑↑↑↑↑
//Do not edit below this comment!
module.exports = song; // This allows for auto-testing in GitHub Classroom.
```

---

### Submission Steps

1. Open the `script.js` file in your repository.
2. Add the following properties to the existing object:
    - `releaseYear` (type: number)
    - `isAvailable` (type: boolean)


3. Save your changes and commit the file by uploading the file or saving the changes you made in the browser.

---

### Testing Your Work

The `script.test.js` file contains automated tests that will verify your work. Follow these steps to run the tests and check if you’ve completed the assignment correctly:

1. **Check the Actions Tab**: Navigate to the "Actions" tab in your GitHub repository.
2. **View Test Results**: Look for the autograding workflow. Click on the workflow associated with your last commit.
3. **Review the Results**: Scroll to see the logs and check which tests you passed or failed.

---

### Grading Criteria

The following criteria will be checked:

1. The `releaseYear` property exists and is a number.
2. The `isAvailable` property exists and is a boolean.

---

### Example Output

If everything is correct, the tests will pass, and you’ll see logs like this:

```
    Example Object Tests
      ✓ The object has a 'releaseYear' property (2 ms)
      ✓ The property 'releaseYear' is a number
      ✓ The object has an 'isAvailable' property
      ✓ The property 'isAvailable' is a boolean
```

If you fail any test, you will see a ✕ instead of ✓. Fix your code and commit the changes until all tests pass.

---

Let me know if you need any further changes!
****