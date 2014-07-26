spike-less-modules
==================

This project demonstrates how to use modularized LESS files with reusable modules, using RequireJS

We have four modules:
* base - contains basic LESS configuration (variables, mixins)
* feed - a component that can be used in apps
* app - an entire app

Note: we are not actually registering and releasing to bower, just simulating using the postinstall grunt task

Note: this only works as long as we enforce clear constraints on directory structure so ../../../bower_components works 
 inside .less files no matter whether they are located inside src or inside bower_components.

To build
--------

    (cd base && npm install) 
    (cd feed && npm install)
    (cd app && npm install && grunt)
    open http://localhost:8765/index.html
    
