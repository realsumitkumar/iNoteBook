# iNotebook

iNotebook is a web application built using React for the front-end and Express for the back-end. It provides a platform for users to create, manage, and organize their notes effectively. Users can register, log in, and perform various operations such as creating, updating, and deleting notes.

## Installation

To run the iNotebook project locally, follow these steps:

1. Clone the repository:

```shell
git clone <repository-url>
```

2. Navigate to the project directory:

```shell
cd iNotebook
```

3. Install the dependencies for the front-end:

```shell
cd frontend
npm install
```

4. Install the dependencies for the back-end:

```shell
cd ../backend
npm install
```

5. Start the development server for the front-end:

```shell
npm start
```

6. Start the development server for the back-end:

```shell
npm run dev
```

7. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000).

## Project Structure

The project structure is as follows:

- `frontend`: Contains the front-end code built with React.
- `backend`: Contains the back-end code built with Express.

## Front-end

The front-end of the iNotebook application is built using React. Here is an overview of the key files and folders in the `frontend` directory:

- `App.js`: The main component that serves as the entry point of the application. It handles the routing and renders other components based on the current URL.
- `Components/`: Contains various reusable components used in the application, such as `Navbar`, `Home`, `About`, `Alert`, `Login`, and `Signup`.
- `context/`: Contains the React context related to notes, including the `NoteState` component that provides the state and actions related to notes.
- `App.css`: CSS styles specific to the `App` component.

## Back-end

The back-end of the iNotebook application is built using Express. Here is an overview of the key files and folders in the `backend` directory:

- `routes/auth.js`: Contains the routes related to user authentication, including creating a user and logging in.
- `routes/notes.js`: Contains the routes related to notes, including fetching all notes, adding a new note, updating a note, and deleting a note.
- `middleware/fetchuser.js`: Middleware function to fetch the logged-in user based on the provided JSON web token (JWT).
- `models/User.js`: Defines the user schema for storing user information in the database.
- `models/Note.js`: Defines the note schema for storing note information in the database.
- `index.js`: The main entry point of the back-end application, sets up the Express server and connects to the database.

## Dependencies

Here are some of the key dependencies used in the iNotebook application:

### Front-end Dependencies

- `react-router-dom`: Used for routing within the React application.
- `axios`: Used for making HTTP requests to the back-end API.
- `react-toastify`: Used for displaying toast notifications.
- `react-bootstrap`: Used for styling components with pre-defined Bootstrap styles.

### Back-end Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `mongoose`: MongoDB object modeling tool used for connecting to and interacting with the MongoDB database.
- `bcryptjs`: Library for hashing passwords and comparing hashed passwords.
- `jsonwebtoken`: JSON Web Token library for generating and verifying tokens.

## API Endpoints

The iNotebook back-end provides the following API endpoints:

- `POST /api/auth/createuser`: Creates a new user.
-

 `POST /api/auth/login`: Authenticates a user and returns a JSON web token (JWT) for accessing protected routes.
- `POST /api/auth/getuser`: Retrieves the details of the logged-in user.
- `GET /api/notes/fetchallnotes`: Retrieves all the notes for the logged-in user.
- `POST /api/notes/addnote`: Adds a new note for the logged-in user.
- `PUT /api/notes/updatenote/:id`: Updates an existing note for the logged-in user.
- `DELETE /api/notes/deletenote/:id`: Deletes an existing note for the logged-in user.

Note: To access the protected routes, include the JWT in the Authorization header of the request as follows: `Bearer <jwt-token>`.

---

This is a basic overview of the iNotebook project. Feel free to explore the code further and customize it according to your requirements. If you have any questions or need further assistance, please don't hesitate to ask.
