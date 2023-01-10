# Webpack-babel-configuration-3
>Final version template of webpack to build a web page.

## Table of contents
1. [Installation](#installation)
2. [Structure of project](#structure-of-project)
3. [Updates](#updates)
3. [Others](#others)

## Installation
1. Install libraries
```
    npm install
```
2. Run project
```
    npm start
```
3. Build project
```
    npm run build
```

## Structure of project

    ├── build                               # code for production
    ├── config-webpack                      # setup of webpack
    │   ├──  webpack.common.js              # common setup for dev and prod
    │   ├──  webpack.dev.js                 # setup only for dev
    │   └──  webpack.prod.js                # setup only for prod
    ├── docs                                # screenshots of updatings
    ├── node_modules                        # libraries after of installing with npm install
    ├── src                                 # code for development
    │   ├──  js                             # only files javascript
    │   │    └── main.js                    # javascript file root
    │   ├──  styles                         # only files css
    │   │    └── main.css                   # css
    │   │    └── normalize.css              # css to normalize the styles of web page
    │   └──  index.html                     # html file root
    ├── babel.config.json                   # setup of library babel
    ├── LICENSE                             # License MIT
    ├── manifest.json                       # info about the web page
    ├── package.json.json                   # file setup of profect
    ├── postcss.config.js                   # setup of library postcss
    └── README.md                           # info of project


## Update
Each six months it tries to update all project with npm-check-updates library.
## Others
- Webpack [browserlist](https://github.com/browserslist/browserslist#browsers-data-updating): 

https://github.com/browserslist/browserslist#browsers-data-updating
- Global variables with 