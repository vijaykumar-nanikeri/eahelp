# eahelp
Assignment Repository | 156110 - Applications Engineer II | Electronic Arts

------------

### Demo

Please download the demo [here](https://github.com/vijaykumar-nanikeri/eahelp/blob/master/assets/demo/eahelp-demo-2x-speed.mov?raw=true "demo").

------------

### Setup

##### Database Configuration

Setup the database configuration in [.../eahelp/tree/master/server/.env](https://github.com/vijaykumar-nanikeri/eahelp/blob/master/server/.env ".../eahelp/tree/master/server/.env") file
```javascript
PORT=<port_number>
allowedOrigins=http://<database_host>:<port_number>,http://<host_angular_using>:<port_number>
DB_USERNAME=<database_username>
DB_PASSWORD=<database_password>
DB_NAME=<database_name>
DB_HOST=<database_host>

```

Below is the configuration in my case
```javascript
PORT=3000
allowedOrigins=http://localhost:3000,http://localhost:4200
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=eahelp
DB_HOST=localhost

```

##### Client Configuration

Give the database host and port number (configured above) in [.../client/src/environments/environment.ts](https://github.com/vijaykumar-nanikeri/eahelp/blob/master/client/src/environments/environment.ts ".../client/src/environments/environment.ts") at line no. 25<br />
`baseUrl = 'http://<database_host>:<port_number>';`

Below is the line in my case<br />
`baseUrl = 'http://localhost:3000';`


##### Server Execution

Change the directory to<br />
`.../eahelp/server`

Install the dependencies<br />
`npm install`

Start the server<br />
`npm start`


##### Client Execution

Change the directory to<br />
`.../eahelp/client`

Install the dependencies<br />
`npm install`

Serve the client<br />
`    ng serve -o`

------------

### Project Design

    app (app.module, app.component, app-routing.module)
    |
    |---web
    |   |
    |   |---public (public.module, public.component, public-routing.module)
    |   |
    |   |---header (header.component)
    |   |
    |   |---main (main.module, main.component, main-routing.module)
    |       |
    |       |---games (games.component)
    |           |
    |           |---directives
    |           |   |
    |           |   |---platforms (platforms.directive)
    |           |
    |           |---platforms (platforms.component)
    |           |
    |           |---directives
    |           |   |
    |           |   |---topics (topics.directive)
    |           |
    |           |---topics (topics.component)
    |           |
    |           |---directives
    |           |   |
    |           |   |---email (email.directive)
    |           |
    |           |---email (email.component, email.model)
    |
    |---shared
        |
        |---core (core.module)
        |   |
        |   |---auth (auth.interceptor)
        |
        |---enums
        |   |
        |   |---shared-enum.enum, urls.enum
        |
        |---services
            |
            |---rest-api.service, is-array-data.service, track-by.service, flat-check-object.service

------------

### Database Design
[![Database Design](https://github.com/vijaykumar-nanikeri/eahelp/blob/master/assets/docs/database-design.png "Database Design")](https://github.com/vijaykumar-nanikeri/eahelp/blob/master/assets/docs/database-design.png "Database Design")

------------

### Unit Testing Report
[![Unit Testing Report](https://github.com/vijaykumar-nanikeri/eahelp/blob/master/assets/docs/unit-testing-report.png "Unit Testing Report")](https://github.com/vijaykumar-nanikeri/eahelp/blob/master/assets/docs/unit-testing-report.png "Unit Testing Report")
