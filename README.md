# MOBILE APPLICATION FOR TEXTILE SHOP - SERVER

This Node.js server project is developed using Express and MongoDB Atlas to support the mobile application for managing a textile shop's stock and staff details.

# Features
  The server provides APIs for the following functionalities:
  - Add Product Details: Endpoint for adding new products to the database.
  - Delete Product Details: Endpoint for removing products from the database.
  - View Product Details: Endpoint for retrieving a list of all products with their details from the database.
  - Add Staff Details: Endpoint for adding new staff members to the database.
  - Delete Staff Details: Endpoint for removing staff members from the database.
  - View Staff Details: Endpoint for retrieving a list of all staff members with their details from the database.
    
## Getting Started
   To run this server locally, follow these steps:

   - Clone this repository to your local machine.
   - Create a .env file in the project root directory.
   - Add the following line to the .env file, replacing your-mongodb-atlas-url with the actual MongoDB Atlas connection URL:`MONGO_URL=your-mongodb-atlas-url`
   - Save the .env file.
   - Install dependencies using npm install.
   - Start the server using npm start.
     
## API Endpoints
   The server exposes the following API endpoints:
   - POST /addproduct: Add product details to the database.
   - DELETE /deleteproduct/:id: Delete product details from the database.
   - GET /getproduct: Get a list of all products with their details from the database.
   - POST /addstaff: Add staff details to the database.
   - DELETE /deletestaff/:id: Delete staff details from the database.
   - GET /staffdetails: Get a list of all staff members with their details from the database.
     
## Clinet Code
   The Client code for this project is available in a separate repository. Please refer to link https://github.com/kamalj57/Consultancy for the client code.
   
## Contributing
   We welcome contributions to improve this project! Feel free to fork the repository and submit pull requests for any enhancements or bug fixes.
   
## License
   This project is licensed under the MIT License. Make sure to replace placeholder values `MONGO_URL` with your actual credentials.
