
# Contributing to Nue

First and foremost: thank you for helping with Nue! ❤️❤️


### Guidelines

1. **Most important** If you are adding a new feature, please discuss it first by creating a new issue with a tag "New feature". This way you avoid doing redundant work, because not all features are automatically accepted. Nue JS strives for minimalism.

2. Features that add lots of new code, complexity, or several new/heavy NPM packages are most likely rejected.

3. If you are adding a feature, bug fix, or something else, please add one thing per pull request.

3. If you are fixing a bug, please add a test that fails before your fix and passes after your fix.

3. The code is written in JavaScript (Not TypeScript).


### Formatting rules
Please try to use the original style in the codebase. Do not introduce new rules or patterns. Most notable rules are:

1. No semicolons, because it's redundant

2. Strings with single quotes

3. Indent with two spaces

4. Prefer `==` over `===`. Only strict equality only when truly needed, which is rarely