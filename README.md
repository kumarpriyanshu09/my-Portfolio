# Priyanshu Kumar's Portfolio

A modern, responsive, and interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS. The portfolio showcases Priyanshu Kumar's skills, projects, experience, and certifications in a visually appealing and user-friendly manner.

## 🚀 Features

- **Modern UI/UX** - Built with a clean, responsive design using Tailwind CSS
- **Interactive Elements** - Smooth animations and transitions with Framer Motion
- **Dark/Light Mode** - Built-in theme support with next-themes
- **Performance Optimized** - Fast loading with Next.js and optimized assets
- **Type Safety** - Full TypeScript support for better developer experience
- **Responsive Design** - Works on all device sizes

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom theming
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) components
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Project Structure

```
heyitspriyanshu/
├── app/                    # App Router pages and layouts
├── components/             # Reusable UI components
│   ├── atoms/             # Atomic design atoms
│   ├── molecules/         # Molecular components
│   ├── organisms/         # Complex UI components
│   ├── sections/          # Page sections
│   ├── templates/         # Layout templates
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Global styles and themes
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- pnpm package manager (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kumarpriyanshu09/heyitspriyanshu.git
   ```

2. Install dependencies using pnpm (recommended):
   ```bash
   pnpm install
   ```
   
   Or using npm:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```
   
   Or using npm:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Development

### Available Scripts

Using pnpm (recommended):
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

Using npm:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Styling

This project uses Tailwind CSS for styling. The theme configuration can be found in `tailwind.config.ts`.

### Package Manager

This project uses pnpm as the primary package manager. The `pnpm-lock.yaml` file ensures consistent dependency versions across installations. If you prefer to use pnpm (recommended), you can install it using:

```bash
npm install -g pnpm
```

### Adding New Components

1. Place new components in the appropriate directory under `components/`
2. Follow the atomic design principles
3. Use TypeScript for type safety
4. Document props using JSDoc comments


## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

Made with ❤️ by Priyanshu Kumar
