## Changes Made

### Component Renaming

1. Renamed BoxArea97 to HeroSection
   - Issue: BoxArea97 was not descriptive of its purpose
   - Fix: Renamed to HeroSection for clarity and reusability
2. Renamed BoxArea108 to SearchBar
   - Issue: BoxArea108 was not descriptive of its purpose
   - Fix: Renamed to SearchBar for clarity and reusability

### Component Extraction

1. Extracted Header, TagList, HeroSection, and SearchBar into their own files in src/components/
   - Issue: Components were defined inline in App.tsx, reducing reusability and readability
   - Fix: Each component now lives in its own file for better maintainability

### App.tsx Structure Refactor

1. Moved page-specific UI (HeroSection, TagList) and the `tags` state from App.tsx to pages/Home.tsx
   - Issue: App.tsx was handling both global and page-specific logic, reducing maintainability
   - Fix: App.tsx now only handles global layout (Header, Home), while Home.tsx manages home page state and UI

### TypeScript Improvements

1. Added explicit types to TagList props
   - Issue: TagList props and map parameter were implicitly any, causing linter errors
   - Fix: Added TagListProps interface and typed tag as string

### State Management

1. Moved tags state to Home.tsx
   - Issue: tags state was in App.tsx but only used on the home page
   - Fix: State is now colocated with its usage in Home.tsx 