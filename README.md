# 🚀 Bankify – A Banking Transaction Solution

_A modern banking transaction platform using Next.js, MySQL, Plaid, and Dwolla._

---

## ✅ Project Plan

### 1. 🔐 Authentication System

- Users can **sign up** and **log in** securely.
- After logging in:
  - **First-time users** must connect a bank account.
  - **Returning users** can:
    - View previously connected bank accounts.
    - Add new bank accounts.
    - Initiate and view transactions.

---

### 2. 🏦 Plaid Integration

**Purpose**: Securely connect banks and fetch user banking data.

#### 🔧 Implementation Steps:

1. Use **Plaid Link** in the frontend to connect the user's bank account.
2. On success, exchange the `public_token` with a **Plaid `access_token`**.
3. Store the `access_token` securely in the backend database (MySQL).
4. Use Plaid APIs to:
   - Fetch **account details** (name, type, balance).
   - Fetch **real-time transaction history**.
   - Fetch **identity info** (optional for verification).
   - Fetch **income**, **assets**, and **balances**.

---

### 3. 💸 Dwolla Integration

**Purpose**: Perform secure ACH money transfers between bank accounts.

#### 🔧 Implementation Steps:

1. Create a **Dwolla Customer** for the user using their KYC details.
2. Use the bank account connected via Plaid to create a **Funding Source** in Dwolla.
3. Allow user-to-user or user-to-other-account **bank transfers** via Dwolla API.
4. Monitor the **status of transactions** (pending, processed, failed).
5. Store transaction records in MySQL for reference.

---

## 🎯 Features Summary

| Feature                              | Provider    |
| ------------------------------------ | ----------- |
| User Authentication                  | Custom/Auth |
| Bank Connection                      | Plaid       |
| Real-time Bank Balance               | Plaid       |
| Transaction History (External Banks) | Plaid       |
| ACH Bank Transfers                   | Dwolla      |
| Transaction Status & Logs            | Dwolla      |
| Multiple Bank Accounts per User      | Plaid + DB  |
| Transfer Between Bank Accounts       | Dwolla      |
| Secure Data Storage                  | MySQL + Env |

---

## 🧠 Tech Stack

- **Frontend**: Next.js (React)
- **Backend**: Node.js API Routes (Next.js)
- **Database**: MySQL
- **Bank Data API**: Plaid
- **Money Transfer API**: Dwolla
- **Authentication**: NextAuth.js / Custom JWT
