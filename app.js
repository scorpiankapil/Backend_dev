const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express()
app.use(express.json())

let user = []
let account = []
let transaction = []

const SECRET = "kapilsecrettoken"

function auth(req, res, next) {
  const token = req.headers.authorization
  if (!token) return res.send("No token")
  try {
    const data = jwt.verify(token, SECRET)
    req.user = data
    next()
  } catch {
    res.send("Invalid token")
  }
}

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body
  const hash = await bcrypt.hash(password, 10)
  const user = { id: Date.now(), name, email, passwordHash: hash, role: "user" }
  users.push(user)
  accounts.push({ id: Date.now(), userId: user.id, balance: 0, accountType: "saving" })
  res.send("User registered")
})

app.post("/login", async (req, res) => {
  const { email, password } = req.body
  const user = users.find(u => u.email === email)
  if (!user) return res.send("User not found")
  const ok = await bcrypt.compare(password, user.passwordHash)
  if (!ok) return res.send("Wrong password")
  const token = jwt.sign({ id: user.id, role: user.role }, SECRET)
  res.send({ token })
})

function getAccount(userId) {
  return accounts.find(a => a.userId === userId)
}

app.listen(3000, () => console.log("Server running at 3000 port numberr"))