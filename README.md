# evermos-test

## Build DB

```bash
# install db.json
$ npm install -g json-server

# turn on db.json
$ json-server --watch db.json

# file db.json
$ {
  "catfood": [
    {
      "id": 1,
      "name": "RC Persian",
      "img": "rcpersian.png",
      "price": "Rp. 85.000",
      "rating": 4.5,
      "totalRate": 413
    },
    {
      "id": 2,
      "name": "RC Kitten",
      "img": "rckitten.png",
      "price": "Rp. 75.000",
      "rating": 4.2,
      "totalRate": 213
    },
    {
      "id": 3,
      "name": "RC Ageing",
      "img": "rcageing.png",
      "price": "Rp. 80.000",
      "rating": 4.1,
      "totalRate": 3121
    },
    {
      "id": 4,
      "name": "Proplan",
      "img": "proplan.png",
      "price": "Rp. 70.000",
      "rating": 4.7,
      "totalRate": 10
    },
    {
      "id": 5,
      "name": "Me-O",
      "img": "meo.png",
      "price": "Rp. 70.000",
      "rating": 4.8,
      "totalRate": 5534
    },
    {
      "id": 6,
      "name": "Life Cat",
      "img": "lifecat.png",
      "price": "Rp. 50.000",
      "rating": 3.8,
      "totalRate": 10
    },
    {
      "id": 7,
      "name": "Healthy Cat",
      "img": "healthycat.png",
      "price": "Rp. 90.000",
      "rating": 5,
      "totalRate": 5
    },
    {
      "id": 8,
      "name": "Felibite",
      "img": "felibite.png",
      "price": "Rp. 15.000",
      "rating": 4.2,
      "totalRate": 1021
    },
    {
      "id": 9,
      "name": "Excel Dry Food",
      "img": "excel.png",
      "price": "Rp. 15.000",
      "rating": 4.0,
      "totalRate": 1213
    },
    {
      "id": 10,
      "name": "Equilibrio",
      "img": "equilibrio.png",
      "price": "Rp. 90.000",
      "rating": 4.9,
      "totalRate": 2
    },
    {
      "id": 11,
      "name": "Cat Choize",
      "img": "catchoize.png",
      "price": "Rp. 20.000",
      "rating": 4.1,
      "totalRate": 423
    },
    {
      "id": 12,
      "name": "Bolt",
      "img": "bolt.png",
      "price": "Rp. 20.000",
      "rating": 3.9,
      "totalRate": 12131
    }
  ]
}
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## DONT FORGET TO SWITCH DIRECTORY WHILE RUNNING LOCAL

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
