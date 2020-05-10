HACKER-NEWS-FRONTEND

To setup the project(host):
    -   host the /build folder. This folder contains the production version of this web app.

To edit the application/code:
    -   create a directory and clone this project
    -   execute command npm install
    -   install 'redux' and 'react-redux': npm install redux and npm install react-redux
    -   You are all set to start working on this project

There is two versios of this project:
    -   Master branch contains the first version
    -   Second version is in multiple-pages

Main difference between version 1 and 2 is that version 2 uses redux for state management and pagination while fist version dosent'n

Version 2 is more optomised in performance.

In this project a large number of fetch request is made during the start. This large number of fetch request causes performance issue initially when fetch request are made. This performance issue also causes other elements of the UI to behave abnormally. After all the fetch requests are made the website functions normally. 
In version 2 that permormance issue is optomised by using pagination and redux state managemnt. The pagination restricts the UI the make only a certain no. of request(in this case 30) by limiting the content of the webpage. Also, once a news data is loaded it rests on the webapp even during a change of the page. Hence, when the user visit a already visited page the data is already available thus reducing the network usage. 
The trade off here is between amount of content on the page vs no. of getch requests.

One possible solution is allow the api to serve a range of news in a single request.
Eg. If I need news for id1, id2, ..., idk then i will just pass this list to the server and the server will serve news for the whole list at once. Thus, reducing the number of the getch requests.

Both the versions are hosted usning github pages:
    -   version1 : https://kumardot93.github.io/hacker-news-frontend/
    -   version2 : https://kumardot93.github.io/hacker-news-frontend/v2/