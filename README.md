# api-auth


|       Route      |  HTTP   | Description |
|------------------|---------|-------------|
|/api/singup       |   POST   | SignUp with new user info |
|/api/singIn      |   POST   | Sign in while get an access token based on credentials |
|/api/users/      |   GET   | GET all users info (admin info) |
|/api/users/:id    |   GET   | GET a single user info (admin and authenticated user) |
|/api/users        |   POST  | Create a uer (admin only) |
|/api/users/:id    |  DELETE | Delete a user (admin only) |
|/api/users/:id    |    PUT  | Update a user with new info (admin adn authenticated user) |
