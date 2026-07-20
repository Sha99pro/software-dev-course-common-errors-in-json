/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================
const validBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": 25,
      "email": "bob.smith@example.com"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": [
      "WiFi",
      "Breakfast",
      "Parking"
    ]
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


/*     ==================================== Answers =========================================
===========================================================================================================================
 ********************************          Errors Found and Fixes          *********************************************
===========================================================================================================================

1. Missing comma after "checkInDate": "2024-05-15"

Problem:
JSON requires commas between key-value pairs.
Without a comma, the JSON cannot be parsed correctly.

Fix:
Added a comma after the checkInDate value.


2. Missing quotation marks around name key

Problem:
JSON keys must always be written inside double quotes.

Fix:
Changed:
name: "Alice Johnson"

To:
"name": "Alice Johnson"


3. undefined used as a value

Problem:
JSON does not support the undefined data type.

Fix:
Replaced undefined with a valid value:
"age": 25


4. Invalid email format

Problem:
The email "bob.smith@example" is incomplete and not in a valid format.

Fix:
Changed it to:
"bob.smith@example.com"


5. Trailing comma after "Parking"

Problem:
JSON does not allow extra commas before closing brackets or braces.

Fix:
Removed the extra comma after "Parking".
===========================================================================================================================
===========================================================================================================================
*/





// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
Ans:) I used JSONLint to check the JSON file for syntax errors. 
I also reviewed the JSON manually to find issues like missing commas, 
incorrect quotation marks, and invalid data types.


2️⃣ How did you confirm that your corrected JSON file was valid?
Ans:) I copied the corrected JSON into JSONLint and checked the result. 
JSONLint confirmed that the JSON was valid and had no syntax errors.

3️⃣ Which errors were the most difficult to spot? Why?
Ans:) The errors were not very difficult to spot because I used JSONLint and carefully checked the JSON structure. 
The missing comma and trailing comma were easier to miss because they are small formatting mistakes, but they can stop the JSON from working.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
   Ans:) Using tools like JSONLint, syntax highlighting in VS Code and formatters can help find errors quickly. 
Writing JSON carefully, checking commas and quotation marks and following examples of valid JSON can help prevent mistakes.
*/
