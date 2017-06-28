#!/bin/sh

onchange 'dist/server/**' 'dist/static/**' -i -w -- yarn start &
onchange 'src/**/*' -i -- yarn build;

wait
