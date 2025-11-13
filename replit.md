# TaskFlow - Task Management Application

## Overview

TaskFlow is a modern full-stack task management application built as a monorepo using React, TypeScript, Express, and PostgreSQL. The application enables users to create, manage, and organize tasks with categories, providing a clean interface for personal productivity tracking.

**Core Purpose**: Provide a streamlined task management system with category organization, task filtering, and real-time updates.

**Key Features**:
- Task CRUD operations (Create, Read, Update, Delete)
- Category-based task organization
- Task completion tracking
- Real-time statistics dashboard
- Responsive design with dark/light theme support

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure

**Decision**: Full-stack monorepo with shared code between client and server
- **Rationale**: Enables type-safe contracts between frontend and backend through shared schema definitions, reduces code duplication, and simplifies development workflow
- **Structure**:
  - `client/` - React frontend application
  - `server/` - Express backend API
  - `shared/` - Shared TypeScript types and schemas
- **Pros**: Single source of truth for data models, simplified dependency management, unified build process
- **Cons**: Requires careful module resolution configuration, larger repository size

### Frontend Architecture

**Framework**: React 18 with TypeScript and Vite
- **Rationale**: Vite provides fast HMR and build times; React offers robust ecosystem; TypeScript ensures type safety
- **Router**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query (React Query) for server state
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui components

**UI Component Library**: shadcn/ui (Radix UI primitives)
- **Decision**: Component-based architecture with Radix UI headless components
- **Rationale**: Accessible, customizable components without runtime overhead
- **Design System**: Material Design 3 principles adapted for web (see `design_guidelines.md`)
- **Theme**: Light/dark mode support with CSS variables

**Form Handling**: React Hook Form with Zod validation
- **Rationale**: Type-safe form validation using shared schemas from backend

### Backend Architecture

**Framework**: Express.js with TypeScript
- **Decision**: RESTful API architecture
- **Rationale**: Simple, well-understood pattern suitable for CRUD operations
- **Middleware**: JSON body parsing, request logging, error handling

**API Design**:
- Resource-based endpoints (`/api/tasks`, `/api/categories`)
- Standard HTTP methods (GET, POST, PATCH, DELETE)
- JSON request/response format
- Validation using Zod schemas before database operations

**Storage Layer**:
- **Pattern**: Repository pattern implemented via `IStorage` interface
- **Implementation**: `DatabaseStorage` class handles all database operations
- **Rationale**: Abstracts data access logic, enables easier testing and potential storage backend changes

### Data Storage

**Database**: PostgreSQL (via Neon serverless)
- **ORM**: Drizzle ORM
- **Decision**: Type-safe SQL with Drizzle over traditional ORMs
- **Rationale**: Better TypeScript integration, generated types match database schema, minimal runtime overhead
- **Migration**: Drizzle Kit for schema management (`drizzle.config.ts`)

**Schema Design**:
```typescript
- categories: id, name, color
- tasks: id, title, description, completed, categoryId, createdAt
```
- **Relations**: Tasks belong to Categories (optional foreign key)
- **Validation**: Zod schemas (`insertTaskSchema`, `insertCategorySchema`) provide runtime validation matching database schema

**Connection Management**:
- Neon serverless with WebSocket support for edge compatibility
- Connection pooling via `@neondatabase/serverless`

### Development Environment

**Build Tool**: Vite
- **Development**: HMR with middleware mode integration with Express
- **Production**: Static asset bundling, ESBuild for server code

**TypeScript Configuration**:
- Strict mode enabled
- Path aliases for clean imports (`@/`, `@shared/`)
- Monorepo-aware configuration

**Development Workflow**:
- `npm run dev` - Concurrent development server (Vite + Express)
- `npm run build` - Production build (client + server)
- `npm run db:push` - Push schema changes to database

### Authentication & Authorization

**Current State**: No authentication implemented
- **Note**: Application currently has no user authentication or authorization
- **Future Consideration**: May require session management, user isolation for tasks/categories

## External Dependencies

### Third-Party Services

**Database**: Neon Postgres (Serverless PostgreSQL)
- **Integration**: Via `DATABASE_URL` environment variable
- **Driver**: `@neondatabase/serverless` with WebSocket support
- **Purpose**: Primary data storage for tasks and categories

### Key NPM Packages

**Frontend**:
- `@tanstack/react-query` - Server state management and caching
- `@radix-ui/*` - Headless UI component primitives
- `react-hook-form` + `@hookform/resolvers` - Form management
- `zod` - Runtime type validation
- `tailwindcss` - Utility-first CSS framework
- `date-fns` - Date formatting utilities
- `wouter` - Lightweight routing

**Backend**:
- `express` - Web server framework
- `drizzle-orm` - Type-safe database ORM
- `drizzle-zod` - Generate Zod schemas from Drizzle schemas
- `ws` - WebSocket support for Neon connection

**Development**:
- `vite` - Build tool and dev server
- `tsx` - TypeScript execution for development
- `esbuild` - Production server bundling
- `@replit/*` plugins - Replit-specific development enhancements

### Font Resources

**Google Fonts**:
- Inter - Primary UI font (headings, buttons)
- Source Sans Pro - Secondary font (body text)

### Environment Variables

**Required**:
- `DATABASE_URL` - PostgreSQL connection string for Neon database

**Optional**:
- `NODE_ENV` - Environment mode (development/production)
- `REPL_ID` - Replit-specific identifier for dev plugins