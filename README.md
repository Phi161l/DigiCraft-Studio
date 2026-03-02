# DigiCraft Studio

A modern digital agency website built with Next.js, featuring user authentication, a blog system, and portfolio showcase. DigiCraft Studio helps bring your digital ideas to reality with better design for your digital products.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with theme switching capabilities
- **User Authentication**: Secure login/logout system with JWT tokens
- **Blog System**: Create, read, and manage blog posts with MongoDB
- **Portfolio Showcase**: Display your creative work and projects
- **Admin Dashboard**: Manage content and user accounts
- **Contact & About**: Professional business pages
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend**: Next.js 16.1.6, React 19.2.3
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) with bcryptjs
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Development**: ESLint, Next.js Dev Tools

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd digicraft-studio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```
Add your MongoDB connection string and JWT secret to `.env.local`:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes (auth, posts, etc.)
│   ├── auth/           # Authentication pages
│   ├── blog/           # Blog section
│   ├── dashboard/      # Admin dashboard
│   ├── portfolio/      # Portfolio showcase
│   └── about/          # About page
├── components/         # Reusable UI components
│   ├── Button/         # Custom button component
│   ├── footer/         # Footer component
│   ├── navBar/         # Navigation bar
│   └── theme/          # Theme switcher
├── context/            # React context providers
├── lib/                # Utility functions
├── models/             # MongoDB schemas
│   ├── User.ts         # User model
│   └── Post.ts         # Blog post model
└── proxy.ts            # API proxy configuration
```

## 🔐 Authentication

The application uses JWT-based authentication:
- User registration and login
- Secure password hashing with bcryptjs
- Protected routes and API endpoints
- Session management with HTTP-only cookies

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

### Blog Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post (authenticated)
- `GET /api/posts/[id]` - Get specific post
- `PUT /api/posts/[id]` - Update post (authenticated)
- `DELETE /api/posts/[id]` - Delete post (authenticated)

## 🎨 Components

- **Button**: Reusable button component with multiple styles
- **NavBar**: Navigation with theme switcher and auth state
- **Footer**: Site footer with links and information
- **ThemeProvider**: Context for dark/light theme switching

## 🚀 Deployment

### Build for production:
```bash
npm run build
npm start
```

### Environment Variables for Production:
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token signing
- `NEXTAUTH_URL`: Your production URL (if using NextAuth)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with CSS Modules
- Powered by [MongoDB](https://www.mongodb.com/)
- Icons and illustrations from various sources

