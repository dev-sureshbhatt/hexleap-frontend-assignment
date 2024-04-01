## Project Documentation

### Technology Stack / Dependencies

React.js, Next.js, Tailwind CSS, Typescript, React Hooks (useContext for dark/light theme toggle)

### Overview

This project is a small assignment developed as part of the internship application for Hexleap. The goal was to create reusable and modular components using Next.js, Tailwind CSS, and TypeScript. The main focus was on building a reusable Card component that can render different types of cards based on the variant and data passed as props.

### Components

#### Card Component

The Card component is designed to be highly reusable and modular. It accepts props for variant (event, collection, advertisement) and data to render different types of cards. You can view the usage of Card component in src/app/page.tsx file

##### Card Component Variants

1. **Event Card**: Displays information about sports events.
2. **Collection Card**: Highlights collection spotlight with team details and event information.
3. **Advertisement Card**: Shows advertisement content with an image, title, and description.

#### Card Component Example Usage

Here is an example of how to use the Card component in your application:

```jsx
import Card from "./components/Card";

// Example usage for **Event variant of the Card component**
<Card variant="event" data={eventsData[0]} />

// Example usage for **Advertisement variant of the Card component**
<Card variant="advertisement" data={advertisementData[0]} />

// Example usage for **Collection variant of the Card component**
<Card variant="collection" data={collectionsData[0]} />
```

#### Example Screendhots of the Rendered cards in the application as per the variant selected 

### Event Card

![Event Card](<public/Card Component  - Event Variant.png>)

### Advertisement Card

![Advertisement Card](<public/Card Component  - Ad Variant.png>)

### Collection Card

![Collection Card](<public/Card Component  - Collection Variant.png>)

### All Cards variants in action

![alt text](<public/Card Component  - Variants in Action 2.png>)
![alt text](<public/Card Component  - Variants in Action.png>)


### Theme Toggle

Implemented a theme toggle functionality using useContext hook to switch between light mode and dark mode, providing a seamless user experience.

## Deployment

The project is deployed on Vercel for live preview and can be accessed using the following links:

- **GitHub Repository**: [Link to GitHub](github.com/dev-sureshbhatt)
- **Live Demo**: [Link to Live Demo](https://hexleap-frontend-assignment-delta.vercel.app/)

## Responsiveness

The webpage is responsive and optimized for mobile devices with a breakpoint of 320px, meeting the bonus requirement of the assignment.
