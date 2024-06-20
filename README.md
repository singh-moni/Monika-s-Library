Monika's Library
Monika's Library is a React application built with Vite that allows users to search for books using the Google Books API and display the results in a visually appealing library setting.

Live Link:
netlify: https://subtle-bonbon-0a5ada.netlify.app
GitHub pages: https://singh-moni.github.io/Monika-s-Library/

Features:
Search for books using the Google Books API.
Display search results in a grid layout with three books per row.
View book details and preview books.
Read books online if available.
Responsive design that adjusts the layout for different screen sizes.

Usage
Open the application in your browser.
Use the search bar to enter a book name and press the search button.
Browse the search results displayed in a grid layout.
Click the "Preview" button to view a book preview.
Click the "Read Online" button to read the book online if available.

Project Structure:
src/
components/
BookItem.jsx: Component to display a single book item.
BookList.jsx: Component to display the list of books.
ReadingBlock.jsx: Component to display the reading iframe.
SearchForm.jsx: Component for the search form.
assets/: Folder to store images and other assets.
App.jsx: Main application component.
App.css: Main application styles.
main.jsx: Entry point for the React application.

CSS Styling:
The application uses a CSS grid layout to display books in rows.
The search form is styled to be centered and rounded.
The background image for the library is set in the App.css file.
Environment Variables
The application uses the Google Books API key. Replace the placeholder with your API key in the URL inside the App.jsx file.


Acknowledgements:
Google Books API for providing book data.
React and Vite for the development framework.
Icons8 for the search icon.


To create a new Vite project, you can use the npm create vite@latest command. Here are the steps to set up your Vite-based React project:

1. Open your terminal and run the following command:
npm create vite@latest
2. You'll be prompted to enter a project name. Type your project name and press Enter:
3. Next, you'll be asked to select a framework. Use the arrow keys to navigate to "React" and press Enter:
Then, you'll be asked to select a variant. Choose "JavaScript" and press Enter:
4. Navigate into your new project directory:
5. Install the dependencies:
npm install
6. Start the development server:
npm run dev
