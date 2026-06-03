# Checkpoint 05 Interview Prep

## Concept-in-one-line

- Authentication: verifying who the user is.
- `crypto.scrypt`: Node's built-in password-based key derivation function used here for password hashing.
- Hashing: a one-way transformation used to verify passwords without storing the original.
- Salt: random data added before hashing so identical passwords do not produce identical hashes.
- JWT: a signed token containing claims that the server can verify.
- Claims: values inside a JWT payload, such as user id and role.
- 409 Conflict: the status code for duplicate email registration.

## Likely Interview Questions

1. Why hash passwords instead of encrypting them?
   Encryption is reversible with a key; hashing is one-way, so even the server should not be able to recover the password.
2. What is a salt?
   A random value added before hashing so two users with the same password get different hashes.
3. What is inside a JWT?
   A header, payload, and signature. The payload contains claims and is readable.
4. Is a JWT encrypted?
   No, a normal JWT is signed, not encrypted. Clients can base64-decode and read the payload.
5. Why return 401 for bad login?
   The client has not proven a valid identity.
6. Why return 409 for duplicate email?
   The request conflicts with an existing unique resource.
7. Where should JWTs be stored?
   HTTP-only cookies reduce script access; localStorage is simpler but more exposed to XSS. The choice depends on app needs.
8. Why use `crypto.scrypt` here?
   It is built into Node, intentionally expensive, and suitable for deriving password hashes with a unique salt.

## Gotcha Traps

- "JWT is encrypted" is wrong. It is signed; the payload is readable unless a separate encryption format is used.
- "Hashing and encryption are the same" is wrong. Hashing is one-way, encryption is reversible.
- "Store user password in the JWT" is dangerous. Never put secrets in a token payload.

## Whiteboard Question

Design the register/login flow and explain where hashing and token signing happen.
