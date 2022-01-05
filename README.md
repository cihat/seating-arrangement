# stack

A starter repository for MongoDB, Node.js, and Vue.js, with a local environment based on Docker.

# Installation

## Running the stack

```sh
$ docker-compose up
```

## Accessing the stack from a browser

The starter stack works with a load balancer that binds to ports 80 and 443. It currently serves the domain http://stack.localhost. In order to reach the frontend through the stack, you need to edit your `hosts` file (usually under `/etc/hosts` in UNIX environments and `C:\Windows\System32\Drivers\etc\hosts` in Windows) and add the following line:

```
127.0.0.1 stack.localhost
```

Now if you visit http://stack.localhost, you will be greeted with the frontend starter project.

## Changing the local domain

If you wish to use a domain name other than http://stack.localhost, simply set the environment variable `DOMAIN` to any domain you want.

```sh
$ DOMAIN=another-domain.localhost docker-compose up
```

You then also need to update your `hosts` file accordingly.

## Debugging

You can debug the backend while it's running in VSCode. Instead of running `docker-compose up`, run the following command:

```sh
$ docker-compose -f docker-compose.yml -f docker-compose.debug.yml up
```

This starts the backend service in the debug mode, so you can use the built-in debug task `Attach to backend` to debug your backend service.

# Running tests

## Running backend tests

```sh
$ cd backend
$ npm i
$ npm test
```

## Running frontend tests

```sh
$ cd frontend
$ npm i
$ npm test:unit
$ npm test:e2e
```

# Linting

Run `npm install` on the root folder and it will set up a pre-commit hook to lint the staged files. You will also have two lint commands, `npm run lint` and `npm run lint-staged` that you can run on the root folder.

These commands run the individual `lint` and `lint-staged` scripts in both the `frontend` and the `backend` folders, and they will respect individual configurations of these folders.


# Seating Arrangement for school's Library.

## This is a school project I did to solve the problems I saw in the library.

### Reason for Starting the Project (SUMMARY)
In the library at our school, I have observed that there is a lot of confusion as to the seating arrangement/row. As students, I observed that there were grievances arising from this irregularity. These grievances are that students cannot find a place and they stand for long periods of time. One of the biggest reasons for this is to reserve a place for a student friend who arrives earlier.

### The Innovative Aspect of the Project (SUMMARY):
The biggest benefit of the project is not to keep us students waiting any longer and everyone's place is determined in a more regular way.

### Methods to be applied (SUMMARY):
All students have to enter the turnstiles with their school card, by choosing their seat from the panel. The break times of each session/session will be certain, so for the time being, as an example, a long break of 1 hour and unlimited 30 minutes, but I think we can provide order by introducing conditions such as being active after 45 minutes if used.

### Economic and National Gains (SUMMARY): 
We can save energy by turning off the lights in places where there is no residence. If we solve this problem correctly, it can be applied in other universities in this way.


---


#### **Project's UML Diagram**

![Project's UML Diagram](https://raw.githubusercontent.com/cihat/seating-arrangement/master/architecture/project_uml.png)

#### Project Screenshots
<img width="1678" alt="Screen Shot 2021-12-24 at 1 58 04 AM" src="https://user-images.githubusercontent.com/57585087/147297962-d8a753a7-9eab-497d-9f6f-b369b36d0417.png">


### Todos

1. Pages/Components(Front-end)
2. Database connection
3. Controllers
4. SerialPort entegration
5. ...

# License

MIT License

Copyright (c) 2020 Armagan Amcalar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
