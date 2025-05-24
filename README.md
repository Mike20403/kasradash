# Kasra Dashboard

A modern dashboard application built with Next.js 15, React, and Tailwind CSS.

## Prerequisites

- Node.js 18.x or higher
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd kasra-dash
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

> Note: We use `--legacy-peer-deps` flag to handle dependency conflicts between React versions.

## Development

To start the development server:

```bash
npm run dev
```

This will start the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
kasra-dash/
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── settings/        # Settings page
├── components/          # React components
│   ├── ui/             # UI components
│   └── navigation.tsx  # Navigation component
├── lib/                # Utility functions and configs
├── public/             # Static files
└── styles/            # Additional styles
```

## Technologies Used

- Next.js 15.2.4
- React 19
- Tailwind CSS
- Radix UI Components
- React Day Picker
- TypeScript

## Environment Setup

Make sure your environment is properly configured:

1. Node.js version compatibility:
```bash
node --version  # Should be v18 or higher
```

2. Package manager version:
```bash
npm --version
```

## Troubleshooting

If you encounter dependency issues during installation:

1. Clear npm cache:
```bash
npm cache clean --force
```

2. Delete node_modules and reinstall:
```bash
rm -rf node_modules
rm package-lock.json
npm install --legacy-peer-deps
```

## Browser Support

The dashboard is optimized for modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
