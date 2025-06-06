# VDBYai - Instagram Content Downloader

A modern web application for downloading Instagram content including reels, posts, stories, and IGTV videos.

## Features

- Download Instagram reels, posts, stories, and IGTV videos
- High-quality downloads without watermarks
- Modern, responsive UI
- Pinterest integration (coming soon)

## Prerequisites

- Node.js 18.0.0 or higher
- yt-dlp (for video downloads)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/vdbyai.git
cd vdbyai
```

2. Install dependencies:

```bash
npm install
```

3. Install yt-dlp:

- Windows: Download from [yt-dlp releases](https://github.com/yt-dlp/yt-dlp/releases)
- Linux/Mac: `pip install yt-dlp`

4. Create a .env file:

```env
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## Development

Run the development server:

```bash
npm run dev
```

## Deployment

1. Build the application:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

### Vercel Deployment

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_GA_ID`: Google Analytics ID

## Tech Stack

- Next.js 15.3.3
- React 18
- TailwindCSS
- TypeScript

## License

MIT License
