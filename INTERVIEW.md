# Checkpoint 06 Interview Prep

## Concept-in-one-line

- Authentication: verifying who the user is.
- Authorization: checking what an authenticated user is allowed to do.
- RBAC: role-based access control, where permissions are based on roles like user or admin.
- Ownership check: resource-level authorization that verifies the resource belongs to the user.
- Bearer token: an access token sent in the Authorization header.
- 401 Unauthorized: the user is not authenticated.
- 403 Forbidden: the user is authenticated but not allowed.

## Likely Interview Questions

1. Authentication vs authorization?
   Authentication asks "who are you"; authorization asks "what are you allowed to do".
2. What does RBAC mean?
   Role-based access control grants permissions based on user roles such as admin or user.
3. Why do we need ownership checks if we already have roles?
   A normal user may be allowed to update tasks, but only tasks they own.
4. What is the difference between 401 and 403?
   401 means not authenticated; 403 means authenticated but not permitted.
5. Why verify JWT instead of decoding it?
   Decode only reads payload; verify checks the signature and expiration.
6. Why should the server set task owner from `req.user`?
   Client-supplied owner ids can be forged, but `req.user` comes from a verified token.
7. Can admins bypass ownership?
   In this API yes, because admin role is explicitly allowed by the authorization rule.

## Gotcha Traps

- "Logged in means allowed to do everything" is wrong. Authentication is not authorization.
- "403 means not logged in" is wrong. 403 means logged in but blocked.
- "Trust owner from request body" is unsafe. Ownership must come from the verified user.

## Whiteboard Question

Trace a protected update request from Bearer token to ownership check to MongoDB update.
