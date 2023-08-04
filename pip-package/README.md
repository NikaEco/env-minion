The tool aims to help developers synchronize their environmental variable keys. This is achieved by 
comparing each .env{ specificity extension (e.g. .docker) } file with the corresponding .env{ specificity extension }.example file
and ensure all keys are matched. Therefore when pushed to remote and pulled by other developers, they can update their env variables
according to the updated .example templates.

To work the **minions**, your root directory must be a git repo.
Run the command `gru` in terminal and they shall add the necessary git hooks to .git/hooks.
