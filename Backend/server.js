express = require("express");
const Razorpay = require("razorpay");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { configDotenv } = require("dotenv");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 1504;
const jwtpassword = "Titan1234";
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
app.set("trust proxy", 1);
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://seven-spices.vercel.app",
    credentials: true,
  })
);
mongoose.connect(process.env.MONGO_KEY);

// function for logging
async function check_account(email, password) {
  const user = await Member.findOne({ email });
  if (user) {
    const ans = bcrypt.compare(password.toString(), user.password);
    if (ans) {
      return true;
    } else {
      return false;
    }
  }
}

// function for admin authorization
async function check_account_admin(email, password) {
  const user = await Admin.findOne({ email: email });
  if (user) {
    const ans = await bcrypt.compare(password.toString(), user.password);
    if (ans) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// check that user phele se toh nahi exist krta
async function checkuser(email) {
  return await Member.findOne({ email: email });
}

// assigning jwt
function jwttoken(email) {
  const jwttoken = jwt.sign({ email }, jwtpassword);
  return jwttoken;
}

// schema of members
const Member = mongoose.model("Members", {
  username: String,
  email: String,
  password: String,
  contactNo: String,
});

// schema of admin
const Admin = mongoose.model("Admin", {
  email: String,
  password: String,
});

// schema of food items
const Food = mongoose.model("Food", {
  name: String,
  type: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  image: String,
  about: String,
  heart: Boolean,
  button_info: String,
});

// schema of cart
const Cart = mongoose.model("Cart", {
  name: String,
  type: String,
  Price: String,
  image: String,
  about: String,
  Discount: String,
  Total_price: Number,
  heart: Boolean,
  button_info: String,
  user_email: String,
});

// schema of favourites
const Favourites = mongoose.model("Favourites", {
  name: String,
  type: String,
  price: String,
  discount: String,
  image: String,
  about: String,
  button_info: String,
  user_email: String,
});

// sign up users
app.post("/api/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const contactNo = req.body.contactNo;

    // auth
    if (username && email && password && contactNo) {
      if (await checkuser(email)) {
        return res.send("user already exists");
      }

      // encrypting the password
      const encryptedpass = await bcrypt.hash(password, 10);

      //creating new user
      const newmember = new Member({
        username: username,
        email: email,
        password: encryptedpass,
        contactNo: contactNo,
      });
      await newmember.save();
      res.send("user is saved successfully on our Database ");
    }
  } catch (error) {
    console.log("something went wrong ");
  }
});

// logging up
app.post("/api/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // create jwttoken for email
  const emailtoken = jwttoken(email);
  const isAuthenticated = await check_account(email, password);
  if (isAuthenticated) {
    res.cookie("user_email", emailtoken, {
      maxAge: 1500 * 60 * 1000, // milliseconds me hota hai toh isliye 1000 se mltiply and to convert the resultant into minutes , multipy it by 60
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });
    res.send(true);
  } else {
    res.send(false);
  }
});

// admin route for adding food items

app.post("/api/addFood", async (req, res) => {
  const email_token = req.cookies.admin_email;
  if (email_token) {
    const cookie_email = jwt.verify(email_token, jwtpassword);
    const parsed_email = await Admin.findOne({ email: cookie_email.email });
    if (parsed_email.email == cookie_email.email) {
      const name = req.body.name;
      const type = req.body.type;
      const price = req.body.price;
      const discount = req.body.discount;
      const image = req.body.image;
      const about = req.body.about;

      if (name && type && price && discount && image && about) {
        const newFood = new Food({
          name,
          type,
          price,
          discount,
          image,
          about,
        });
        try {
          await newFood.save();
          console.log("done");
          res.send("Food saved successfully ");
        } catch (error) {
          res.send("An error occured while adding a food ");
        }
      }
    }
  } else {
    res.send("Token not found");
  }
});

// admin-token check
app.get("/api/check-token-admin", (req, res) => {
  const admin_cookie = req.cookies.admin_email;
  if (admin_cookie) {
    res.send("Token is available");
  } else {
    res.send("No cookie");
  }
});

