# Git Aliases

After quite some time repeating the cycle of staging changes and commiting them, I've finally taken some time to try to break out of this loop.
I was sure there were several solutions to this, maybe a bash script, some special flag, or git command to perform this in a single action.
I found on [SOF](https://stackoverflow.com/questions/2419249/how-can-i-stage-and-commit-all-files-including-newly-added-files-using-a-singl) a much better solution than I expected.

Git already provides a way to have a better experience with repetitive commands: [Git Aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases).
To quote the git documentation, it is used to create _commands that you think should exist_.
We can use an Alias and Git will simply execute the commands stored in the alias.

To set an alias:

```
git config --global alias.coa '!git add -A && git commit -m'
```

The global flag will make this alias available throughout all projects.
The name of the alias is set with dot notation.
To use it:

```
git coa 'Commit message'
```

Which looks smoother than:

```
git add -A
git commit -m 'Comit message'
```

Other good usage, illustraded in the [git docs](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases), is to check the last commit.
Instead of entering the `git log` visualization, it's simpler to set an alias:

```
git config --global alias.last 'log -1 HEAD'
```

Then, `git last` will present the last commit directly.