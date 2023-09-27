
# Contributing to Nue

First and foremost: thank you for helping with Nue! ❤️❤️


### Guidelines

1. **Most important** If you are adding a new feature, please _discuss it first_ by creating a new issue with the tag "New feature". You probably avoid doing redundant work, because not all features are automatically accepted. Nue JS strives for minimalism.

2. Features that add lots of new code, complexity, or several new/heavy NPM packages are most likely rejected. Particularly if the first rule wasn't applied.

3. Please add one fix/feature per pull request. Easier to accept and less potential merge conflicts.

3. Please add a test for every bug fix

3. Please write JavaScript (Not TypeScript)


### Formatting rules
Please try to use the original style in the codebase. Do not introduce new rules or patterns. The most notable rules are:

1. No semicolons, because it's redundant

2. Strings with single quotes

3. Indent with two spaces

4. Prefer `==` over `===`. Only strict equality only when truly needed, which is rarely

Nue is not using Prettier or ESLint because they will increase the project size to 40MB. A single `.prettierrc.csj` file is preferred on the root directory. Not sure if [Biome](//biomejs.dev/) is better.