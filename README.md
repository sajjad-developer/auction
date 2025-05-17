# Auction App

A React-based auction platform where users can browse active auctions, add items to their favorites, place bids, and manage their favorite items list.

## Features

- Browse and view active auction items with images, titles, current bid, and remaining time.
- Add items to favorites with a heart icon toggle.
- Remove items from favorites with a delete icon.
- Display total bid amount of favorite items.
- Toast notifications for user actions like adding/removing favorites.
- Responsive UI built with Tailwind CSS and DaisyUI.
- Suspense and async data fetching for smooth loading.

## Technologies Used

- React 18+
- Tailwind CSS + DaisyUI
- React Toastify (for notifications)
- React Icons
- Vite (build tool)
- ESLint (code quality)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn package manager

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/sajjad-developer/auction-app.git
   cd auction-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173`

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

- `src/components` - React components (Header, Auctions, Auction, FavoriteItems, Footer)
- `src/App.jsx` - Main app component handling state and logic
- `public/BidItems.json` - Mock data file for auction items
- `vite.config.js` - Vite configuration

## How to Use

- Click the heart icon on any auction item to add/remove it from your favorites.
- View your favorite items in the sidebar, see total bid amounts.
- Remove items from favorites using the cross icon.
- Toast notifications will confirm your actions.

## License

MIT License © Md Sajjad Hossen (@sajjad-developer)
