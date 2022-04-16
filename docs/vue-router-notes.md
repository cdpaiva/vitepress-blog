# Vue router notes

## Notes taken from the course: Vue Router 4 for everyone, from VueSchool.io

### Chapter 1

`main.js` is the entry point of the application. It is where the vue instance is mounted onto the element (usually `#app`). In this example we will be using vue-router, so we also need to declare it inside `main.js`. We installed vue-router using npm (`npm install vue-router@4 --save`), so we can access import it in our files. The vueRouter instance is created with an options object, in which we passed the `history` and `routes` list. More on this later on.

In this project, page components will be stored in a separate folder, called views. The other components will be placed inside the `./src/components` folder.

The `routes` list is where we keep our __route records__, which are objects that will associate a path (url), a name of that path, and a component to be rendered once that path is reached. The vue-router instance is kept in a separate file, and then exported to be usen in `main.js`.

To display the current active page, we use the `<router-view></router-view>` tag. As a single-page application, this tag is placed inside `App.vue`, so that the view can change everytime an active page is selected. Changes in the url will be reflected in the view. Links to specific pages can be made using `<router-link></router-link>`. The same page can be accessed by inserting the corresponding url, i.e. we can use an `<a>` tag, but that causes the entire page to refresh and we end up loosing the whole SPA idea, which is to render only specific parts of the page.Router links are converted to `<a>` tags once compiled, but those events will be intercepted and only the necessary elements will be reloaded. Internal links should use `<router-link>`, while external links use `<a>`.

### Chapter 2

In the beginning of the chapter, we receive files for the css, images and data. These files are very handy, but they hide a common problem when developing our own projects. Collecting the info/data we need is (at least for me) a large part of the problem that usually goes overlooked. Things like image size, permissions, and how to properly structure data in data.json consume a lot of time and often require refactoring as we progress.

- Vue router history mode

Vue router uses the History API to convert routes to proper names

    - `createWebHistory`: 
    
    creates a proper HTML5 mode url. Quoting the [docs](https://router.vuejs.org/guide/essentials/history-mode.html#html5-mode):

> Here comes a problem, though: Since our app is a single page client side app, without a proper server configuration, the users will get a 404 error if they access https://example.com/user/id directly in their browser. Now that's ugly.


    - `createWebHashHisotyr`: 
    
    includes a hasthtag in the url. It limits the url path. It has a bad impact on SEO. It does that because there is no need to create a proper URL, since there will be no request to the server.

- Lazy Loading

When our project is built, vite bundles the JS into a single file, that will be served to the client. We can split the file into chunks, that will be loaded once the specific route is visited. Vite has this feature as a built-in, to lazy-load our code. Several bundles will be created once we build our project. This can be done with a dynamic import, which is simply a callback to be called once we refer to the component. The Home page is not lazy loaded, as it must always be rendered in initial render of the app.
Lazy loading can also be applied in webpack, using webpack code splitting.

[The Vue.js style guide](https://v3.vuejs.org/style-guide/#priority-a-rules-essential-error-prevention) is an important reference to keep close!

- Active class

VueRouter automatically assings special classes to the elements that are active. There is a default class name, that can be changed inside the VueRouter instance, through the property `linkActiveClass`. We can target that class in our css files, to properly indicate the current page and create better user experience. 

- Route parameters

A path as the following: 

```
const routes = [
    {path: '/destination/:id', component: () => impoort(@/showDestination)}
]
```
Will accept any value passed after destination. The value will be accessible later on, using the `id` variable we have created. The `id` will be available in the route object, accessed via `$route.params.id`.
This behavior to me feels like bringing request that would be made to a backend inside our frontend. Just like we would GET an id from our database, here we are passing a value as a path variable and returning the correspoding element in our data.json file.

- Named routes

Names can be used to access routes that receive parameters. It is also a good practice to use them, so we decouple our route calls to the paths. If later on we need to change any path, there is no need to change element by element, we since change the `routes` list.

- Updating params of a route

When we change the params of a route, the same instance will remain, only the information passed to it will change. This means that we cannot access life cycle hooks of that instance again. This can be a caveat, specially when we are fetching data from an API or database, which usually retrieves the data using the life cycle hook `created`.
    - Solutions to ensure the data will be updated:

    1. A work around is to `watch` our params. We may not be able to access the `created` hook anymore, but we can monitore whenever the params change and fetch the data again.
    2. We can also force Vue to create a new instance for every param change. Each instance has a key. If we refer to another key, Vue will destroy the last instance and create a new one. As we are getting a new instance, we can then access the life cycle hooks once again.

- Route Params as Props

We can pass the params as props, by setting the `props` to true in our routes.
















































