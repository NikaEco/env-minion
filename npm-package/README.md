## Purpose
The tool aims to help developers synchronize their environmental variable keys. This is achieved by comparing each local `.env{ specificity extension (e.g. .docker) }` file with the corresponding `.env{ specificity extension }.example` file and ensure all keys are matched. Therefore when pushed to remote and pulled by other developers, they can update their env variables
according to the updated .example templates.

## Use
Upon installation, provided the root directory of your project is a git repo, git hooks will be added to .git/hooks directory. The console message below will only be visible if you run `npm install --foreground-scripts`.
```
Successfully made hook file an executable
Hook file '/path-to-your-directory/.git/hooks/pre-push' successfully populated.
```
You are good to go!
