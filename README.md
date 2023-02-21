<p align="center">
  <a href="https://eip-best-places.vercel.app/"
    ><img
      src="https://eip-best-places.vercel.app/project-landing-page.gif"
      alt="EIP Studios"
     />
  </a>
</p>



# Meetup
With this [web page](https://eip-best-places.vercel.app/) you can select the best place to meet with your friends on your next trip. You can also add, edit and delete your places and share them with others.

🦾 **In construction yet**

## Built with
This project was developed using [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) and [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/) with the following technoligies:
* [NextJs](https://nextjs.org/docs/getting-started) - React Framework
* [React](https://es.reactjs.org/docs/getting-started.html) - Javascript Library (Framework!)
* [TypeScript](https://www.typescriptlang.org/docs/) - JavaScript with super powers
* [Sass](https://sass-lang.com/) - CSS extension language
* [Node.Js](https://nodejs.org/en/docs/) - JavaScript runtime environment
* [MongoDB](https://www.mongodb.com/atlas) - NoSQLdatabase
* [Vercel](https://vercel.com/solutions/nextjs) - Deployment platform
  


## Clone and run app
These instructions will allow you to obtain a copy of the project on your local machine for development and test purposes.
Look the [**deployment**](https://eip-best-places.vercel.app/) so you can see the final result.


#### Pre-requirements
For run this project you must have installed the following packages in your local machine

* [NodeJs](https://nodejs.org/en/) 
* [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

#### Clone
For clone the project you need open a terminal, go to the folder which you want to work and put the follows commands
```
git clone https://github.com/ycabrera90/BestPlaces.git

cd BestPlaces

npm install
```

#### Serve the app in your machine
* Create a MongoDB database with a collection called **places** and some documents with the following structure
```
{
    "name": "Name of the place",
    "description": "Description of the place",
    "image": "Image of the place",
    "location": {
        "lat": "Latitude of the place",
        "lng": "Longitude of the place"
    }
}
```
* Create a .env file in the root folder of the project with the following variables
```
DB_USER= yourUser
DB_PASSWORD=yourPassword
DB_NAME= yourDatabaseName
```


 * Serve the app in your machine
  
```
npm start
```

## Authors
* [**Yosniel Cabrera**](https://www.linkedin.com/in/eip-studios/) - *React Developer* 
  
## License
This project is **public** and only for academic purposes.

## Read More 🎁
* Nothing important so far  :-)

<br>

[⬆ Back to top](#meetup)<br>
  
---
yosniel.ch@gmail.com

