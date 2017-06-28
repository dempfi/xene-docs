#!/bin/sh

rm -rf ./dist;
mkdir ./dist;
cp -r ./src/static ./dist/static;
touch ./dist/static/style.css;

tsc;
rollup -c &
tsc -p tsconfig.server.json &
stylus -u nib --import nib ./src/static/css/index.styl -o ./dist/static/style.css;
rm -rf ./dist/tmp;

wait
