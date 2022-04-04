# UTTN_website
A showcase website about the UTTN event.
Fork of [this repository](https://github.com/wonderfullandingpage/mylandingpage).

# How to setup your Dev environment
Rename the current Dockerfile as "Dockerfile.prod" and remove the ".dev" extension of the "Dockerfile.dev" file.

Build the docker image using:

`docker build -t uttn:latest .`

Run your container using the following command (allowing you to not rebuild the container for every change thanks to the shared folders feature)

`docker run --name uttn -d -p 3000:3000 -v /YOUR/PATH/TO/THE/REPO/public:/home/node/app/public -v /YOUR/PATH/TO/THE/REPO/src:/home/node/app/src uttn_website:latest`

You can now access to your dev app directly from your browser by taping : http://localhost:3000.


# How to deploy on the server
If you're still using the traefik reverse-proxy, you only have to type :

`docker-compose up -d`

# Wonderful Landing Page Template

### <a href="https://wonderfullandingpage.github.io/mylandingpage/">LIVE DEMO</a> 

![](https://github.com/wonderfullandingpage/mylandingpage/blob/master/imgs/01.jpg?raw=true)
![](https://github.com/wonderfullandingpage/mylandingpage/blob/master/imgs/02.jpg?raw=true)

## Description
This is a ReactJS based landing page template, fit for a startup company/service with a one page view.All 'visual' data can be easily modified by changing the data.json file. The project fork is from https://github.com/issaafalkattan/React-Landing-Page-Template. Thanks to the author for a great project.

## Make it Yours!
### 1. Preps
You will need to have <a href="https://nodejs.org/">Node JS</a> installed on your pc. 

### 2. Clone Files
After cloning the files, you will have to run ```yarn``` followed by ```yarn start``` in the CLI
### 3. Add your own data 
Change the data in the ```data.json``` file as well as add any images to ```public/img/```
You can also change styles by modifying the ```public/css``` files.


## Credits
##### Free CSS 
<a href="https://www.free-css.com/assets/files/free-css-templates/preview/page234/interact/">Free-CSS.com </a>