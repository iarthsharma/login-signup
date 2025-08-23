# Login Signup Application

This project is a full-stack application that provides user registration and login functionality. It consists of a Spring Boot backend and a React frontend.

## Project Structure

```
login-signup
├── backend                  # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── example/
│   │   │   │           └── loginsignup/
│   │   │   │               ├── controller/        # Contains UserController.java
│   │   │   │               ├── model/             # Contains User.java
│   │   │   │               ├── repository/        # Contains UserRepository.java
│   │   │   │               └── LoginsignupApplication.java  # Main entry point
│   │   │   ├── resources/
│   │   │   │   └── application.properties  # MongoDB config
│   │   ├── pom.xml              # Maven dependencies for Spring Boot
│
├── frontend                  # React Frontend
│   ├── public/
│   │   └── index.html           # The main HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js         # Login form component
│   │   │   ├── Register.js      # Register form component
│   │   ├── App.js               # Main React app file
│   │   ├── index.js             # React entry point (renders App)
│   ├── package.json             # React dependencies & scripts
│   ├── .env                     # Environment variables for API URL
├── .gitignore                  # Git ignore file for both frontend and backend
```

## Getting Started

### Prerequisites

- Java 11 or higher
- Maven
- Node.js and npm

### Backend Setup

1. Navigate to the `backend` directory.
2. Run `mvn clean install` to install dependencies.
3. Configure your MongoDB connection in `src/main/resources/application.properties`.
4. Start the Spring Boot application using `mvn spring-boot:run`.

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies using `npm install`.
3. Set the API URL in the `.env` file.
4. Start the React application using `npm start`.

## Usage

- Access the application in your browser at `http://localhost:3000`.
- Use the registration form to create a new account.
- Use the login form to access your account.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.

