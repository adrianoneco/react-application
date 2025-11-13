# TaskFlow - Full-Stack TypeScript Monorepo

Um aplicativo completo de gerenciamento de tarefas demonstrando a arquitetura monorepo moderna com React, Vite, TypeScript, Tailwind CSS, Drizzle ORM, PostgreSQL e Express.

## 🏗️ Estrutura do Projeto

```
.
├── client/                 # Frontend React + Vite
│   ├── src/
│   │   ├── components/    # Componentes React reutilizáveis
│   │   │   ├── ui/       # Componentes Shadcn UI
│   │   │   ├── app-sidebar.tsx
│   │   │   ├── task-card.tsx
│   │   │   ├── task-form.tsx
│   │   │   └── ...
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── lib/          # Utilitários e configurações
│   │   └── App.tsx       # Componente principal
│   └── index.html
│
├── server/                # Backend Express + TypeScript
│   ├── db.ts            # Configuração Drizzle ORM
│   ├── storage.ts       # Camada de persistência
│   ├── routes.ts        # Rotas da API
│   └── index.ts         # Entry point do servidor
│
├── shared/               # Tipos compartilhados
│   └── schema.ts        # Schemas Drizzle e tipos TypeScript
│
└── package.json         # Dependências do monorepo
```

## 🚀 Tecnologias

### Frontend
- **React 18** - Biblioteca UI
- **Vite** - Build tool e dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização utilitária
- **Shadcn UI** - Componentes de interface
- **TanStack Query** - Gerenciamento de estado servidor
- **Wouter** - Roteamento leve
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

### Backend
- **Express** - Framework web
- **TypeScript** - Type safety
- **Drizzle ORM** - Type-safe ORM
- **PostgreSQL** - Banco de dados
- **Neon** - PostgreSQL serverless
- **Zod** - Validação de requisições

### DevOps
- **tsx** - TypeScript execution
- **Drizzle Kit** - Migrations
- **Vite** - HMR e build

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Configurar banco de dados PostgreSQL
# DATABASE_URL será automaticamente configurada no Replit

# Executar migrations
npm run db:push

# Seed inicial de categorias
npx tsx server/seed.ts

# Iniciar aplicação
npm run dev
```

## 🎯 Funcionalidades

### ✅ Gerenciamento de Tarefas
- Criar, editar e excluir tarefas
- Marcar tarefas como concluídas
- Adicionar descrições e categorias
- Filtrar por status (todas, ativas, concluídas)

### 🎨 Interface Moderna
- Design Material 3 adaptado
- Modo claro/escuro com tema persistente
- Sidebar responsiva e colapsável
- Dashboard com estatísticas em tempo real
- Estados vazios elegantes
- Loading states com skeletons
- Toast notifications

### 🗂️ Categorias
- 5 categorias pré-configuradas:
  - 💼 Work (Azul)
  - 👤 Personal (Verde)
  - 🛒 Shopping (Laranja)
  - ❤️ Health (Vermelho)
  - 📚 Learning (Roxo)

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia frontend + backend

# Banco de dados
npm run db:push          # Aplica schema ao banco
npm run db:push --force  # Força aplicação do schema
npx tsx server/seed.ts   # Seed de dados iniciais

# Build (produção)
npm run build           # Build do frontend
```

## 🌐 API Endpoints

### Tasks
```
GET    /api/tasks           # Listar todas as tarefas
GET    /api/tasks/:id       # Buscar tarefa por ID
POST   /api/tasks           # Criar nova tarefa
PATCH  /api/tasks/:id       # Atualizar tarefa
DELETE /api/tasks/:id       # Deletar tarefa
```

### Categories
```
GET    /api/categories      # Listar todas as categorias
GET    /api/categories/:id  # Buscar categoria por ID
POST   /api/categories      # Criar nova categoria
```

## 📊 Schema do Banco de Dados

### Tasks
```typescript
{
  id: number (auto-increment)
  title: string (obrigatório)
  description?: string (opcional)
  completed: boolean (default: false)
  categoryId?: number (FK para categories)
  createdAt: timestamp (auto)
}
```

### Categories
```typescript
{
  id: number (auto-increment)
  name: string (único)
  color: string (hex color)
}
```

## 🔒 Type Safety

O projeto demonstra **type safety completo** através de:

1. **Schemas compartilhados** (`shared/schema.ts`)
   - Drizzle schemas para o banco
   - Zod schemas para validação
   - TypeScript types inferidos

2. **Validação em camadas**
   - Frontend: React Hook Form + Zod
   - Backend: Zod safeParse em todas as rotas
   - Database: Drizzle type-safe queries

3. **End-to-end types**
   - Frontend e backend compartilham os mesmos tipos
   - Autocomplete em todo o stack
   - Refactoring seguro

## 🎨 Sistema de Design

- **Fontes**: Inter (UI) + Source Sans Pro (corpo)
- **Cores**: Sistema de cores HSL com suporte a dark mode
- **Espaçamento**: Escala consistente (2, 4, 6, 8, 12, 16, 20)
- **Componentes**: Shadcn UI com customizações
- **Responsivo**: Mobile-first com breakpoints md/lg

## 🧪 Testes

A aplicação foi testada end-to-end com Playwright:
- ✅ Criação de tarefas
- ✅ Toggle de conclusão
- ✅ Deleção de tarefas
- ✅ Filtros por status
- ✅ Dark mode
- ✅ Sidebar responsiva
- ✅ Validações de formulário

## 📝 Boas Práticas

### Arquitetura
- Separação clara entre frontend/backend/shared
- Camada de storage abstrata (IStorage)
- Rotas finas delegando para storage
- Componentes React modulares e reutilizáveis

### Código
- TypeScript strict mode
- ESLint + Prettier (configurável)
- Conventional commits (sugerido)
- Error handling robusto

### Performance
- React Query para cache inteligente
- Invalidação automática de cache
- Loading states otimistas
- HMR com Vite

## 🚀 Próximos Passos

Funcionalidades sugeridas para expandir o projeto:
- [ ] Autenticação de usuários
- [ ] Drag & drop para reordenar tarefas
- [ ] Tags customizadas
- [ ] Filtros avançados
- [ ] Exportação de dados
- [ ] PWA com offline support
- [ ] Testes unitários e integração
- [ ] CI/CD pipeline
- [ ] Docker containerization

## 📄 Licença

MIT

---

**Desenvolvido como demonstração de arquitetura monorepo full-stack com TypeScript**
