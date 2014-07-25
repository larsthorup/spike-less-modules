spike-less-modules
==================

This project demonstrates how to use modularized LESS files with reusable modules

We have four modules:
* base - contains basic LESS configuration (variables, mixins)
* feed - a component that can be used on pages
* home - a page tht can be included in an app
* app - an entire app

Note: we are not actually registering and releasing to bower, just simulating


To build
--------

    cd base && npm install 
    cd feed && npm install
    todo: (cd home && npm install && grunt)
    todo: (cd app && npm install && grunt)
    
