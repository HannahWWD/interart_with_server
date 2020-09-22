# InterArt - Interactive Art Community

## About This Project

This web app mockup creates an interactive multimedia art community for designers or art lovers. The current version allows users to
- continuously get new posts through infinite scrolling
- get access to all articles and collections which are dynamically 
generated through mock APIs on the server
- save posts and find them in archives
- make new posts
- delete posts

### Live demo

https://interart-app.herokuapp.com/

**It might take a few seconds to load (to wake up the Heroku Dyno)**

## Getting Started

Make sure [Node](https://nodejs.org/en/) has been installed on your computer.

### Install the App

Inside the parent folder, run following commands to build the project:

```
# Install node modules that needed for the server
npm install 

# Enter the client folder (named interart-app)
cd interart-app 

# Install node modules for the client folder (interart-app)
npm install   

# Build the client side app
npm run build 

# Back to the parent folder
cd .. 

# Start production server
npm start
```

The App should now work properly at PORT **5000**.

### Development mode

To enable development mode, **follow the instruction in the previous section**,  and run:
``` 
# Navigate into the interart-app folder
cd interart-app

# Start dev server
npm start
```
The dev server will run at PORT **3000**.

* Make sure your production server is still running at PORT **5000.**

## Known Bugs

### Conflict between Masonry Layout and Infinite Scrolling

The home page uses Masonry-like columns from [Bootstrap](https://getbootstrap.com/docs/4.5/components/card/). While scrolling, the Masonry layout will keep changing to adapt the new posts .

### Missing Login or SignUp Settings

In order to make the demo more efficient, login/signup will not needed. Hence, all the users will use the same account, and any changes to the app will be stored on the server and visible to everybody. To temporarily handle this issue, the server will reset every 24 hrs to remove necessary data stored.

## License

This app may be redistributed under the terms specified in the [MIT LICENSE](LICENSE) file.



