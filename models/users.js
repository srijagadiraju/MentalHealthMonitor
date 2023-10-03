/*This module defines the User model and provides CRUD (Create, Read - get by username or email, 
Update, Delete) operations for managing user data in MongoDB. It also includes functions for 
password hashing and password verification.*/

const { ObjectId } = require("mongodb");
const { getDatabase } = require("../db/db");
const bcrypt = require("bcrypt");

// Define the User schema
const userSchema = {
  username: String,
  email: String,
  password: String,
};

// Create a User model
const UserModel = {
  async createUser(user) {
    const db = getDatabase();

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = {
      ...user,
      password: hashedPassword,
    };

    const result = await db.collection("users").insertOne(newUser);
    return result.insertedId;
  },

  async getUserByUsername(username) {
    const db = getDatabase();
    return db.collection("users").findOne({ username });
  },

  async getUserByEmail(email) {
    const db = getDatabase();
    return db.collection("users").findOne({ email });
  },

  async updateUser(id, updatedUser) {
    const db = getDatabase();
    const result = await db
      .collection("users")
      .updateOne({ _id: ObjectId(id) }, { $set: updatedUser });

    return result.modifiedCount;
  },

  async deleteUser(id) {
    const db = getDatabase();
    const result = await db
      .collection("users")
      .deleteOne({ _id: ObjectId(id) });
    return result.deletedCount;
  },

  async verifyPassword(email, password) {
    const db = getDatabase();
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return false; // User not found
    }

    return bcrypt.compare(password, user.password);
  },
};

module.exports = UserModel;
