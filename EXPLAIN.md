# Checkpoint 05 Instructor Notes

## The analogy

- bcrypt hashing is like putting a password through a one-way shredder that still lets us compare later.
- A JWT is like a tamper-proof event wristband: it proves it was issued by the server, but the printed text is still visible.
- Registration is creating an identity; login is proving control of that identity.

## Build-up narration

Authentication is split into two moments. During registration, we never store the raw password; we hash it with bcrypt and save the hash. During login, we compare the submitted password against that hash. If the password is correct, we sign a JWT so the client can prove identity on later requests.

```text
register -> validate -> bcrypt.hash -> save user
login    -> find user -> bcrypt.compare -> jwt.sign -> return token
```

## If a student asks...

- Why not store the password? If the database leaks, raw passwords would leak too.
- Why not include email only in the JWT? User id is stable and efficient for database lookup.
- Can the frontend read the token? Yes, so do not put secrets in the payload.

## Common student mistakes

- Returning the password hash in responses: use a safe user object.
- Forgetting `.select("+password")`: login cannot compare because password is excluded by default.
- Using 400 for duplicate email: teach 409 because uniqueness conflict is the issue.
