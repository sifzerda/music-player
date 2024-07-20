# SLOT MACHINE 🎰 + MUSIC PLAYER ▶️

Current games in gamestack:

- [ ] Minesweeper
- [ ] Solitaire
- [ ] Asteroids
- [ ] Pool
- [x] Slot Machine + Music Player

## Table of Contents

1. Description
2. Badges
3. Visuals
4. Installation
5. Usage
6. Dev Stuff: Building
7. Bugs and Further Development
8. To do
9. Support
10. Contributing 
11. Authors and acknowledgment
12. License
13. Project status

## (1) Description

A personal project to create a react MERN stack app which has a number of simple games. I used trial and error and ChatGPT prompting. This was built with React, react-spring, styled components, react-player, Node, Javascript, and CSS. 

This has a basic attempt at a slot machine (incomplete), and working react music player loaded with several test songs.

## (2) Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) 
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![FontAwesome](https://img.shields.io/badge/Font%20Awesome-538DD7.svg?style=for-the-badge&logo=Font-Awesome&logoColor=white) 
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## (3) Visuals

[Visit App deployed to Heroku](https://slot-machine-10-d02b9b752090.herokuapp.com/)

![app-screenshot](https://github.com/sifzerda/slot-machine/assets/139626561/31b31fd3-c265-4837-8a97-553cb44f1d23)

## (4) Installation

```bash
git clone https://github.com/sifzerda/slot-machine.git
cd slot-machine
npm install
npm run start
```

## (5) Usage

Technologies:

+ - <strong>react-spring: </strong> animation smoothing, add tension, friction through 'animated divs' (customized through shipStyle, projectileStyle, and asteroidStyle).
+ Styled components (slot machine)
+ react-player (music player)

## (6) Dev Stuff: Building:

The main functions of code:

- React-player has a default appearance, which was changed, setting controls={false} and making useStates to control volume, song progress bar, song time, etc.

## (7) Alternative Config

xxx :
```bash
const ;
```

## (8) Bugs and Further Development: 

- slot images stop out of alignment

Optimization:
- use react-virtualized to only render visible stuff
- once game basically running, convert it into Redux or Zustand
- use a bundler like Webpack or Parcel to optimize build output: Enable code splitting, tree-shaking, and minification to reduce bundle size and improve load times.
- Consider memoizing components like Projectile and Particle using React.memo to prevent unnecessary re-renders, especially if their props rarely change.

## (9) To do: 

- [x] create slot boxes
- [x] insert graphics/emojis 
- [x] make slots spin
- [ ] align images 
- [ ] user gets points
- [ ] user spends points to spin

## (10) Support

For support, users can contact tydamon@hotmail.com.

## (11) Contributing

Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". 
1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/NewFeature)
3. Commit your Changes (git commit -m 'Add some NewFeature')
4. Push to the Branch (git push origin feature/NewFeature)
5. Open a Pull Request

## (12) Authors and acknowledgment

The author acknowledges and credits those who have contributed to this project including:

- ChatGPT

## (13) License

Distributed under the MIT License. See LICENSE.txt for more information.

## (14) Project status

This project is incomplete.
