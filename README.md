# 📚 Book CRUD Application

A modern full-stack web application built with **Angular 18** and **.NET 8** featuring JWT authentication, responsive design, and dark/light theme support.

![Angular](https://img.shields.io/badge/Angular-18-red?style=for-the-badge&logo=angular)

![.NET](https://img.shields.io/badge/.NET-8-purple?style=for-the-badge&logo=dotnet)

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?style=for-the-badge&logo=bootstrap)

## ✨ Features

### 🔐 Authentication & Security
- JWT token-based authentication
- Secure login/logout functionality
- Protected routes and API endpoints
- BCrypt password hashing

### 📖 Book Management (CRUD)
- **Create**: Add new books with title, author, publication date, and description
- **Read**: View all books in a beautiful card-based layout
- **Update**: Edit existing book information
- **Delete**: Remove books from the library

### 💬 My Quotes Section
- Curated collection of 5 inspiring quotes
- Beautiful card design with author and book information
- "Inspiration Corner" section

### 🎨 Modern UI/UX
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Bootstrap 5**: Modern, clean, and professional styling
- **Font Awesome Icons**: Beautiful iconography throughout the app
- **Gradient Design**: Eye-catching color schemes and animations

### 🚀 Technical Features
- Angular 18 standalone components
- Reactive forms with validation
- HTTP interceptors for authentication
- Local storage for theme persistence
- CORS-enabled API
- In-memory database for easy setup

## 🛠️ Tech Stack

### Frontend
- **Angular 18** - Modern web framework
- **TypeScript 5.0** - Type-safe JavaScript
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icon library
- **SCSS** - Enhanced CSS with variables and mixins

### Backend
- **.NET 8** - Cross-platform framework
- **ASP.NET Core Web API** - RESTful API
- **Entity Framework Core** - ORM with InMemory database
- **JWT Bearer Authentication** - Secure token-based auth
- **BCrypt.Net** - Password hashing
- **Swagger/OpenAPI** - API documentation

## 📸 Screenshots

### Login Page
![Login Page](https://via.placeholder.com/800x400/6366f1/ffffff?text=Login+Page)

### Books Library
![Books Library](https://via.placeholder.com/800x400/3b82f6/ffffff?text=Books+Library)

### My Quotes
![My Quotes](https://via.placeholder.com/800x400/8b5cf6/ffffff?text=My+Quotes)

### Dark Theme
![Dark Theme](https://via.placeholder.com/800x400/1f2937/ffffff?text=Dark+Theme)

## 🚀 Quick Start

### Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js 18+](https://nodejs.org/)
- [Angular CLI 18](https://angular.io/cli)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/book-crud-app.git
   cd book-crud-app
   ```

2. **Setup Backend**
   ```bash
   cd backend/BookCrudApi
   dotnet restore
   dotnet build
   dotnet run --urls="http://localhost:5000"
   ```

3. **Setup Frontend** (in a new terminal)
   ```bash
   cd frontend/book-crud-frontend
   npm install
   ng serve --open
   ```

4. **Access the Application**
   - Frontend: http://localhost:4200
   - Backend API: http://localhost:5000
   - Swagger UI: http://localhost:5000/swagger

### Default Login Credentials
- **Username**: `admin`
- **Password**: `admin123`

## 📁 Project Structure

```
book-crud-app/
├── backend/
│   └── BookCrudApi/
│       ├── Controllers/          # API controllers
│       ├── Models/              # Data models
│       ├── Data/                # Database context
│       ├── Services/            # Business logic
│       ├── Program.cs           # Application entry point
│       └── appsettings.json     # Configuration
└── frontend/
    └── book-crud-frontend/
        ├── src/
        │   ├── app/
        │   │   ├── components/  # Angular components
        │   │   ├── services/    # Angular services
        │   │   └── ...
        │   ├── styles.scss      # Global styles
        │   └── index.html
        ├── package.json
        └── angular.json
```

## 🔧 Configuration

### Backend Configuration
Update `appsettings.json` for production:
```json
{
  "Jwt": {
    "Key": "your-super-secret-jwt-key-that-is-at-least-32-characters-long",
    "Issuer": "BookCrudApi",
    "Audience": "BookCrudApi"
  }
}
```

### Frontend Configuration
Update API URL in services for production:
```typescript
// src/app/services/auth.service.ts
private apiUrl = 'https://your-api-domain.com/api/auth';
```

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `ng build --configuration production`
2. Deploy the `dist/book-crud-frontend/browser` folder
3. Add `_redirects` file for SPA routing:
   ```
   /*    /index.html   200
   ```

### Backend (Azure/Heroku)
1. Publish the project: `dotnet publish -c Release`
2. Deploy to your preferred cloud platform
3. Update CORS settings for production domain

## 🧪 Testing

### Run Backend Tests
```bash
cd backend/BookCrudApi
dotnet test
```

### Run Frontend Tests
```bash
cd frontend/book-crud-frontend
ng test
```

## 📚 API Documentation

The API includes the following endpoints:

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Books
- `GET /api/books` - Get all books
- `GET /api/books/{id}` - Get book by ID
- `POST /api/books` - Create new book
- `PUT /api/books/{id}` - Update book
- `DELETE /api/books/{id}` - Delete book

Visit `/swagger` when running the backend for interactive API documentation.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ali Murat Erkek**
- GitHub: https://github.com/erkek3535
- Email: alimuraterkek35@gmail.com

## 🙏 Acknowledgments

- [Angular Team](https://angular.io/) for the amazing framework
- [Microsoft](https://dotnet.microsoft.com/) for .NET 8
- [Bootstrap Team](https://getbootstrap.com/) for the CSS framework
- [Font Awesome](https://fontawesome.com/) for the beautiful icons

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/book-crud-app?style=social)

![GitHub forks](https://img.shields.io/github/forks/yourusername/book-crud-app?style=social)

![GitHub issues](https://img.shields.io/github/issues/yourusername/book-crud-app)

![GitHub license](https://img.shields.io/github/license/yourusername/book-crud-app)

---

⭐ **If you found this project helpful, please give it a star!** ⭐

