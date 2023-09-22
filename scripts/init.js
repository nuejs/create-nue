#!/bin/sh
':' //; exec "$(command -v bun || command -v node)" "$0" "$@"

console.info(`
👍 Welcome to Nue!

Please cd to your new app and run following:

npm run start
`)