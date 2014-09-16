
# It Starts Upfront

*A StackMate bundle for rework and angular and ionic framework*

There is an old rugby adage that if you don't win the battle upfront you will probably lose the game and that goes for your digital presence if don't provide a compelling story and user experience that flows. This opinion is heavily influenced by repeatedly listening to [The Art of Designing for People](http://drt.fm/ryan-singer/).

This is really a seed project that represent a particular **StackMates** configuration for cloning into a common build engine. The intent is that **only bespoke domain logic** should live in the project you create from this starter, and where common functionality will be pulled in from [StackMates](https://github.com/dreamineering/stackmates) ecosystem.

The intended benefit is that you can save time hunting around for common solutions and making them work in your build system and instead crack on with tackling the complexity of your domain problem.


The project is split into two categories by [job to be done](http://jobstobedone.org/) where the following aphorism is intended to help create a strong conceptual dividing line of what website is versus an app. 

> Websites are for words. Apps are for action

Once you have run through the [install instructions](https://github.com/stackmates/stackmates) you have three client side project ready to go

1. A traditional website
2. A mobile app
3. A line of business app

### Sites

*Berley:* Bring the fish in

#### Home

Uses [metalsmith](http://metalsmith.io) to parse markdown files to create content with a focus is on readabilty with an information hierarchy that considers context and the readers anticpated mindset. 

The intent is that you can allow user to take basic actions for example signup to a newsletter but for more sophisticated interactions they should be able to choose from the mobile or web app solutions.

### Apps

*Bait and hook:* Get them on the boat

#### Mobile

Uses [Ionic Framework](http://ionicframework.com/), and should give an enhanced experience for interacting with content and allow a user to take action.


#### Web / Line-of-business app

This is for the office or ipad user context, it could be that you would want to split this project in two for these use cases which would be simple to do and is one of main reasons behind the StackMates approach.


## Configuration

Use *Gulp*, *Browserify* and *Rework* OR *SASS* to pull solutions together from common patterns that use the [Suit](http://suitcss.github.io/) flavoured BEM methodology for HTML and CSS.

1. Gulp config
2. Browserify entry point
3. Rework or SASS entry point manifest


### Gulp

The StackMates manages one central gulpfile with various tasks that are run dependent on input flags from the user when running from the command line. The process brings in the static assets, runs metalsmith all the traditional build system stuff. 

### Browserify

Brings the javascript together. But it to be scratched here it to attempt to build an app with small modules that don't overlap to avoid bloat yet complement each other, good mates as it were.

Note: I intend to competely seperate build components from project modules to make distinctions clearer in future.

### Rework or SASS

Preference is Suit.css and rework as they are well thought out, the problem is figuring out how best to apply the patterns that is where these common [ux patterns](https://github.com/stackmates/stackmates/tree/master/client/src/common) are intended to help out.


## Module Development

The idea is that code will start in specific projects then be extracted into [StackMates Common Directory](https://github.com/stackmates/stackmates/tree/master/client/src/common) to be further researched for whether another module exists in NPM or if a new NPM module should be created. The idea of having a holding areas is to allow a bit more thought about whether a better solution for the ecosystem rather than polute NPM needlessly with new modules.

Will need to come up with some good heuristics for this process.

App specific => Common => Find best pattern => Research NPM => Create necessary modules in NPM



## Problems

### The mega build

The appeal is the problem here is that you only need to maintain one build system for all your apps you need to make good abstractions and have good process to document that and notify of potential changes. But I think there are advantages to thinking big to build to small in that you will be able to put ideas faster once you've invested in knowing the ecosystem which is the same for everything.


### Want a fullstack solution such as Meteor? 

I haven't tried this, but it should be pretty simple explore your ideas for user experience then merge into a project using Meteor or Hapi.js as you can reuse the handlebars templates. That said I don't know how compatable handlebars is with Spacebars in the case of meteor.


## Decisions

The primary reason for using [Angular](https://angularjs.org/) is driven by [Ionic](http://ionicframework.com/) and the ability to share modules. Angular also has [Protractor](http://ionicframework.com/) which (I think) could be particularly useful when working with a microservice architecture.

*Browserify* is the key though would be nice to have some starter apps based on [ampersand](http://ampersandjs.com/) or [mercury](https://github.com/Raynos/mercury) and whatever becomes the favoured way to build [famo.us](http://famo.us/) apps.


## Reducing Noice in the Editor

You will want to hide the following to reduce noise, use saved workspaces

"sass",
"_starter",
"content",
"ghpages",
"build"
"node_modules"


"any other projects you are not working on"
"any ux patterns modules you don't want to see"

