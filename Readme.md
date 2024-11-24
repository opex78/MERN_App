IMP Concepts of JS

- Hoisting
- Diff var, let and const
- Closures

To generate boilerplate code Emmet
html:5 => tab
Skeleton of html

- document & document.createElement apis who provides?
  javascript? browser?

- CDN - content delivery network - HW
- minified files

- React Element = normal js objects

<div id="parent">
    <div id="child">
        <h1>I am heading one</h1>    
    </div>
</div>

^ - caret - if in the future new version is released, ^ parcel will install automatically the minor versions like 2.12.1 to 2.12.5
~ - tilde - it will also install the major updates 2.8, 3.0 is installed automatically - NOT RECOMMENDED -

- JSX - React Elements - Javascript XML

- React Components
  - Class based - Legacy - OOPS
  - Function based - js

===== 2 types of export

1. default export

- export default Title;
- import Title from "./components/Title";

2. Named export

======== PLAN ========

- Header

  - Logo
  - Nav items
    - Home
    - Contact us
    - About us
    - Sign In

- Body

  - Search bar & Filters
  - Restaurant Cards

- Footer
  - Copyrights
  - Contact us
  - Links & Addresses

#### Props #### => Properties

## Array Destructuring

## map, filter, reduce javascript

## var vs let vs const

## Hooks

1. React has utility functions -> normal js functions -> facebook developers

- these functions has some superpowers

- useState - 80%
- useEffect - 15%
- Other - 5%

let [restaurants, setRestaurants] = useState([])

- state variable
- special fun - through which i can modify / reassign my state variable

  - this is necessary because if you dont do this and assign your variable then it will be a normal one and it does not have any effect on the UI / DOM

- setRestaurants(newVal) => your component rerendered with new value that is why UI is rendering again

A => fetching API => UI renders => useEffect called => API call => UI render => useEffect

===== Best Practices for useState

1. Never create any state variable outside the component
2. try to call hooks on the top of function component because js is async languagage. JS is synchronous threaded lanaguage => code would be running line by line
3. Never create hook inside conditional statements, not even loop, inside functions

- main (master)
  - Feat-123
    - New Branch from main branch - feat-123-handle-exception
      - Do commits and open pull request
        - Seniors will do code review of Pull request
          - Pull request approved by Seniors
            - Code of feat-123-handle-exception would be merged on main branch

Initial render
const btnText = "Login"

Re-Render
const btnText = "Logout"

// Not Happening
const btnText = "Login"
btnText = "Logout"

1,2,3,4,... 50
51,52,53,.. 100
13 chunks => each chunk has 8 restaurants inside

1
x`
3
4

https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0044745&lng=72.55311549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
1,2,3,4,5,6,,7,8

update => nextoffset - hash no
8, 9, 10.... 16

update => nextoffset - hash no

=======
If i apply <Link> tag anywhere in my proj from now onwards, it should take textDecoration and color by default

#### MakeMyTrip.com

Hotel - 20 files
Cab Booking - 10 files
Flight Booking - 25 files - Default Business
Total - 55 files

https://www.makemytrip.com/ => I will not load all 55 files
25 files would be loaded at first

https://www.makemytrip.com/hotel/ - 1 file as a bundle => bundle internally contains 20 files in compressed mode (minified mode)

### Higher order component

HOC : take component as input and return a enhanced component

### Taks

1. Design Item List of Restaurant Menu's category - x
2. Build Accordian like feature in category - y
3. Implement mock for restaurant menu - z

#############

RestaurantMenu => dummyData
RestaurantCategory => dummyData
a dummyData
b dummyData
c dummyData
d dummyData
e dummyData
f dummyData
g dummyData
,,,...
ItemList => dummyData

This problem of concept is known "prop drilling"
Soln => React Context

global place => store data => access it anywhere you want
RestaurantMenu => dummyData => would be kept at react context

ItemList => access dummyData

===== Redux

- Install @reduxjs/toolkit & react-redux
- Building the store
- Connect store to my applicaiton
- Slice (cartSlice)
- dispatch (action) // write
- Selector // read






onClick={handleClick} // reference of a function 

onClick={handleClick()}

onClick={handleAddItem(item)}

onClick={(btnText) => {
console.log("btnText",btnText)
}}>

function A()
{
///

}


A()
