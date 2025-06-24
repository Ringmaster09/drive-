 Drive Clone - Backend

A backend-only clone of cloud storage platforms like Google Drive, built to handle file storage, user authentication, and basic folder management via RESTful APIs.

Features

- User Registration & Login (JWT Auth)
- File Upload & Download
- Folder Creation & Nesting
- File & Folder Deletion
- File Metadata Handling (size, type, etc.)
- Public/Private File Access Control (optional)

Tech Stack

- **Node.js** with **Express.js**
- **MongoDB** with Mongoose (or your DB of choice)
- **Multer** for file uploads
- **JWT** for authentication
- **Cloud Storage** (e.g., local disk / AWS S3 / Firebase – depending on your implementation)
