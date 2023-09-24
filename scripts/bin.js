#!/usr/bin/env node

import create from '../index.js'

console.info('👍 Welcome to Nue!')

const prompts = { prod: false } // TODO: Implement parsing prompts

create(prompts)
