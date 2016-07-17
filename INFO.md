# Clinics Information

```
.__        _____       
|__| _____/ ____\____  
|  |/    \   __\/  _ \ 
|  |   |  \  | (  <_> )
|__|___|  /__|  \____/ 
        \/             
```

## Application structure

```
.
├── .gitignore
├── package.json
├── settings.json
├── .meteor
|   └── ...
├── api
|   └── methods.js
├── imports
|   ├── startup
|	|	├── client
|	|	|	└──
|	|	└── server
|	|		└──
|   └── ui
|		├── bootstrap.min.css
|		├── bootstrap.min.js
|		├── jquery.min.js
|		└── style.css
├── lib
|   ├── router.js
|	└── collections
|		└── clinics.js
├── client
|	├── main.html
|	├── main.js
|	├── edit
|	|   ├── edit.html
|	|	└── edit.js
|	├── form
|	|   ├── form.html
|	|	└── form.js
|	├── list
|	|   ├── list.html
|	|	└── list.js
|	├── login
|	|   ├── login.html
|	|	└── login.js
|	├── map
|	|   ├── map.html
|	|	└── map.js
|	├── page
|	|   ├── page.html
|	|	└── page.js
|	└── register
|		├── register.html
|		└── register.js
├── server
|	└── main.js
└── mobile-config.js
```