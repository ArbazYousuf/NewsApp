
# React Native News App

This project is a mobile application developed with React Native, designed to fetch and display news articles from various categories using the NewsAPI. It leverages Redux for state management and React Navigation for screen transitions.

## Features

- **Home Screen**: Displays top headlines with pagination/infinite scroll and pull-to-refresh functionality.
- **Category Screen**: Allows users to select news categories and view relevant articles.
- **Article Detail Screen**: Shows detailed information about the news article and provides a share functionality.
- **Responsive Design**: Ensures a clean user interface across different mobile devices.
- **Reusable Components**: Utilizes custom components for various UI elements like list items and cards.
- **Bonus Features**: Includes optional functionalities such as article search, favorites list, screen transition animations, and unit tests for critical components.

## Getting Started

### Prerequisites

- Node.js
- React Native CLI
- Android Studio or Xcode (for iOS development)

### Installation

1. **Clone the repository**

   ```
   git clone https://github.com/ArbazYousuf/NewsApp.git
   cd NewsApp
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Set up NewsAPI**

   - Sign up at [https://newsapi.org/](https://newsapi.org/) and obtain an API key.
   - Create a `.env` file in the root directory and add your API key:

     ```
     NEWS_API_KEY=your_api_key_here
     ```

4. **Run the application**

   - **iOS:**

     ```
     cd ios && pod install && cd ..
     npx react-native run-ios
     ```

   - **Android:**

     ```
     npx react-native run-android
     ```

## Project Structure

- `/src`
  - `/actions` - Redux actions for fetching news data.
  - `/components` - Reusable components like NewsCard and Header.
  - `/reducers` - Redux reducers for managing application state.
  - `/screens` - Screens including Home, Category, and ArticleDetail.
  - `/navigation` - React Navigation setup.
- `/assets` - Static assets such as images and icons.

## Challenges & Solutions

- **Infinite Scroll Implementation**: Implemented using a combination of FlatList's `onEndReached` and state management.
- **Managing API Rate Limits**: Cached responses and implemented pull-to-refresh to mitigate API rate limits.

## Future Improvements

- Integrate a more advanced search feature with filters for dates and popularity.
- Enhance the favorites feature to sync across devices using cloud storage.

## Contributions

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

