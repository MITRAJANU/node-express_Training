# Checkpoint 06 Instructor Notes

## The analogy

- Authentication is like checking an ID card.
- Authorization is like checking whether that ID card has access to a room.
- Ownership is like checking whether the laptop being collected actually belongs to that student.

## Build-up narration

This is the final production-style structure. The token proves identity, the role decides broad permissions, and the ownership check protects individual resources. The most important line to explain is that task owner comes from `req.user`, not the request body. That is the difference between a demo API and an API that resists obvious abuse.

```text
register -> login -> receive JWT
protected request
  -> Authorization: Bearer token
  -> authenticate verifies JWT
  -> req.user is attached
  -> route/controller checks role or ownership
  -> DB operation
```

## If a student asks...

- Why not put auth in every controller? Middleware keeps cross-cutting security logic reusable.
- Why can admin update any task? That is an explicit business rule implemented in the ownership middleware.
- Why does missing token return 401? The server cannot identify the caller.

## Common student mistakes

- Sending token without `Bearer ` prefix: the middleware rejects it.
- Confusing user id with task id: show the route param versus `req.user._id`.
- Forgetting to protect routes before handlers: middleware order controls security.
