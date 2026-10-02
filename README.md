# IT313 - Student Roster Card Renderer

## Laboratory 4: React Components and JSX

### Problem Description

The purpose of this project is to create a student roster
application using React Native and Expo.

The application displays enrolled IT313 students using
reusable student cards. Each card shows the student's name,
course, and number of units.

Students with a full load display a "Full Load" label.
The application also displays the total number of students
and provides a button to reverse the roster order.

### Component Structure

#### StudentCard

StudentCard is a reusable functional component that
receives name, course, units, and isFullLoad through props.

It uses destructuring to access the props and conditional
rendering to display the Full Load label when isFullLoad
is true.

#### StudentRoster

StudentRoster is the parent component that contains the
student data.

It uses the map() method to render one StudentCard for
each student. Each card uses the student's unique ID as
its React key.

The total student count is calculated using
students.length.

The Reverse Roster button changes the order of the
students using React state.

### Concepts Demonstrated

- Functional components
- Props and destructuring
- JSX expressions
- Conditional rendering
- Rendering lists using map()
- React key prop
- React useState hook

### Technologies Used

- React Native
- Expo
- React
- TypeScript
- JSX

### How to Run the Application

1. Install Node.js.
2. Open the project folder in VS Code.
3. Open the terminal in the project directory.
4. Install dependencies if needed:

   npm install

5. Start the Expo development server:

   npx expo start

6. Press w to open the application in a web browser.

### Author

Jhon Marc Bitoon

### Course

IT 313 - Mobile Programming