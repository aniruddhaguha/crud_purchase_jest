**🚀 CRUD & Product Purchase Testing with Jest**

**📌 Project Overview**

This project demonstrates:

1. CRUD (Create, Read, Update, Delete) operations

2. Product Purchase functionality

3. Unit testing using Jest

**It is designed as a portfolio project for SQA / Automation Testing, showcasing:**

1. JavaScript logic & validation

2. Writing structured test cases with IDs

3. Handling edge cases & negative scenarios

4. Debugging real-world issues (state/reference bugs)

**⚙️ Tech Stack**

1. Node.js (JavaScript)

2. Jest (Testing Framework)

**📂 Project Structure**

crud_purchase_jest/
├── test/
│   ├── crud.test.js          # CRUD test cases
│   └── purchase.test.js      # Product purchase test cases
├── crud.js                  # CRUD logic
├── purchase.js              # Purchase logic
├── package.json             # Project configuration
└── README.md

**🧪 Test Coverage**

**CRUD Test Cases**
| ID | Description                        |
| -- | ---------------------------------- |
| C1 | Create user successfully           |
| R2 | Get non-existent user returns null |
| U3 | Partial update adds new field      |
| D1 | Delete existing user               |

**🛒 Product Purchase Test Cases**

| ID | Description                     |
| -- | ------------------------------- |
| P1 | Purchase product successfully   |
| P2 | Purchase quantity exceeds stock |
| P3 | Purchase non-existent product   |
| P4 | Invalid input handling          |
| P5 | Multiple purchases update stock |

**🚀 Getting Started**

1️⃣ Clone the repository

git clone https://github.com/aniruddhaguha/crud_purchase_jest.git

cd crud_purchase_jest

2️⃣ Install dependencies

npm install

3️⃣ Run tests

npm test

**📸 Sample Output**

💡 Add a screenshot of your terminal after running npm test

PASS  test/crud.test.js

PASS  test/purchase.test.js

Test Suites: 2 passed

Tests: 7 passed

**🧠 Key Learning Highlights**

✔️ Writing unit tests with Jest

✔️ Structuring test cases with clear IDs (C1, P2, etc.)

✔️ Handling edge cases & validations

✔️ Debugging state mutation vs reassignment issue

✔️ Organizing a testable Node.js project

**💼 Why This Project is Portfolio-Ready**

✔️ Demonstrates real SQA thinking

✔️ Covers both functional + negative testing

✔️ Includes modular code + test separation

✔️ Shows ability to debug real bugs

✔️ Easy to run and extend

**📜 License**

This project is licensed under the ISC License.

**🙌 Author**

Aniruddha Guha

SQA Engineer | Automation Testing Enthusiast





