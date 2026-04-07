import { Book } from "../models/book.model.js";
import { Member } from "../models/member.model.js";
import { Borrow } from "../models/borrow.model.js";

// Add a new book to the library
export const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json({ message: "Book added successfully", book });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new member to the library
export const createMember = async (req, res) => {
    try {
        const member = await Member.create(req.body);
        res.status(201).json({ message: "Member created successfully", member });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Record a borrow transaction
export const borrowBooks = async (req, res) => {
    try {
        const { memberId, bookIds } = req.body;

        const borrowRecord = await Borrow.create({
            member: memberId,
            books: bookIds
        });

        res.status(201).json({ message: "Books borrowed successfully", borrowRecord });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get borrow summary with fine calculation
export const getSummary = async (req, res) => {
    try {
        const { id } = req.params;

        const borrowRecord = await Borrow.findById(id)
            .populate("member")
            .populate("books");

        if (!borrowRecord) {
            return res.status(404).json({ message: "Borrow record not found" });
        }

        // Calculate total book value
        let totalBookValue = 0;
        borrowRecord.books.forEach(book => {
            totalBookValue += book.price;
        });

        // Fine and discount logic based on membership type
        const lateFine = 100;
        let discount = 0;

        const memberType = borrowRecord.member.membershipType;

        if (memberType === "Normal") {
            discount = lateFine * 0.05; // 5% discount for Normal members
        } else if (memberType === "Gold") {
            discount = lateFine * 0.15; // 15% discount for Gold members
        }

        const finalFine = lateFine - discount;

        res.json({
            member: borrowRecord.member.name,
            membershipType: memberType,
            borrowedBooks: borrowRecord.books,
            totalBookValue,
            lateFine,
            discount,
            finalFine
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
