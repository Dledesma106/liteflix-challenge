# Liteflix

This is a web application that retrieves data from https://api.themoviedb.org/ to display a highlighted movie as the featured movie and 4 other popular movies in a caroussel with a Netflix-ish design
It also allows the user to upload a movie poster and title, and later check the list of movies added by the user

This is a fullstack web coding challenge for Litebox, a company that builds web and mobile apps for clients in the United States. 
Their main focus is in delivering high end products with outstanding UI design and experience

This coding challenge showcases my abilities as a fullstack developer by coding the interface in React from a Figma file and retrieving data from an outside API as well as building an API of my own to save and retrieve user data

It's built using Next.js, with Styled Components on the frontend and Next-Connect and Typegoose on the backend

## Frontend

### Styled-Components

Styled-Components is a CSS-in-JS library that hides away all the css in your components, making them much more readable during development and maintenance.
For every component I created, I created a folder with the component itself, a styles.ts file that holds the styles for that component and an index.ts file that exports the component itself. This lets me organize components with their styles, and shorten the import path.

### Context

For the movies added by the user I use a context with a state that holds the movies and is loaded with a useEffect at index.ts in the pages folder. The movies themselves are retrieved from the database in the getServerSideProps function and when a new movie is uploaded it's also added to context, making it visible right away in the movie carousel
For the movies retrieved from themoviedb API I retrieve them in getServerSideProps as well, but I trim all the unnecesary info and build the urls for the desktop and mobile versions of the previews images. using media queries I display one or the other, the mobile versions being of a smaller resolution to optimize loading times
I also use a context for the upload modal, it handles all the logic and states of the modal, and renders it with the provider. It provides the function to toggle it, reset it and a many other flags and functions to handle the logic of the modal.
both of these context are made available through custom hooks that return the value object of the providers, making it easier for the developer to use these contexts

### Custom Hooks

For the Carousel I simply use a hook and prop drill a few of the logic functions into the previews, is mostly there to shorten the component's code and separate logic from visuals
The same is for the menu, even though there wasn't much logic to it is better for the header, this way it doesn't hold logic that serves the single purpose of controlling when the menu is displayed

### Axios

To handle the upload of the image and common HTTP request I used Axios, mainly because it lets you send files and subscribe to the progress of the upload, as well as set a cancel token to cancel the upload at any time while it's uploading.

The way the upload of a movie works is this: The user first uploads an image and a title, once the upload is finished the backend responds with the URL of the image and is set on the state alongside the title. Once the title and URL are set in the form state the submit button gets unlocked and the user can now send the movie, once sent the backend saves the movie with the title and URL, and is later retrieved at getServerSideProps in the homepage with the rest of the movies 

## Backend

The backend is built using Next.js's API Routes, along with Next-Connect to extends its capabilities and ease the development experience, it lets you to easily assign handling functions to each HTTP method in a route. It also allows for the use of middleware, either at route level or at a group of routes if a handler is preconfigured and used in multiple routes. The middleware I'm using in this project is Multer, it allows processing files, and along with MulterS3 it allows to easily upload files to Amazon Web Services's S3

For the database I'm using MongoDB's Atlas, and as an ODM I'm using Typegoose, an extension of Mongoose that makes the schema building and typing of models a lot easier, as well as needing a lot less code in Typescript than Mongoose

I only needed a simple model that could hold the S3's url to the image, a title for the movie, and two booleans, one to indicate if the movie was liked, and another to indicate if the movie had been added to the user's list

### Next-Connect

With 2 configured handlers and 2 configured API Routes, Next-Connect lets me use a single handler to handle the post and patch methods required to post a movie and update it when the user indicates that either it likes it or it was added to its list, and the second handler is only used to process the image and return to the client the url to that image.

Given that you have to define a single function for every HTTP method it's convenient to define controllers to control the CRUD instructions for each model or any logic you wnat to havce in your server. In this project I defined 3 controllers, one for the movies with a post and a patch method, another one for the image upload with a post method, and another one with error handlers that can be preconfigured into the handler to handle when an error occurs or a method is not allowed on the route.

In this way, Next.js's API Routes functionalities are greatly extended, and allow for many more use cases for Next.js than just server side rendering a React app

### Typegoose

Due to the fact that this project is small and simple, an object oriented database like MongoDB was the best choice due to its simplicity and ease of use. And with Typegoose defining schemas, instantiating models and creating documents is simple and type-safe given that is built on top of Mongoose, an ODM that enforces validations on documents and lets you retrieve them directly from their models

In this project all I had to define was the schema for the movie that consisted of a string for the title, a string for the image's URL, a boolean for the like and a boolean for the added to my movies list. This is done by defining a class and using Typegoose decorators to indicate which parts of the class are relevant to the schema, for example using the ```@prop()``` decorator in a property you can indicate that the property is part of the schema, and passing a configuration object to that decorator you can define the type of data, if its required and if the object should be the only one in the collection with that value on that field

I also defined in the class a boolean to indicate when the preview of the movie was pressed, and an object that holds the url for the desktop and mobile versions of the image, which in this case both are the same. Since I defined those fields without a ```@prop()``` decorator in the class, they are not present in the schema and therefore are not represented in the database, but recognized by Typescript making the developer experience easier
