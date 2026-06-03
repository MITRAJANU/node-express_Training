import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt);
const keyLength = 64;

// Utility layer: password hashing is kept separate from controllers.
export const hashPassword = async (plainPassword) => {
  const salt = randomBytes(16).toString("hex");
  // KEY: scrypt is intentionally slow, which makes stolen hashes harder to brute-force.
  const derivedKey = await scryptAsync(plainPassword, salt, keyLength);

  return `scrypt:${salt}:${derivedKey.toString("hex")}`;
};

export const verifyPassword = async (plainPassword, storedPassword) => {
  const [algorithm, salt, storedHash] = storedPassword.split(":");

  if (algorithm !== "scrypt" || !salt || !storedHash) {
    return false;
  }

  const storedBuffer = Buffer.from(storedHash, "hex");
  const derivedKey = await scryptAsync(plainPassword, salt, storedBuffer.length);

  // KEY: timingSafeEqual avoids leaking comparison timing information.
  return timingSafeEqual(storedBuffer, derivedKey);
};
