## Changes Made

### Component Renaming

1. Renamed `BoxArea97` to `HeroSection`
   - Issue1: BoxArea97 was not descriptive of its purpose
   - Fix1: Renamed to HeroSection for clarity and reusability.
   - Issue2: the src in the hero Img was using `.png` file and it was loading un-optomized
   - Fix2: used a `.webp` file for the hero img and added  `loading='lazy'` for better performance
2. Renamed `BoxArea108` to `SearchBar`
   - Issue: BoxArea108 was not descriptive of its purpose
   - Fix: Renamed to SearchBar for clarity and made it flexible for reusability (Header and HeroSection use the same SearchBar)
   - Issue2:  Missing necessary aria labels for the search input
   - fix2: add `aria-label="Search"` to the SearchBar component's input


### Component Extraction

1. Extracted `Header`, `TagList`, `TagItem`, `HeroSection`, and `SearchBar` into their own files in src/components/
   - Issue: Components were defined inline in App.tsx, reducing reusability and readability
   - Fix: Each component now lives in its own file for better reusability and maintainability

### App.tsx Structure Refactor

1. Moved page-specific UI (HeroSection, TagList) and the `tags` state from App.tsx to pages/Home.tsx
   - Issue: App.tsx was handling both global and page-specific logic, reducing maintainability
   - Fix: App.tsx now only handles global layout (Header, Home), while Home.tsx manages home page state and UI

### General Style / UI Improvements

1. General improvements to make sure the UI matches the provided figma design file
   - issue1: the searchbar comonent in the hero section and the right side of navigation were not matching the provided design figma
   - fix1: added the necessary tailwind css to match the search input to the provided design 
   - issue2: the navigation wasn't fully responsive on mobile devices
   - fix2: made use of `useIsMobile` hook to hide the searchbar in the nav if the user is on mobile  and fix tailwind css issues 

### TypeScript Improvements

1. Added explicit types to TagList props
   - Issue: TagList props and map parameter were implicitly any, causing linter errors
   - Fix: Added TagListProps interface and typed tag as string

### State Management

1. Moved tags state to Home.tsx
   - Issue: tags state was in App.tsx but only used on the home page
   - Fix: State is now colocated with its usage in Home.tsx 
