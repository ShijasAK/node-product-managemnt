# node-product-managemnt

set up the Express.js server and connects to a MongoDB database.
Imports necessary packages, such as Express, Mongoose,crypto-js,jwt, and dotenv for environment variables.
Configures routes for authentication (authRoute), user management (userRoute), and product management (productRoute).
Uses CORS middleware to enable cross-origin requests.
Starts the server on the specified port, which can be configured through an environment variable (process.env.PORT).
Defined the Mongoose schema for users, specifying the fields username, mobile, email, password, and isAdmin.
Timestamps are enabled, so each user will have createdAt and updatedAt fields.
Defined the Mongoose schema for products, specifying the fields title, desc, and price.
Timestamps are enabled, so each product will have createdAt and updatedAt fields.

This file contains environment variables used in your application, including database URL (DB_URL), a secret for encrypting passwords (PASS_SEC), and a secret for JWT (JSON Web Token)
creation and validation (JWT_SEC).

Defines routes for user registration and login.
Registers a new user by encrypting the password and saving user data to the database.
Handles user login, decrypting the password for comparison and generating a JWT token upon successful login.
Uses CryptoJS to encrypt and decrypt passwords.
It sends the user's data (excluding the password) along with a JWT token in response after successful login.

Defines routes for creating, updating, deleting, and retrieving products.
It includes middleware functions (verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin) for JWT-based authentication and authorization.
The routes allow for creating, updating, and deleting products with appropriate permissions.

Similar to the product management user management route, this route defines routes for creating, updating, deleting, and retrieving user data.
It includes the same middleware functions (verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin) for JWT-based authentication and authorization.
The routes allow for creating, updating, and deleting users with appropriate permissions.
Routes also enable searching for users, retrieving all users, and getting user statistics for the past year.
**verifyToken.js (Middleware)

This file defines middleware functions for JWT-based user authentication and authorization.
verifyToken checks if a token is included in the request header and verifies its validity.
verifyTokenAndAuthorization and verifyTokenAndAdmin use verifyToken to further check if the user has the necessary permissions
(e.g., for updating or deleting their own data, or for admin-level access).



