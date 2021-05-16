Technologies
React
Jest
React Testing Library
Third-party NASA API
Other packages used
Axios
PropTypes
FontAwesome (for search icon)
Instructions to run app locally
You can either view the live deployment by clicking here or:

Clone this repo:

git clone git@github.com:jlopenshaw41/nasa-tech-test.git
Change directory into the newly created folder and install the project dependencies:

cd nasa-tech-test
npm install
Start the React app:

 npm start
A browser window should automatically open with a live version of the app. If this does not happen, navigate to a new browser window and type http://localhost:3000/ into the address bar

Additional features for future development
If time were no object, I would add the following features to the app:

Images that expand on click - images would 'pop up' when clicked, expanding to display further information such as the 'description' field provided by the NASA API
'Add to favourites' functionality, allowing user to store images in a 'favourites' gallery by clicking an icon on the image. There would also be corresponding 'remove favourite' functionality
'Add to favourites' icon and 'Click to see more' text would appear upon hovering over an image
Improve the loading experience by implementing a loading screen/spinning icon whilst all images are being retrieved from the API and loaded, to avoid jerky loading as at present