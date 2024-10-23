# Real Estate Website

A **responsive** real estate website built with **Vue.js** that allows users to browse, filter, and view properties for sale. The website includes a user-facing property listing page, a **map integration** using **Leaflet** for displaying property locations, and an admin dashboard to manage property data. Property images and data are stored in **Firebase** and synchronized with the frontend using **VueFire**.

## Features

### Public User Features

- **View properties for sale**: Users can browse all properties listed on the main page.
- **Filter properties**: A filtering option is available to show only properties that have a swimming pool.
- **Map view**: Property locations are displayed on a map using the **Leaflet** library.
- **Responsive Design**: The website is fully responsive and adapts to mobile, tablet, and desktop devices.

### Admin Features

- **Admin Dashboard**: A secure panel for admins to manage property listings.
  - **Add new properties**: Create new property entries with images and details.
  - **Edit existing properties**: Modify property information, such as price, location, or features.
  - **Delete properties**: Remove properties that are no longer available for sale.

### Firebase Integration

- **VueFire** is used to manage the interaction with **Firebase** for storing property data and images.
- **Real-time synchronization** between Firebase and the Vue frontend, ensuring that any updates to properties are instantly reflected on the site.

## Tech Stack

### Frontend

- **Vue.js**: JavaScript framework used to build the user interface.
- **Vue Router**: Handles the navigation and routing between different pages of the site (e.g., property listings, admin dashboard).
- **Vuetify**: Provides a responsive and consistent UI/UX with a material design component library.

### Map Integration

- **Leaflet**: Lightweight JavaScript library for displaying interactive maps and property locations.

### Backend/Database

- **Firebase**: Used for storing property data and images, as well as handling real-time updates.
- **VueFire**: Integrates Firebase with the Vue app, enabling seamless real-time data binding.
