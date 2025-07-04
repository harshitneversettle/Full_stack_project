# 🍔 Full_stack_project

> A fully functional food ordering application built with the **MERN Stack (MongoDB, Express.js, React, Node.js)** that supports authentication, cart/favorites, and secure payments via Razorpay.

![GitHub Repo stars](https://img.shields.io/github/stars/harshitneversettle/Full_stack_project?style=social)
![GitHub forks](https://img.shields.io/github/forks/harshitneversettle/Full_stack_project?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/harshitneversettle/Full_stack_project)

---

## 🛠 Tech Stack

| Technology      | Description                                |
|-----------------|--------------------------------------------|
| **MongoDB**     | NoSQL database for storing app data        |
| **Express.js**  | Web framework for handling backend logic   |
| **React.js**    | Frontend SPA for UI                        |
| **Node.js**     | Runtime for the backend server             |
| **JWT**         | Token-based authentication system          |
| **bcrypt**      | Password hashing                           |
| **Mongoose**    | MongoDB ODM                                |
| **Razorpay**    | Secure payment gateway integration         |

---

## ✨ Features

- 🧾 User Signup & Login with JWT Auth
- 🔐 Admin Login with protected access
- 🍱 Admin can Add Food Items
- 🛒 Add/Remove Items from Cart
- ❤️ Add/Remove Items from Favorites
- 💳 Razorpay Payment Integration
- 🔒 Protected Routes with Cookies & Tokens
- 🖥️ Responsive User Interface

---

## 📁 Folder Structure

```bash
Full_stack_project/
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.js
└── README.md

🔐 Environment Variables
Create a .env file inside the Backend/ folder:

env
Copy
Edit
PORT=2000
Test_Key_ID=your_razorpay_key_id
Test_Key_Secret=your_razorpay_key_secret
JWT_SECRET=Titan1234
MONGO_URI=your_mongodb_connection_url
🚀 Getting Started Locally
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/harshitneversettle/Full_stack_project.git
cd Full_stack_project
2️⃣ Backend Setup
bash
Copy
Edit
cd Backend
npm install
npm start
3️⃣ Frontend Setup
bash
Copy
Edit
cd ../Frontend
npm install
npm run dev
4️⃣ Open in Browser
bash
Copy
Edit
http://localhost:5174
📡 API Endpoints (Backend)
Route	Method	Description
/api/signup	POST	Register new user
/api/login	POST	User login
/api/admin-login	POST	Admin login
/api/addFood	POST	Add food (admin only)
/api/get-cartitems	GET	Fetch user's cart items
/api/removefromcart	POST	Remove item from cart
/api/favourites	POST	Add item to favorites
/api/delete-favourites	POST	Remove from favorites
/api/get-favourites	GET	Get all favorite items
/api/payment/create-order	POST	Create Razorpay order

🔒 Authentication
JWT tokens are stored in cookies for both users and admins.

Protected routes like /api/addFood validate the admin token before proceeding.

✍️ Author
Made with ❤️ by Harshit Yadav


