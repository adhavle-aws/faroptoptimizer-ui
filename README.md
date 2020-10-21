
# Introduction

This package sets up a React development environment for FarOpt. FarOpt is a service that provides a cloud based platform to run Numerical Optimization on AWS at Scale.

Built on Bob Ross UI, see [Bob Ross in the AWS Design System](https://polaris.a2z.com/resources/bob_ross/).

## Brunch + React + Babel/ES6

This is a modern JS skeleton with React AWS-UI components for [Brunch](http://brunch.io).

## Installation

Clone this repo manually `gh repo clone adhavle-aws/faroptoptimizer-ui`.

## Getting started

* Prereqs:
    * [Node.js](http://nodejs.org): if you don't already have it, run `brew install node` to download Node
* Run:
    * [First time] `npm install` - downloads app dependencies
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run build` — builds a minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
