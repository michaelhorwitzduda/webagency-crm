# WebAgency CRM

A modern, full-featured CRM application built specifically for website agencies managing small business clients in trades like plumbing, electrical, and HVAC services.

![Built with React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-38bdf8?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6?logo=typescript)

## 📚 Documentation

- **[📖 README.md](./README.md)** - You are here! Main documentation
- **[⚙️ SETUP.md](./SETUP.md)** - Detailed setup and Git repository guide
- **[⚡ GIT_QUICK_START.md](./GIT_QUICK_START.md)** - Quick Git commands reference
- **[📊 PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Comprehensive project overview
- **[📝 CHANGELOG.md](./CHANGELOG.md)** - Version history and planned features
- **[🗂️ INDEX.md](./INDEX.md)** - Documentation navigation guide
- **[⚡ QUICKSTART.md](./QUICKSTART.md)** - 5-minute quick start guide

## ✨ Features

### 📊 Dashboard
- Real-time metrics display
  - Total Clients
  - Active Projects
  - Websites Live
  - Monthly Revenue
- Recent projects overview
- Quick statistics

### 👥 Client Management
- **Client List View**
  - Searchable table
  - Filterable by business type, website status, and city
  - Sortable columns
  - Pagination (10 per page)

- **Client Detail View**
  - Company logo display
  - Complete business information
  - Contact details
  - Website status tracking
  - **Brand Guidelines Section**
    - 🎨 Tone of Voice documentation
    - 🎨 Color Palette (Primary, Secondary, Accent colors)
    - 🔤 Typography specifications (Heading and Body fonts)
  - Project timeline with progress tracking
  - Statistics (Total Projects, Active Projects, Monthly Fee, Total Paid)
  - CTAs: View Website & Edit Website buttons

### 🚀 Project Management
- Project cards with visual design
- Progress bars for tracking
- Status tracking: Planning → Design → Development → Testing → Live
- Project types: New Website, Redesign, Maintenance, SEO
- Budget and deadline management
- Filter by status and type

### 💰 Revenue Tracking
- Monthly revenue visualization (bar chart)
- Key metrics:
  - Total Revenue
  - Average Monthly
  - Growth Rate
  - Recurring Revenue
- Invoice management table
- Status tracking (Paid, Pending, Overdue)

### 🧭 Navigation
- Fixed sidebar with logo
- Clear menu structure
- User profile section
- Visual active state indicators

## 🎨 Sample Data

Includes 3 complete client profiles with full brand guidelines:

1. **Mike's Plumbing Services**
   - Blue brand theme (#2563eb)
   - Montserrat/Open Sans fonts
   - Professional yet friendly tone

2. **Elite Electric Co.**
   - Yellow/Black theme (#eab308)
   - Roboto fonts
   - Confident and safety-focused tone

3. **Cool Air HVAC**
   - Blue/Pink theme (#0ea5e9)
   - Inter fonts
   - Knowledgeable and helpful tone

Plus 15+ additional mock clients across various industries.

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Create Git Repository

```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit: WebAgency CRM v1.0"

# Push to GitHub (replace with your URL)
git remote add origin https://github.com/YOUR-USERNAME/webagency-crm.git
git branch -M main
git push -u origin main
```

For detailed setup instructions, see **[SETUP.md](./SETUP.md)** or **[QUICKSTART.md](./QUICKSTART.md)**.

## 💻 Technology Stack

- **React 18.3.1** - UI library
- **TypeScript** - Type safety (ready to use)
- **Vite 6.3.5** - Build tool and dev server
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Motion (Framer Motion)** - Animation library

## 📁 Project Structure

```
webagency-crm/
├── src/
│   ├── app/
│   │   ├── App.tsx                      # Main application
│   │   └── components/
│   │       ├── Sidebar.tsx              # Navigation
│   │       ├── Dashboard.tsx            # Dashboard view
│   │       ├── ClientList.tsx           # Client table with filters
│   │       ├── ClientDetail.tsx         # Client profile with brand guidelines
│   │       ├── ProjectList.tsx          # Project management
│   │       ├── Revenue.tsx              # Financial tracking
│   │       ├── SampleClientData.tsx     # Sample data
│   │       ├── figma/
│   │       │   └── ImageWithFallback.tsx
│   │       └── ui/                      # 40+ UI components
│   ├── imports/
│   │   └── icon-paths.ts                # SVG icons
│   └── styles/
│       ├── index.css                    # Main CSS
│       ├── tailwind.css                 # Tailwind directives
│       ├── theme.css                    # Design tokens
│       └── fonts.css                    # Font imports
├── README.md                            # Main documentation
├── SETUP.md                             # Setup guide
├── GIT_QUICK_START.md                   # Git reference
├── PROJECT_SUMMARY.md                   # Project overview
├── CHANGELOG.md                         # Version history
├── INDEX.md                             # Documentation index
├── QUICKSTART.md                        # Quick start guide
├── package.json                         # Dependencies
├── vite.config.ts                       # Vite config
└── postcss.config.mjs                   # PostCSS config
```

## 🎯 Key Data Models

### Client Interface

```typescript
interface Client {
  id: string;
  businessName: string;
  contactPerson: string;
  businessType: 'Plumbing' | 'Electrician' | 'HVAC' | 'Other';
  phone: string;
  email: string;
  websiteStatus: 'Live' | 'Development' | 'Design' | 'Planning' | 'Inactive';
  city: string;
  monthlyFee: string;
  
  // Enhanced fields
  logo?: string;
  businessDescription?: string;
  industry?: string;
  address?: string;
  websiteUrl?: string;
  joinDate?: string;
  totalPaid?: string;
  notes?: string;
  
  // Brand guidelines
  brandGuidelines?: {
    toneOfVoice?: string;
    colors?: {
      primary?: string;
      secondary?: string;
      accent?: string;
    };
    fonts?: {
      heading?: string;
      body?: string;
    };
  };
}
```

### Project Interface

```typescript
interface Project {
  id: string;
  projectType: 'New Website' | 'Redesign' | 'Maintenance' | 'SEO';
  status: 'Planning' | 'Design' | 'Development' | 'Testing' | 'Live' | 'On Hold';
  startDate: string;
  deadline?: string;
  completedDate?: string;
  progress: number; // 0-100
  budget: string;
  description: string;
}
```

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Linting (if configured)
npm run lint         # Run linter
```

### Making Changes

1. Edit components in `/src/app/components/`
2. Update styles in `/src/styles/theme.css`
3. Modify sample data in `/src/app/components/SampleClientData.tsx`
4. Test in browser (hot reload enabled)
5. Commit with descriptive messages

### Component Development

All components follow this pattern:
- Export TypeScript interfaces for props
- Use functional components with hooks
- Apply Tailwind CSS utility classes
- Maintain consistent spacing (8px grid)
- Add hover states for interactive elements

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Vite configuration
6. Click "Deploy"

✅ Your app is now live!

### Netlify

**Option A: Drag & Drop**
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag `dist/` folder to deploy

**Option B: Git Integration**
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/webagency-crm",
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Environment Variables

For production APIs, create environment variables:

```env
VITE_API_URL=https://api.yoursite.com
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=your-key-here
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🔐 Production Readiness Checklist

### Required for Production

- [ ] Replace mock data with real API
- [ ] Add authentication (Clerk, Auth0, Supabase Auth)
- [ ] Set up database (Supabase, PostgreSQL, MongoDB)
- [ ] Configure environment variables
- [ ] Add error boundaries
- [ ] Implement loading states
- [ ] Add form validation
- [ ] Set up analytics (Google Analytics, Plausible)
- [ ] Configure error logging (Sentry)
- [ ] Add tests (Vitest, React Testing Library)
- [ ] Optimize images
- [ ] Set up CI/CD pipeline

### Recommended Backend Schema

```sql
-- Clients table
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_name TEXT NOT NULL,
  contact_person TEXT,
  business_type TEXT,
  phone TEXT,
  email TEXT,
  website_status TEXT,
  city TEXT,
  monthly_fee TEXT,
  logo_url TEXT,
  business_description TEXT,
  industry TEXT,
  brand_guidelines JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  project_type TEXT,
  status TEXT,
  start_date DATE,
  deadline DATE,
  completed_date DATE,
  progress INTEGER CHECK (progress >= 0 AND progress <= 100),
  budget TEXT,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Invoices table
CREATE TABLE invoices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  invoice_number TEXT UNIQUE,
  amount DECIMAL(10, 2),
  status TEXT,
  due_date DATE,
  paid_date DATE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🔄 Future Enhancements

### Short Term
- [ ] CSV export for client data
- [ ] CSV import for bulk client creation
- [ ] Email integration
- [ ] Calendar view for projects
- [ ] Task management per project
- [ ] File upload for client documents

### Medium Term
- [ ] Multi-user support with roles
- [ ] Client portal (separate app)
- [ ] Automated invoicing
- [ ] Time tracking
- [ ] Payment integration (Stripe)
- [ ] Email campaigns

### Long Term
- [ ] Mobile app (React Native)
- [ ] Advanced reporting & analytics
- [ ] AI-powered insights
- [ ] Webhook integrations
- [ ] White-label options
- [ ] Public API for third-party integrations

## 🐛 Known Limitations

1. **Mock Data** - Currently uses hardcoded data, needs backend integration
2. **No Authentication** - Open access, requires auth implementation
3. **No Real-Time Updates** - Static data, needs websockets for live updates
4. **No File Storage** - Logos use external URLs, needs cloud storage
5. **No Email** - Email links are `mailto:`, needs email service
6. **Client-Side Only** - No server-side rendering (SSR)

## 🤝 Contributing

### Code Style

- Use TypeScript interfaces for all props
- Follow existing component patterns
- Use Tailwind CSS (no custom CSS)
- Add comments for complex logic
- Export reusable types and data

### Commit Message Format

```
type: description

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Adding tests
- chore: Maintenance
```

Examples:
```bash
feat: add client export to CSV
fix: correct pagination on client list
docs: update README with API integration guide
```

## 🆘 Troubleshooting

### Development server won't start

```bash
# Check Node.js version (needs v18+)
node --version

# Clear cache
rm -rf node_modules/.vite
npm run dev
```

### Port 5173 already in use

```bash
# Use different port
npm run dev -- --port 3000
```

### Changes not showing up

```bash
# Stop server (Ctrl+C)
# Clear cache
rm -rf node_modules/.vite
# Restart
npm run dev
```

### Permission denied when pushing to GitHub

Set up SSH keys or use Personal Access Token:
- [GitHub SSH setup guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [GitHub PAT guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## 📞 Support & Resources

- **Documentation:** Check the [documentation index](./INDEX.md)
- **Code Examples:** All components in `/src/app/components/`
- **Sample Data:** `/src/app/components/SampleClientData.tsx`
- **Design System:** `/src/styles/theme.css`

### External Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vite.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📝 License

Private and proprietary. For internal use only.

## 🙏 Acknowledgments

- Built with [Figma Make](https://www.figma.com)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

---

**Version:** 1.0.0  
**Last Updated:** January 28, 2026  
**Built with:** React, TypeScript, Vite, and Tailwind CSS

**Ready to get started?** Check out the [QUICKSTART.md](./QUICKSTART.md) for a 5-minute setup guide!
