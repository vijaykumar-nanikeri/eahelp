# eahelp
Assignment Repository | 156110 - Applications Engineer II | Electronic Arts

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
