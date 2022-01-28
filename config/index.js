module.exports = {
    HASH_ROUNDS: process.env.HASH_ROUNDS || 8,
    JWT_SECRET: process.env.JWT_SECRET || "super secret"
}