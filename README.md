# cs465-fullstack
CS-465 Full Stack Development with MEAN


## Architecture
When building the full stack poject, we employed many front-end languages for various features. The customer-facing site was built in Express HTML at first, but then switched to a .hbs view to improve rendering times by caching frequently-used resources. As HTML is client-facing and not server-side, it cannot communicate with back-end databases to dynamically change content. Javascript is a server-side and client-side scripting language used to create interactive features on websites. With this, we were able to retrieve trip details from MongoDB and display them on the website in real time, based on how the user interacted with it. In contrast to standard HTML pages, single-page applications only update the content in response to certain user activities. This is especially helpful for making the website feel like a local or native application while using the application's features. The backend relied on a NoSQL MongoDB database due to its simplicity of altering schema depending on scalability and functionality changes, as well as its ability to swiftly grow horizontally due to the database's non-relational structure.

