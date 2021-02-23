#!/usr/bin/env bash

if [ -d "build/" ]; then rm -Rf build/; fi
mkdir build && mkdir build/firefox && mkdir build/firefox/icons; 
cp src/firefox-manifest.json build/firefox/manifest.json; 
cp src/*.js build/firefox/; 
cp icons/* build/firefox/icons; 

