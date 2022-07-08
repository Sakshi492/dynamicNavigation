# Dynamic Navigation Flow

This is one of Skoove's mobile development coding challenges.

Your task is to develop an application with a dynamic navigation flow depending on external results & delays.

## The following rules apply:

Please read the [root readme file](https://github.com/Learnfield-GmbH/CodingChallenge/blob/master/README.md).

## Abbreviations

The following abbreviations are used throughout the task description

1. The `r` prefix stands for _request_, e.g. `rLogin` resolves to _request login_

## Behaviour to implement

The application consists of several screens that are presented in a specific order. That order depends on various conditions.

1. The app launches
    - Launching the application always triggers `rLogin` which retrieves a `sessionId`.
    - If the user is a first-time user the app shall present `screenA`.
    - If the user is a returning user the app shall present the last screen of his previous session.

2. Screen A 
    - If user enters `screenA` the app has to fetch `rFetchExperiments` unless the result was already fetched and persisted successfully.
    - The result of `rFetchExperiments` leads to a specific `screenBx` screen.

3. Screen B
    - `screenB1` and `screenB2` offer several exclusive choices to be selected. Those choices will be submitted via `rSubmitSelection` once the next button is pressed.
    - After `rSubmitSelection` was successful 
        - `screenB1` leads to `screenC1` 
        - `screenB2` leads to `screenC2`
    - `screenB3` does not execute any requests and leads to `screenC2` via the next button
    - `noScreenB` is a scenario, where no screen is shown. That means it navigates directly from `screenA` to `screenC2`

4. Screen C
    - Both `screenCx` should be visible for 3 seconds minimum
    - Both `screenCx` should automatically navigate to `screenD` when `rLogin` was successful
    - Both `screenCx` show the selection of the `screenBx`. If the path went through `screenB3` please leave the field blank and stretch the text field below towards the top with similar margins.

5. Screen D
    - This screen does not have any interactive / automated behavior nor does it offer a back button

6. General
    - Some screens support a back button, some don't.
    - `rLogin` should have a retry logic (the other requests should fail after 1 try)
    - Contents of the the large text fields can be any lorem ipsum text
    - The background colors of the screens don't have to match the exact rgb codes from the diagram.

7. Tips
    - It is recommended to start the development of the mobile application with the network connectivity being hidden behind an abstraction layer and firstly being implemented by a simple, configurable, local mock. Once all functionality is verified with this non-networking implementation, the real network implementation can be added. Please preserve both implementations.
    - Take into account that the server may respond with errors and varying response durations.
    - Reuse components wherever applicable.

  
## Screen flow diagram
![Overview][Overview]

[Overview]: assets/ScreenFlow.drawio.png

## Screen overview
Here is an overview of the separate screens:
![Screens][Screens]

[Screens]: assets/Screens.png

## Development Server

The server returns information for the requests mentioned above (e.g. `rFetchExperiments`). 

You can find a server in the subfolder `server`. To start the server in a normal operating mode simply execute

```
npm install
node server.js
```

The local machine will serve the following endpoints with randomized delays (between 1 and 15 seconds) and randomized return values (success vs. failure and specific return values):

```
http://localhost:3000/rLogin
http://localhost:3000/rFetchExperiments
http://localhost:3000/rSubmitSelection
```

### Development overrides

If you want to force the server to behave in a specific manner please use the following arguments

```  
node server.js x y u v a b

  x - override for rLogin delay
  y - override for rLogin success
  u - override for rFetchExperiments delay
  v - override for rFetchExperiments success
  a - override for rSubmitSelection delay
  b - override for rSubmitSelection success
```

As an example `node server.js 3 false 15 true 4 false` will lead to a behavior that
- every `rLogin` request returns an error after 3 seconds
- every `rFetchExperiments` request returns successfully after 15 seconds
- every `rSubmitSelection` request returns an error after 4 seconds
