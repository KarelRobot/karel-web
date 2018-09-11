# Title
Bundling and minification.

# Status
Accepted

# Context
There are many loose .js files to be loaded to render application. This is time consuming. Also are not minified. Has to reduce http calls as well as size of payload

# Decision
Use Webpack to bundle

# Consequences
Webpack is third party. May or may not be maintained in future.

# Alternatives
| Title         | Pros      | Cons |
|:-------------:|:-----------:|:-----:|
| Write custom tool | Own tool | `Has to maintain` <br/> `High effort` |