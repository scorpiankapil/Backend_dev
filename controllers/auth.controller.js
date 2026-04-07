import { Member } from "../models/member.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register a new member
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newMember = await Member.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: "Registration successful", member: newMember });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Login an existing member
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if member exists
        const existingMember = await Member.findOne({ email });
        if (!existingMember) {
            return res.status(404).json({ message: "Member not found" });
        }

        // Verify password
        const passwordMatch = await bcrypt.compare(password, existingMember.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: existingMember._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({ message: "Login successful", token });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
