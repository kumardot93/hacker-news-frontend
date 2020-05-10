# HACKER-NEWS-FRONTEND

### To set up the project(host):

    -   host the /build folder. This folder contains the production version of this web app.

### To edit the application/code:

    -   create a directory and clone this project

    -   execute command npm install

    -   install 'redux' and 'react-redux': npm install redux, and npm install react-redux

    -   You are all set to start working on this project

### There are two versions of this project:

    -   Master branch contains the first version

    -   The second version is in multiple-pages

The main difference between version 1 and 2 is that version 2 uses redux for state management and pagination while fist version doesn't

Version 2 is more optimized in performance.

In this project, a large number of fetch request is made during the start. This large number of fetch requests causes performance issues initially when fetch requests are made. This performance issue also causes other elements of the UI to behave abnormally. After all the fetch requests are made, the website functions normally. 
In version 2, that performance issue is optimized by using pagination and redux state management. The pagination restricts the UI the make only a certain no. of request(in this case, 30) by limiting the content of the webpage. Also, once a news data is loaded, it rests on the web app even during a change of the page. Hence, when the user visits an already visited page, the data is already available, thus reducing the network usage. 
The trade-off here is between the amount of content on the page vs. no. of fetch requests.

One possible solution allows the API to serve a range of news in a single request.
Eg. If I need news for id1, id2, ..., idk, then I pass this list to the server, and the server serve news for the whole list at once. Thus, reducing the number of fetch requests.

## Both the versions are hosted usning github pages:

    -   version1 : https://kumardot93.github.io/hacker-news-frontend/

    -   version2 : https://kumardot93.github.io/hacker-news-frontend/v2/