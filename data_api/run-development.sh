#!/bin/sh

echo running: npm install
npm install

echo running: npm run clean
npm run clean

echo running: npm run start
npm run start
#npm run start-pm2
