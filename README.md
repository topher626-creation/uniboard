# UniBoard - Student Housing Marketplace (Monorepo)

UniBoard connects students with verified landlords near universities in Zambia (UNZA, CBU, MUKUBA, etc.).

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 20+
- Docker (for Postgres) or PostgreSQL
- Git

### 1. Clone & Install
```bash
git clone <repo>
cd uniboard
npm install
npm run install:all
```

### 2. Database Setup
```bash
# Option A: Docker (recommended)
docker-compose up -d db

# Option B: Local Postgres or cloud (update backend/.env DB_URL)
```

### 3. Backend Setup
```bash
npm run db:push    # Create tables
npm run db:seed    # Add demo data
npm run dev:backend  # Start API on http://localhost:5000
```

### 4. Frontend Development
```bash
npm run dev:frontend  # Start Next.js on http://localhost:4028
```

### 5. Full Stack (Both Servers)
```bash
npm run dev  # Backend:5000 + Frontend:4028
```

Open [http://localhost:4028](http://localhost:4028)

## 🛠 Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend + backend |
| `npm run dev:backend` | Backend only (API server) |
| `npm run dev:frontend` | Frontend only (Next.js) |
| `npm run db:push` | Sync DB schema |
| `npm run db:seed` | Load demo properties/users |
| `npm run db:studio` | Open Prisma Studio |
| `npm run lint` | Lint all packages |
| `npm run format` | Format code |

## 📁 Structure

```
uniboard/
├── frontend/          # Next.js 15 App (React/TS/Tailwind)
├── backend/           # Express + Prisma + Postgres API
├── docker-compose.yml # Postgres DB
├── package.json       # Monorepo workspaces
└── README.md
```

## 🔐 Demo Accounts
```
Student: chipo@student.unza.zm / UniBoard@2026
Landlord: chanda@mwaleresidences.zm / LandlordPass#88
Admin: admin@uniboard.zm / AdminSecure$99
```

## 🌐 API Docs
Backend API at `http://localhost:5000/api`
- `POST /api/auth/login`
- `GET /api/properties`
- `GET /api/properties/:id`
- `GET /api/providers`

## 🚀 Production
**Frontend**: Vercel/Netlify  
**Backend + DB**: Render/Heroku + Neon/Supabase/Postgres

## Tech Stack
- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, Prisma ORM, PostgreSQL, JWT + bcrypt
- **Tools**: Docker, concurrently, Prettier, ESLint

## License
MIT
