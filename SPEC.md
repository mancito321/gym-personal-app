##Spec entry point

General idea

- small personal app for gym routines and exercises

Important Features:

features List [
    Full stack app,
    Frontend get info from API,
    Frontend have basic node navigation,
    Node navigation is "Training"->  opens the the information page ->  and items in information page open to details,
    Each detail is information from the api,
    Information is not fetched at one,
    I want to preload information on hover to make it feel faster,
    Api will connect to a mongodb,
    Mongodb collection is simple,
    Mongo db collections hold the nodes for the trainings and details,
    Mongo db collection will be embedded to serve the nodes navigation idea,
    At some point implement web image search to fetch some images referencing exercersice ,
    For now would be read only app,
    No users,
    No creating custom routines  initially

]

First build: 
- Lets add the API  and A basic frontend with a button in root
- The api will have one endpoint GET /getinfo that returns current  server date (cannot be cashed). 
- Pushing the button wil call 7 times the endpoint ( want to test my self and do rate limiter)
- the endpoint is not cashed wo the system will receive the e7 calls and do the returns. I will implement the rate limiter manually to learn to do it