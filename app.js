const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const app = express()
app.use(express.json())

let users = []
let accounts = []
let transactions = []

const SECRET = "kapilsecrettoken"

function auth(req, res, next) {
  const token = req.headers.authorization

  if (!token) {
    return res.send("No token")
  }

  try {
    const data = jwt.verify(token, SECRET)
    req.user = data
    next()
  } catch (err) {
    res.send("Invalid token")
  }
}

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body

  const existingUser = users.find(u => u.email === email)
  if (existingUser) {
    return res.send("User already exists")
  }

  const hash = await bcrypt.hash(password, 10)

  const newUser = {
    id: Date.now(),
    name: name,
    email: email,
    passwordHash: hash,
    role: "user"
  }

  users.push(newUser)

  const newAccount = {
    id: Date.now(),
    userId: newUser.id,
    balance: 0,
    accountType: "saving"
  }

  accounts.push(newAccount)

  res.send("User registered")
})

app.post("/login", async (req, res) => {
  const { email, password } = req.body

  const user = users.find(u => u.email === email)
  if (!user) {
    return res.send("User not found")
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash)
  if (!isMatch) {
    return res.send("Wrong password")
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role
    },
    SECRET,
    { expiresIn: "1h" }
  )

  res.send({ token: token })
})

app.get("/profile", auth, (req, res) => {
  res.send("Welcome user " + req.user.id)
})

function getAccount(userId) {
  return accounts.find(acc => acc.userId === userId)
}

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
