#!/bin/sh

rm -rf ./dest;
mkdir ./dest;
cp -r ./src/static ./dest/static;
touch ./dest/static/style.css;

tsc;
rollup -c --silent &
tsc -p tsconfig.server.json &
stylus -u nib --import nib ./src/static/css/index.styl -o ./dest/static/style.css;

wait
rm -rf ./dest/tmp;
