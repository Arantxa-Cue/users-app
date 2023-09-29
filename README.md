
# How to run
Install dependencies - npm install
Run the application - npm run dev

# Design and architectural choices

I have choosen Vite for fast development and React with TypeScript for a typed codebase that provides a robust and mantainable foundation for the project.

Material-UI is used for its set of pre-built components, providing a consistent UI.

React Query is employed for efficient data fetching and management. It simplifies the handling of asynchronous operations and caching.

React Hoof Form is used for handling  the form, offering a straigthforward and efficient way to manage forms.

React Router Dom is employed for navigation within the application.

# Additional features

I have implemented the functionality of filtering that allows you to search for an individual user.
To enhace modularity I have created the custom hook 'useUsers' where I encapsule the logic related to fetching and filtering the list of users. This hook returns an object containing values and functions that can be used in the consuming component. 

# Testing

I have added a test for the 'UsersPage' where test if the component renders the user list.
I used react testing library and Jest.
MSW has been used to mock the call (get users) to the api.

To run all test use npm run test