app.get("/api/check-token", (req, res) => {
  const user_cookie = req.cookies.user_email;
  if (user_cookie) {
    res.send("Token is available");
  } else {
    res.send("No cookie");
  }
});
app.get("/api/check-token-admin", (req, res) => {
  const admin_cookie = req.cookies.admin_email;
  if (admin_cookie) {
    res.send("Token is available");
  } else {
    res.send("No cookie");
  }
});

// admin loggin route
app.post("/api/admin-login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const isAuthenticated = await check_account_admin(email, password);
  if (isAuthenticated) {
    const email_token2 = jwt.sign({ email }, jwtpassword);
    res.cookie("admin_email", email_token2, {
      maxAge: 4000 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });
    res.send(true);
  } else {
    res.send(false);
  }
});

app.get("/api/foodlist", async (req, res) => {
  const fooditem = await Food.find();
  res.send(fooditem);
});

app.post("/api/addtocart", (req, res) => {
  try {
    const email_fetched = req.cookies.user_email;
    const decoded_email = jwt.decode(email_fetched);
    const name = req.body.name;
    const Price = req.body.price;
    const Discount = req.body.discount;
    const image = req.body.image;
    const type = req.body.type;
    const about = req.body.about;
    const user_email = decoded_email.email;
    console.log(name);
    const Total_price =
      Number(Price) - Number(Price) * (Number(Discount) / 100);

    const newItem = new Cart({
      name,
      Price,
      type,
      Discount,
      image,
      about,
      Total_price,
      user_email,
    });

    newItem.save();
    res.send("added to cart ");
  } catch (error) {
    res.send("error");
  }
});

app.post("/api/favourites", (req, res) => {
  const email_fetched = req.cookies.user_email;
  const decoded_email = jwt.decode(email_fetched);
  const name = req.body.name;
  const type = req.body.type;
  const price = req.body.price;
  const discount = req.body.discount;
  const image = req.body.image;
  const about = req.body.about;
  const user_email = decoded_email.email;

  const newFavourite = new Favourites({
    name,
    type,
    price,
    discount,
    image,
    about,
    user_email,
  });
  newFavourite.save();
  res.send("saved to favourite ");
});

// route for deleting a item form favoutites
app.post("/api/delete-favourites", async (req, res) => {
  try {
    const name = req.body.name;
    await Favourites.deleteOne({ name });
    res.send("done");
  } catch (error) {
    res.send("item not found ");
  }
});

app.get("/api/get-favourites", async (req, res) => {
  const cookie_email = req.cookies.user_email;
  if (cookie_email) {
    const decoded_email = jwt.decode(cookie_email);
    const email = decoded_email.email;
    const favItemList = await Favourites.find({ user_email: email });
    res.send(favItemList);
  }
});

app.get("/api/get-cartitems", async (req, res) => {
  const cookie_email = req.cookies.user_email;
  if (cookie_email) {
    const decoded_email = jwt.decode(cookie_email);
    const email = decoded_email.email;
    const CartList = await Cart.find({ user_email: email });
    console.log(CartList);
    res.send(CartList);
  }
});

app.post("/api/removefromcart", async (req, res) => {
  const name = req.body.name;
  const token = req.cookies.user_email;
  if (token) {
    const decoded_email = jwt.decode(token).email;
    if (name) {
      await Cart.deleteOne({ name, user_email: decoded_email });
      res.send("deleted");
    }
  }
});

app.post("/api/removefavourite", async (req, res) => {
  const name = req.body.name;
  const token = req.cookies.user_email;
  if (token) {
    const decoded_email = jwt.decode(token).email;
    if (name) {
      await Favourites.deleteOne({ name, user_email: decoded_email });
      res.send(decoded_email);
    }
  }
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.post("/api/payment/create-order", async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: "order_rcptid_11",
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).send("Error creating Razorpay order");
  }
});

// listning the PORT
app.listen(PORT, () => {
  console.log(`daddy , server is up at ${PORT}`);
});
