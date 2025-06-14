# 🧪 Frontend Engineer Assessment

Welcome to the Soft Alliance coding assessment.
This test is designed to evaluate your real-world frontend development skills using **React**, **TypeScript**, and **SCSS**,
with a focus on CRUD operations, problem-solving, code quality, and time management.

## 🗂 Tech Stack

- React (with hooks)
- TypeScript
- SCSS Modules
- RTK Query
- Pre-built UI components (Table, Form, etc.)

---

## 📌 Project Context

You’re working on an **Admin Panel Application**.
Different admins have different **permissions**, which control the visibility and access to certain menus or pages in the app.

The repo comes preloaded with:

- A login page (you’ll be given test credentials).
- Sidebar component with all available menu items.
- Layout and basic page setup.
- Reusable components.

---

## ✅ Assessment Tasks

### 1. 🔐 Login and Permission-Based Sidebar Filtering

**Goal:** User Login and ensure admins only see the sidebar menus they're permitted to access.

- The login data includes a list of permissions.
- Filter the sidebar dynamically so only permitted routes are visible.
- Ensure that even if a user tries to navigate manually to a restricted page, they are either:
  - Redirected away along with a toast message or
  - Shown a "Not Authorized" screen.

🔎 **What We’re Looking For:**

- Good authentication setup.
- Logical structuring of permission-checking.
- Proper use of TypeScript for data typing.
- Reusability and readability in permission logic.

---

### 2. 🔁 Workflow Approval Setup Page

**Goal:** Create a CRUD interface for managing workflow approval setups.

You’re tasked to:

- **Fetch** the list of workflow approval setups (from a provided API endpoint).
- Display them in a **table** (using the provided component).
- Implement a **form** to:
  - **Create** a new workflow approval setup (using the provided API endpoint).
  - **Edit** (using the provided API endpoint) and populate form with current data.

Form Fileds context:

- Category options include; Product, Bills, Disbursement
- Only Disbursement category can have custom rules
- Number of approval levels options include numbers 1-5
- Roles options can be fetched from provided roles endpoint
- Users options can be fetched from provided users endpoint
- All other form fields are as seen on the screenshots provided.
- Required fields are indicated by the red asterisk on the field names.

💡 Screenshots to serve as guide for design, and API documentation, will be provided at the bottom of this doc.

🔎 **What We’re Looking For:**

- Form handling with controlled components.
- Type-safe forms and API integration.
- Clean and modular component structure.
- Error handling and UX considerations.

---

## 🕑 Time Limit

You’ll have **2 hours** to complete the tasks.
Focus on delivering a working, clean, and well-structured solution — it's better to show high quality in delivery of fewer features, than rush through everything.

---

## 🙌 Bonus Points

- Type-safe utility functions for permission logic.
- Consistent use of SCSS patterns.
- Clear handling of edge cases (e.g. loading, empty states, failed requests).
- Attempted Unit Tests.

---

## 📄 API Documentation

- Base URL is given in the env file.
- Login: /api/v1/auth/login
  - email: tetib99169@gotemv.com
  - password: Assessment@123
- GET all workflow setups: /api/v1/workflow
  (response)
  - id: string
  - name: string
  - description: string
  - category: "PRODUCT" | "BILLS" | "DISBURSEMENT"
  - custom: boolean
  - numberOfApprovals: number
  - createdBy: string
  - createdAt: string
  - updatedAt: string
  - isActive: 0 | 1
- GET workflow setup by ID: /api/v1/workflow/{id}
  (response)
  - id: string
  - name: string
  - description: string
  - category: "PRODUCT" | "BILLS" | "DISBURSEMENT"
  - custom: boolean
  - numberOfApprovals: number
  - createdBy: string
  - createdAt: string
  - updatedAt: string
  - isActive: 0 | 1
  - rules: Array of objects [{}]
- POST workflow setup: /api/v1/workflow
  (payload)
  - name: string
  - description: string
  - category: "PRODUCT" | "BILLS" | "DISBURSEMENT"
  - custom: boolean
  - isActive: 0 | 1
  - rules: Array of objects [{}]
    - isDefault: boolean
    - currency: string
    - transactionType: string
    - transactionLimit: number
    - approvals: Array of objects [{}]
      - levelOrder: number
      - levelName: string
      - assignedByUserId: boolean
      - assignedByRoleId: boolean
      - approvalUser: string
- PUT workflow setup: /api/v1/workflow
  (payload)
  - id: string
  - name: string
  - description: string
  - category: "PRODUCT" | "BILLS" | "DISBURSEMENT"
  - custom: boolean
  - isActive: 0 | 1
  - rules: Array of objects [{}]
    - isDefault: boolean
    - currency: string
    - transactionType: string
    - transactionLimit: number
    - approvals: Array of objects [{}]
      - levelOrder: number
      - levelName: string
      - assignedByUserId: boolean
      - assignedByRoleId: boolean
      - approvalUser: string
- GET Users: /api/v1/users
  - id: string
  - firstName: string
  - lastName: string
  - email: string
- GET Roles: /api/v1/roles/org
  - id: string
  - name: string

---

## 📷 Design

![Screenshot 5](https://github.com/user-attachments/assets/21ebb155-2004-408a-a656-058b41e0728a)
![Screenshot 4](https://github.com/user-attachments/assets/8945e31b-5145-4e65-ae9c-2843a349acc2)
![Screenshot 3](https://github.com/user-attachments/assets/089d10f3-87f9-43d7-a709-05348f40b4b5)
![Screenshot 2](https://github.com/user-attachments/assets/aae67b90-dac6-4e86-82b3-c75c3d537943)
![Screenshot 1](https://github.com/user-attachments/assets/6519d0fd-978b-4f37-a83d-8d5c1f3effb4)

---

## 📂 Submission Instructions

- Create a public repository on GitHub or GitLab named "SARL-test" and push your codes there.
- Ensure that your source code is accessible from this repository.
- Submit the URL to your repository by completing this form [here](https://forms.office.com/r/wWXZwjxNdF)
- Be ready to walk through your code and reasoning afterward.
