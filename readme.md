
# It starts upfront

If you happened to play rugby in the [frontrow club](http://frontrowclub.co.nz/) then I expect you nodding sagely to yourself right now, if you still have the ability to nod that is. For those that didn't, there is an old rugby adage that if you don't will the battle upfront then you probably are not going to win (unless you are play for Australia). 

By very loose analogy lets say its the same with starting out building an app. If you can't get the punters to engage then your backend know matter how clever is worthless. So will want to making the most of your creative energies on creating an engaging experience and not worrying about the huge laundary list of best practices to get your message out there.

This project is intended to help you with this, but there is a bit of different approach here as the the meat behind this engine is over at [stackmates](https://github.com/dreamineering/stackmates)

The intent here is that only code that is bespoke to this app lives here, while you edit config files to pull in the [stackmates](https://github.com/dreamineering/stackmates) you want to use to build your solution.


Your frontend project are split into two categories by [job to be done](http://jobstobedone.org/) where... 

> Websites are for words. Apps are for action

To get you started you have three project in one

1. A traditional website
2. A mobile app
3. A line of business app

In fishing terms, the sites are the berley are the bait and hook

### The traditional site

Displays content and creates a json output of content. Focus is on readabilty given the customer the information they need based on current mindset. If the need to take action, direct them to an app.

### Mobile app

This flavour uses ionic, and should give an enhanced experience for interacting with content and allow a user to take action

### Line of business app

This is tablet up with a focus allowing a user to take action to help solve particular domain problems.


## Configuration

Use *Gulp*, *Browserify* and *Rework* OR *SASS* to pull solutions together from common patterns that use the Suit flavoured BEM methodology for HTML and CSS.

1. Gulp config
2. Browserify entry point manifest
3. Rework or SASS entry point manifest


### Gulp

Brings in the static assets, runs metalsmith if traditional build system stuff. 

### Browserify

Brings the javascript together, I still need to make this nicer. But it to be scratched here it to attempt to build an app with small modules that don't overlap to avoid bloat yet complement each other, good mates as it were.


Common [ux patterns](https://github.com/dreamineering/stackmates/tree/master/stackmates.front/src/common/ux_patterns) while [util module](https://github.com/dreamineering/stackmates/tree/master/stackmates.front/src/common/util_modules) will be kept local to the project until it is proven that an [NPM module](https://www.npmjs.org/) needs to be created. 

### Rework or SASS


Preference is Suit.css and rework as they are well thought out, the problem is figuring out how best to apply the patterns that is where these common [ux patterns](https://github.com/dreamineering/stackmates/tree/master/stackmates.front/src/common/ux_patterns) are intended to help out.


## Problems

### The mega build

The appeal is the problem here is that you only need to maintain one build system for all your apps you need to make good abstractions and have good process to document that and notify of potential changes. But I think there are advantages to thinking big to build to small in that you will be able to put ideas faster once you've invested in knowing the ecosystem which is the same for everything.


### Don't want to go client only? 

I haven't tried this, but it should be pretty simple explore your ideas for user experience then merge into a project using Meteor or Hapi.js as you can reuse the handlebars templates. That said I don't know how compatable handlebars is with Spacebars in the case of meteor.


## Decisions

The primary reason for using [Angular](https://angularjs.org/) is driven by [Ionic](http://ionicframework.com/) and the ability to share modules. Angular also has [Protractor](http://ionicframework.com/) which (I think) could be particularly useful when working with a microservice architecture.

*Browserify* is the key though would be nice to have some starter apps based on [ampersand](http://ampersandjs.com/) or [mercury](https://github.com/Raynos/mercury) and whatever becomes the favoured way to build [famo.us](http://famo.us/) apps.





## Getting started


Copy the starter project 

```
cp src/projects/_starter src/projects/[your project name]


```
mv config/example.gulp.js gulp.js
```


Edit config as per project name and shared folder locations.



config options

-b build => the config name you want to build eg siteHome, appWeb, ionic
-t type  => app || site
-c css   => default is rework || sass   
-e env   => default is development || production

Production builds go into ghpages once prod build complete

create a git deploy project the gp and ghpages deploy

To run the static site


## Static Site

```
gulp watch -b home -t site
```

### production

```
gulp build -b home -t site -e production
```

## Angular App

Job to be done

To develop the angular web app

```
gulp watch -b lob -t app
```

To test angular app

```
gulp karma -b lob -t app
```

```
gulp build -b lob -t app -e production
```


## Ionic App

```
gulp watch -b mobile -t app -c sass
```

```
gulp build -b mobile -t app -e production
```


# Editor

You will want to hide the following to reduce noise

"sass",
"_starter",
"content",
"ghpages",
"build"
"node_modules"


"any other projects you are not working on"
"any ux patterns modules you don't want to see"

