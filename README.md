# **DRI Cal**

A digital calendar with a list view and weather widget.

![DRI Cal](https://github.com/philosophercode/calendar_group_project-/blob/master/DRIcalIcon.png?raw=true)

#### Table of Contents

- [Technologies](#technologies)
- [Approach](#approach)
- [Install](#install)
- [ERD](#erd)
- [User Stories](#user-stories)
- [Wireframes](#wireframes)
- [Unsolved Problems and Hurdles](#unsolved-problems-and-hurdles)




## Technologies
- Explanations of the **technologies** used
    
    - React (front end)

        - [nuka-carousel (swiping though views)](https://github.com/FormidableLabs/nuka-carousel)

        - [react-infinite-calendar (creates a scrolling calendar)](https://github.com/clauderic/react-infinite-calendar)
        
    
    - Express.js (back-end)
    
    - Postgres SQL (database)
    
    - Node.js (runs server-side JavaScript)


## Approach
- A couple of paragraphs about the **general approach you took**

We began by brainstorming on which app we would create. We all liked the initial idea of a calendar, so we went with it. We discussed the basics of our app and decided we would each design our own wireframes overnight and compare the next day and merge the wireframe models.

The UX team took our model and helped make it into digital wireframes and discuss practical uses of the app and its features. From there we began to split up the plan for the app into parts. The **To-do List** was created in a collaborative google-doc so we could all be on the same page as we progressed. At the begin stages we discussed which components we would make and which open-source modules we would use. The calendar and the ability to swipe between views were the modules we used.

The basic split up was between the different views (e.g., Calendar view, Day view, Add Event View). The database was made first based off of the **JavaScript Date object**. That was the best way to interact with the **react-infinite-calendar** module, given how it passes props.


## Install
- **Installation instructions** for any dependencies

Navigate to the **calendar_app** Folder in the terminal. Then run the install to setup the express server.

```
npm --save install
```

To setup the database navigate to the sub-subfolder, **db/seeds**. Then add the database to pSQL.

```
psql -f seed.sql
```

Then, return to the **calendar_app** Folder and navigate to the subfolder, **client** Folder in the terminal. Then run the install to setup the react server.

```
npm --save install
```



## ERD
- Link to your ERDs - Diagrams of your models and their relationships


## User Stories
- Link to your **user stories** – who are your users, what do they want, and why?

A typical user may want to swipe though their calendar and find a specific date. Then they could tap the day and be taken to the Add Event page.

If they want to view the agenda for that day, they then swipe to the next page **right**. From the day view, you can select to **Edit** or **Delete**.

If the user wants to see all events created, one may swipe back **left** to the list view.



## Wireframes
- Link to your **wireframes** – sketches of  views and interfaces in your application

![Wireframes](https://github.com/philosophercode/calendar_group_project-/blob/master/Cal%20Wireframes.jpg?raw=true)


## Unsolved Problems and Hurdles
- Descriptions of any **unsolved problems** or **hurdles** your team had to overcome
