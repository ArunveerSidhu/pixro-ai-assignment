# Product Photography - Generate Screen

A React Native Expo application recreating the Product Photography Generate screen from Figma design.

## 📱 Features

- ✅ Interactive header with scrollable navigation menu
- ✅ Search bar with real-time input
- ✅ Multi-line prompt input with AI sparkle icon
- ✅ Template suggestions grid (3 columns, 6 items)
- ✅ Monochrome templates grid (3 columns, 6 items)
- ✅ Template selection with green checkmark indicator
- ✅ Full-screen scrolling with FlatList
- ✅ Dark theme UI matching design specs

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo Go app on your mobile device

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ArunveerSidhu/pixro-ai-assignment
cd pixro-ai-assignment
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Scan the QR code with:
   - **iOS**: Camera app
   - **Android**: Expo Go app

## 📱 Running the App

### On Physical Device
```bash
npm start
```
Then scan the QR code with Expo Go

### On Emulator
```bash
npm run android  # For Android
npm run ios      # For iOS
```

## 🏗️ Project Structure

```
├── components/
│   ├── Header.tsx          # Navigation header with menu
│   ├── SearchInput.tsx     # Search bar component
│   ├── PromptInput.tsx     # AI prompt text input
│   ├── ImageGrid.tsx       # 3-column image grid
│   ├── ImageSection.tsx    # Section wrapper with title
│   └── index.ts            # Component exports
├── screens/
│   └── Photography.tsx     # Main screen
|   └── index.ts            # Screen exports
├── mockData.ts             # Mock template data
├── App.tsx                 # Root component
└── package.json
```

## 💾 Mock Data Structure

```json
{
  "id": "1",
  "image": "https://picsum.photos/400/300",
  "category": "Photography",
  "isSelected": false
}
```

## 🛠️ Tech Stack

- **Expo** v54.0.0
- **React Native** 0.81.5
- **TypeScript** 5.9.2
- **NativeWind** (Tailwind CSS for React Native)
- **Expo Icons** for all icons

## 📝 Key Interactions

- Tap any template to select (shows green checkmark)
- Only one template can be selected at a time
- Search and prompt inputs update state in real-time
- Entire screen is scrollable via FlatList
- Horizontal scrollable navigation menu

## 👤 Author

Submitted for Pixro AI Assignment

---