const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.port || 3000;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const jwtpassword = "Titan1234";
const bcrypt = require("bcrypt");
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://harshityadav:HaLtYVzf9bV1J5ry@cluster0.lt97n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

// function for logging
async function check_account(email, password) {
  const user = await Member.findOne({ email: email });
  if (user) {
    const ans = await bcrypt.compare(password, user.password);
    if (ans) {
      return true;
    } else {
      return false;
    }
  }
}

// function for admin authorization
async function check_account(email, password) {
  const user = await Admin.findOne({ email: email });
  if (user) {
    const ans = await bcrypt.compare(password, user.password);
    if (ans) {
      return true;
    } else {
      return false;
    }
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
});

// schema of cart
const Cart = mongoose.model("Cart", {
  name: String,
  unique_key: String,
  Price: Number,
  Discount: Number,
  Total_price: Number,
});

// schema of favourites
const Favourites = mongoose.model("Favourites", {
  name: String,
  type: String,
  price: String,
  discount: String,
  image: String,
  about: String,
});

// sign up users
app.post("/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const contactNo = req.body.contactNo;

    // auth
    if (await checkuser(email)) {
      return res.send("user already exists");
    }

    // create jwttoken for password
    const emailtoken = jwttoken(email);

    res.cookie("email", emailtoken);

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
  } catch (error) {
    console.log("something goes wrong ");
  }
});

// logging up
app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const isAuthenticated = await check_account(email, password);
  if (isAuthenticated) {
    res.send("true");
  } else {
    res.send("false");
  }
});

// admin route for adding food items
app.post("/addFood", async (req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const price = req.body.price;
  const discount = req.body.discount;
  const image = req.body.image;
  const about = req.body.about;

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
    res.send("Food saved successfully ");
  } catch (error) {
    res.send("An error occured while adding a food ");
  }
});

// admin loggin route
app.post("/admin-login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const isAuthenticated = await check_account(email, password);
  if (isAuthenticated) {
    res.send("true");
  } else {
    res.send("false");
  }
});

app.get("/foodlist", async (req, res) => {
  const fooditem = await Food.find();
  res.send(fooditem);
});

app.post("/addtocart", (req, res) => {
  const name = req.body.name;
  const unique_key = req.body.unique_key;
  const Price = req.body.price;
  const Discount = req.body.discount;

  const Total_price = Price - Price * (Discount / 100);

  const newItem = new Cart({
    name,
    unique_key,
    Price,
    Discount,
    Total_price,
  });

  newItem.save();
  res.send("saved successfully ");
});

app.post("/favourites", (req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const price = req.body.price;
  const discount = req.body.discount;
  const image = req.body.image;
  const about = req.body.about;

  const newFavourite = new Favourites({
    name,
    type,
    price,
    discount,
    image,
    about,
  });
  newFavourite.save();
  res.send("saved to favourite ");
});

// route for deleting a item form favoutites 
app.post("/delete-favourites" , async (req,res)=>{
  try {
    const name = req.body.name ;
    await Favourites.deleteOne({name })
    res.send("done") ;
  } catch (error) {
    res.send("item not found ")
  }
})



// listning the port
app.listen(port, () => {
  console.log(`daddy , server is up at ${port}`);
});
