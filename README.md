# TEZOS.com(gatsby)

## SETUP
Gatsby uses a custom CLI for quickly building and developing in the gatsby env. It abstracts installation and build process into simple develop and build actions.
```npm install --global gatsby-cli```

```gatsby build```

```cd build && python -m SimpleHTTPServer 3000```

```localhost:3000```

## DEVELOPMENT

start development server
```gatsby develop```

Gatsby local site serves by default on port 8000
```localhost:8000```

Gatsby comes with a GraphQL sandbox server for quickly building schema and testing your GraphQL queries. That server is automatically spun up with the same command for develop.

```http://localhost:8000/___graphql```

GraphQL queries on the left and previews on the right. `ctl + space` will bring up suggestions for available query data. This data updates depending on what you build in the config, node, and browser js files. To preview the query hit the play icon or `ctl + enter`.

**Note** you must invalidate the .cache directory by deleting it if you want to see updates to queries when you make changes to those config files. 


