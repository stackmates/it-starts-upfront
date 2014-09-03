
# It starts upfront

If you happened to play rugby in the [frontrow club](http://frontrowclub.co.nz/) then I expect you nodding sagely to yourself right now, if you still have the ability to nod that is. For those that didn't, there is an old rugby adage that if you don't will the battle upfront then you probably are not going to win, unless you are play for Australia. 

By very loose analogy lets say if you are starting out building an app you'll want to start out right. This project is intended to help you with this, but there is a bit of different approach here as the the meat behind this engine is over at [stackmates](https://github.com/dreamineering/stackmates)

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

The job to be done is bring the stack together

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

I have not tried this yet but it should be simple explore your solution through User Experience **It starts upfront** and then merge into use with say a with Meteor or Hapi.js without too much effort.





