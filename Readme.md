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
* Header
    - Logo
    - Nav items 
      - Home
      - Contact us
      - About us
      - Sign In

* Body
    - Search bar & Filters
    - Restaurant Cards

* Footer
    - Copyrights
    - Contact us 
    - Links & Addresses



#### Props #### => Properties 

## Array Destructuring ## 

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



