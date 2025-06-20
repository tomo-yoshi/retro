# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a retro Windows 95-style portfolio website built with Next.js 15, React 19, and Tailwind CSS. The site uses a desktop metaphor with windows, taskbar, and classic Windows 95 UI elements.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix

## Cloudflare Deployment

The project uses OpenNext.js for Cloudflare deployment:
- `pnpm preview` - Build and preview on Cloudflare locally
- `pnpm deploy` - Build and deploy to Cloudflare
- `pnpm cf-typegen` - Generate Cloudflare types

## Architecture

### UI Theme System
The entire UI mimics Windows 95 aesthetics with:
- Classic 3D border effects using CSS border colors (`#c0c0c0`, `#808080`, `white`)
- Windows with title bars, minimize/maximize/close buttons
- Taskbar at bottom with navigation items
- Desktop icons in top-left corner

### Key Components Structure
- `WindowTemplate` - Main window wrapper with positioning and scrollbar styling
- `Window` - Core window component with title bar and content area
- `Taskbar` - Bottom navigation bar with routing
- `DesktopIcon` - Clickable desktop icons for external links

### Page Architecture
- Layout: Contains desktop background, desktop icons, and taskbar
- Pages use `WindowTemplate` for consistent window presentation
- Navigation handled through taskbar items with active state

### Styling
- Uses Tailwind CSS v4 with custom Windows 95 color palette
- Custom scrollbar styling for authentic look (`[&::-webkit-scrollbar]` classes)
- Responsive design with mobile adaptations (md: breakpoints)
- Geist font family for modern typography

## File Organization

- `/src/app/` - Next.js App Router pages (about, contact, skills)
- `/src/components/` - Reusable UI components
- `/src/utils/` - Utility functions (cn.ts for className merging)
- `/public/images/` - Static assets including profile photo