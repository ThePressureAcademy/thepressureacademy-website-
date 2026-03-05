# The Pressure Planner — Android Deployment Guide

**Target:** Google Play Store release
**Timeline:** 4-5 March 2026
**Prerequisites:** Google Play Developer account (enrolled), Android Studio installed

---

## TL;DR

1. Fix log day bug → integrate date-navigation-fix.ts
2. Integrate knowledge base → import curriculum.json
3. Build web assets → `npm run build`
4. Init Capacitor → `npx cap init`
5. Add Android → `npx cap add android`
6. Sync → `npx cap sync android`
7. Open in Android Studio → `npx cap open android`
8. Generate signed APK
9. Upload to Play Store

---

## STEP 1: Fix the Log Day Bug

```bash
# Copy the date navigation module into your project
cp planner-app/src/date-navigation-fix.ts src/utils/date-navigation.ts

# In your Log component, replace existing date logic:
```

**In your Log component:**
```tsx
// BEFORE (broken):
// const [currentDate, setCurrentDate] = useState(Date.now());
// const goBack = () => setCurrentDate(currentDate - 86400000);

// AFTER (fixed):
import { useDateNavigation } from '../utils/date-navigation';

function LogScreen() {
  const { 
    currentDate, goBack, goForward, goToday,
    isPastDate, isToday, canGoBack, canGoForward, formattedDate 
  } = useDateNavigation();
  
  // Use formattedDate for display
  // Use isPastDate to show the "⚠ Editing past date" banner
  // Use canGoBack/canGoForward to disable nav buttons at boundaries
}
```

**Test:** Navigate backward 7+ days, forward to today, rapid click 20x — no freeze.

---

## STEP 2: Integrate Knowledge Base

```bash
# Copy knowledge base to your project
cp planner-app/knowledge-base/curriculum.json src/data/curriculum.json
```

**Usage in Coach component:**
```tsx
import curriculum from '../data/curriculum.json';

// Access BJJ techniques
const allTechniques = curriculum.hubs.flatMap(hub => 
  hub.techniques.map(t => ({ ...t, hub: hub.name, hubId: hub.id }))
);

// Search by name or keyword
function searchTechniques(query: string) {
  const q = query.toLowerCase();
  return allTechniques.filter(t => 
    t.name.toLowerCase().includes(q) ||
    t.desc.toLowerCase().includes(q) ||
    t.keys.some(k => k.toLowerCase().includes(q))
  );
}

// Get recipes by diet
function getRecipes(diet?: string) {
  if (!diet || diet === 'All') return curriculum.nutrition.recipes;
  return curriculum.nutrition.recipes.filter(r => 
    r.diet.some(d => d.toLowerCase().includes(diet.toLowerCase()))
  );
}
```

---

## STEP 3: Capacitor Setup

```bash
# Install Capacitor (in your project root)
npm install @capacitor/core @capacitor/cli

# Install Android platform
npm install @capacitor/android

# Initialize Capacitor
npx cap init "The Pressure Planner" "com.pressureacademy.planner" --web-dir dist

# Copy the config
cp planner-app/capacitor-config/capacitor.config.ts ./capacitor.config.ts

# Add Android platform
npx cap add android

# Build your web assets
npm run build

# Sync web assets to Android project
npx cap sync android
```

---

## STEP 4: Android App Icons

Copy brand assets to Android resources:

```bash
# From deploy-v8/brand-assets/pressure-planner/
cp planner-color-48px.png  android/app/src/main/res/mipmap-mdpi/ic_launcher.png
cp planner-color-48px.png  android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png
cp planner-color-180px.png android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
cp planner-color-180px.png android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png

# Or use Android Studio's Image Asset wizard:
# Right-click res → New → Image Asset → Choose planner-color-1024px.png
```

**Splash screen:**
```bash
# Create splash.png (1024x1024, TPA Press mark centered on #0A0A0A background)
# Place in: android/app/src/main/res/drawable/splash.png
```

---

## STEP 5: Android Studio Configuration

```bash
# Open in Android Studio
npx cap open android
```

In Android Studio:
1. **Set minimum SDK:** API 24 (Android 7.0) — covers 95%+ of devices
2. **Set target SDK:** API 34 (Android 14) — Play Store requirement
3. **Update `build.gradle`:**
   ```groovy
   android {
       compileSdkVersion 34
       defaultConfig {
           minSdkVersion 24
           targetSdkVersion 34
           versionCode 1
           versionName "1.0.0"
       }
   }
   ```
4. **Test on emulator:** Run → Select device → Run 'app'

---

## STEP 6: Generate Signed APK

```bash
# Generate a keystore (KEEP THIS FILE SAFE — you need it for all future updates)
keytool -genkey -v -keystore pressure-planner-release.jks \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias pressure-planner \
  -dname "CN=The Pressure Academy, O=The Pressure Academy, L=Brisbane, ST=QLD, C=AU"

# In Android Studio: Build → Generate Signed Bundle / APK
# Choose: Android App Bundle (AAB) — Play Store prefers this
# Select your keystore file
# Build variant: release
```

---

## STEP 7: Play Store Upload

1. Go to [Google Play Console](https://play.google.com/console)
2. Create New App → "The Pressure Planner"
3. Fill in store listing:
   - **Short description:** "Plan your life. Train with intent. Turn pressure into progress."
   - **Full description:** Use the positioning copy from the website
   - **Screenshots:** Capture from the 8 screens in the mockup animation
   - **Feature graphic:** 1024x500 using The Press mark + tagline
   - **App icon:** planner-color-512px.png
   - **Category:** Health & Fitness → Fitness
   - **Content rating:** Everyone
   - **Privacy policy:** Link to thepressureacademy.com/privacy
4. Upload AAB to Production track
5. Submit for review

---

## STEP 8: Post-Launch Checklist

- [ ] App installs on test device
- [ ] Log day navigation works (backward, forward, rapid clicks)
- [ ] Coach responds to BJJ questions from curriculum
- [ ] Recipes display with correct macros
- [ ] Night/day mode toggle works
- [ ] Notifications fire for daily logging reminder
- [ ] App icon shows Planner mark (not default Android icon)
- [ ] Splash screen shows TPA branding

---

## FILES IN THIS FOLDER

```
planner-app/
├── README.md                           ← THIS FILE
├── src/
│   └── date-navigation-fix.ts          ← Log day bug fix (12/12 tests pass)
├── knowledge-base/
│   ├── PressureKnowledgeBase.jsx        ← Interactive KB browser (React component)
│   └── curriculum.json                  ← 26 techniques, 20 recipes, 14 MH protocols
├── capacitor-config/
│   └── capacitor.config.ts              ← Production Capacitor configuration
└── assets/
    └── (use brand-assets/pressure-planner/ for app icons)
```

---

*Follow this guide step by step. Each step is atomic. If any step fails, fix before proceeding.*
