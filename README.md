# Only-Cheese


## Description
 
A web application that allows users to search for other users based on the types of cheese they like. A user can sign up for an account with their email address and create a username and password. The user can then create a profile and add their name, bio, profile picture, location, and cheeses they like. The user can also enter the "Chat Raclette" (a chat room) and chat with other users.

Handlebars are utilized to generate multiple user profiles. 
Sequelize and Mysql2 are used to generate a database of users and cheeses. 
Bcrypt and Dotenv are used to create auth paths to keep certain pages locked without a login
Express-Session is used to create GET and POST routes to push and pull the required data in

## Code and Tech

VS Code was used as the coding base and several dependencies were utilized:

-Express
-Express-session
-Express-handlebars
-Sequelize
-Bcrypt
-Dotenv
-Mysql2
-Connect-session-sequelize
-Socket.io

The app itself was deployed using [Heroku]

## Getting Started

In order to access this app the user can visit the following webpage:
 https://only-cheese.herokuapp.com/ 

 The user can then sign up by creating a user profile with their name, bio, location, and then add preferred cheeses. Once the user logs in, they have access to a their own "Cheesefolio", "Cheese Date", and "Chat Raclette" pages. 

"Cheesefolio" is a user's individual profile.
 
 "Cheese Date" is a gallery page that allows users to see other users "Cheesefolios" using partials. 
 
 "Chat Raclette" is a chat room that uses socket.io to run. Since we have set up our HTML to request for a username, we can then create the server to accept connections from the client. We will allow people to send their chosen usernames using the setUsername event. If a user exists, we will respond by a userExists event, else using a userSet event. The user will then be added to the chat.


## Usage

The first step in designing this project was to design a wireframe for it. This is what the original wireframe we designed for the website looked like:

[wireframe/Landing Page.jpg]
[wireframe/Portfolio Page.jpg]
[wireframe/CheeseDatePortfolioPage.jpg]
[wireframe/CheeseDatePage.jpg]
[wireframe/ChatRoom.jpg]
[wireframe/ForumPage.jpg]

When the user first accesses the webapge this the page the will be greeted with:

[public/assets/images/only-cheese-homepage.png]

When the user signs up, they will be taken to this form:

[final signup page screenshot]

Once the user logs in they will be taken to this page:

[cheesefolio screenshot]

Then the user can visit the Cheese Date page to see a gallery of other users:

[cheese date screenshot]

And finally the user can enter the Chat Raclette here:

[chat raclette screenshot]




## Mock-Up


The following link shows the web application's appearance and functionality:

https://only-cheese.herokuapp.com/


## Contact
[https://github.com/eileenmh] (Eileen Harvey)
[https://github.com/DLEllis07] (Damar Ellis)
[https://github.com/taylor-green] (Taylor Green)
[https://github.com/AJoelj84] (Adam Johnson)
[https://github.com/bnadel4] (Jamie Nadel)

Project Link: [ https://only-cheese.herokuapp.com/ ] (Onlycheese)


## Acknowledgements

[https://www.w3docs.com/] (W3 Docs)
[https://developer.mozilla.org/en-US/] (MDN Web Docs)
[https://bulma.io/documentation/] (Bulma)
[https://sequelize.org/] (Sequelize)
[https://socket.io/] (Socket.io)
[https://handlebarsjs.com/] (Handlebars)







## License

MIT License

Copyright (c) [2023] [Taylor Green, Eileen Harvey, Adam Johnson, Jamie Nadel, Damar Ellis]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.