# React Native + NativeWind Template 🚀

A ready-to-use React Native Expo template with NativeWind (Tailwind CSS) pre-configured and working out of the box.

## 🎯 What's Included

- ✅ **Expo Router** - File-based routing
- ✅ **NativeWind v4** - Tailwind CSS for React Native
- ✅ **TypeScript** - Full type safety
- ✅ **Pre-configured setup** - All configs ready to go
- ✅ **Working example** - See NativeWind in action

## 🚀 Quick Start

### Method 1: Use as GitHub Template (Recommended)

1. **Click "Use this template"** button on GitHub
2. **Create your new repository**
3. **Clone your new repo:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_PROJECT_NAME.git
   cd YOUR_PROJECT_NAME
   ```

### Method 2: Clone and Rename

```bash
# Clone this template
git clone https://github.com/NirmanStha/react-native-nativewind-template.git my-new-app
cd my-new-app

# Remove git history and start fresh
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

### Method 3: Using degit (Fastest)

```bash
# Install degit globally (if not installed)
npm install -g degit

# Create new project from template
npx degit NirmanStha/react-native-nativewind-template my-new-app
cd my-new-app

# Initialize git
git init
git add .
git commit -m "Initial commit"
```

## 📦 Installation & Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npx expo start
   ```

3. **Run on your preferred platform:**
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
   - Press `w` for web
   - Scan QR code with Expo Go app on your phone

## 🎨 Using NativeWind

NativeWind is already configured! Just use Tailwind classes with the `className` prop:

```tsx
import { Text, View } from "react-native";

export default function MyComponent() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-2xl font-bold">
        Hello NativeWind! 🎉
      </Text>
    </View>
  );
}
```

## 📁 Project Structure

```
├── app/
│   ├── _layout.tsx          # Root layout
│   ├── index.tsx            # Home screen (with NativeWind example)
│   └── globals.css          # Tailwind CSS imports
├── assets/                  # Images, fonts, etc.
├── babel.config.js          # Babel config with NativeWind
├── tailwind.config.js       # Tailwind configuration
├── metro.config.js          # Metro config with NativeWind
├── tsconfig.json           # TypeScript configuration
└── nativewind-env.d.ts     # NativeWind type declarations
```

## ⚙️ Configuration Files

### 🔧 Key Files (Already Configured)

- **`babel.config.js`** - NativeWind babel preset
- **`tailwind.config.js`** - Content paths configured for app directory
- **`metro.config.js`** - Metro bundler with NativeWind integration
- **`app/globals.css`** - Tailwind directives
- **`nativewind-env.d.ts`** - TypeScript declarations

### 🎨 Tailwind Config

```javascript
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 🔄 Updating Your Template

To keep your template up-to-date with the latest changes:

```bash
# Add this template as upstream (one-time setup)
git remote add template https://github.com/NirmanStha/react-native-nativewind-template.git

# Fetch latest changes
git fetch template

# Merge updates (resolve conflicts if any)
git merge template/main
```

## 🛠️ Customization

### Adding New Screens

Create files in the `app/` directory:

```tsx
// app/profile.tsx
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-xl font-semibold">Profile Screen</Text>
    </View>
  );
}
```

### Custom Tailwind Classes

Extend your `tailwind.config.js`:

```javascript
module.exports = {
  // ... existing config
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#64748b",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
      },
    },
  },
};
```

## 🐛 Troubleshooting

### NativeWind Not Working?

1. **Clear Metro cache:**

   ```bash
   npx expo start --clear
   ```

2. **Restart development server:**

   ```bash
   npx expo start
   ```

3. **Check if all packages are installed:**
   ```bash
   npm install
   ```

### TypeScript Errors?

Make sure `nativewind-env.d.ts` is included in your `tsconfig.json`:

```json
{
  "include": ["**/*.ts", "**/*.tsx", "nativewind-env.d.ts"]
}
```

## 📚 Learn More

- [NativeWind Documentation](https://www.nativewind.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)

## 🤝 Contributing

Found a bug or want to improve the template? Feel free to open an issue or submit a pull request!

## 📄 License

This template is MIT licensed.

---

**Happy coding! 🎉**

Made with ❤️ by [NirmanStha](https://github.com/NirmanStha)
