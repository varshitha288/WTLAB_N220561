1. Git Configuration Commands
git config --global user.name

Purpose: Sets the username attached to commits globally.
Example

git config --global user.name "Varshitha"
git config --global user.email

Purpose: Sets the email associated with commits globally.
Example

git config --global user.email "varshitha@gmail.com"
git config --list

Purpose: Displays all Git configuration settings.
Example

git config --list
git config --unset

Purpose: Removes a specific configuration value.
Example

git config --unset user.name
2. Repository Setup Commands
git init

Purpose: Initializes a new Git repository.
Example

git init
git clone

Purpose: Downloads a remote repository to the local machine.
Example

git clone https://github.com/user/project.git
git clone --branch

Purpose: Clones only a specific branch.
Example

git clone --branch dev https://github.com/user/project.git
git clone --depth

Purpose: Creates a shallow clone with limited commit history.
Example

git clone --depth 1 https://github.com/user/project.git
3. Repository Status & Inspection
git status

Purpose: Shows the status of tracked and untracked files.
Example

git status
git log

Purpose: Displays full commit history.
Example

git log
git log --oneline

Purpose: Shows commit history in short format.
Example

git log --oneline
git log --graph

Purpose: Displays branch history visually.
Example

git log --graph
git show

Purpose: Displays details of a specific commit.
Example

git show a1b2c3
git diff

Purpose: Shows differences between working directory and last commit.
Example

git diff
git diff --staged

Purpose: Shows differences between staged files and last commit.
Example

git diff --staged
git blame

Purpose: Shows who modified each line of a file.
Example

git blame index.html
git reflog

Purpose: Shows history of HEAD changes.
Example

git reflog
git shortlog

Purpose: Displays commit summary grouped by author.
Example

git shortlog
4. File Tracking Commands
git add

Purpose: Adds a specific file to staging area.
Example

git add index.html
git add .

Purpose: Adds all changed files to staging area.
Example

git add .
git add -p

Purpose: Adds selected parts of files interactively.
Example

git add -p
git restore

Purpose: Restores a file to last committed version.
Example

git restore index.html
git restore --staged

Purpose: Removes file from staging area.
Example

git restore --staged index.html
git rm

Purpose: Deletes file and stages the deletion.
Example

git rm index.html
git mv

Purpose: Renames or moves a file.
Example

git mv oldname.txt newname.txt
5. Commit Commands
git commit

Purpose: Records changes in repository with message editor.
Example

git commit
git commit -m

Purpose: Creates commit with message directly in terminal.
Example

git commit -m "Added login page"
git commit --amend

Purpose: Modifies the last commit.
Example

git commit --amend
git commit --no-edit

Purpose: Amends commit without changing commit message.
Example

git commit --amend --no-edit
6. Branch Management Commands
git branch

Purpose: Lists all local branches.
Example

git branch
git branch -a

Purpose: Shows local and remote branches.
Example

git branch -a
git branch -d

Purpose: Deletes a branch safely.
Example

git branch -d feature1
git branch -D

Purpose: Force deletes a branch.
Example

git branch -D feature1
git checkout

Purpose: Switches to another branch.
Example

git checkout main
git checkout -b

Purpose: Creates and switches to a new branch.
Example

git checkout -b feature-login
git switch

Purpose: Switches between branches (modern alternative to checkout).
Example

git switch main
git switch -c

Purpose: Creates and switches to a new branch.
Example

git switch -c new-feature
7. Merge & Integration
git merge

Purpose: Combines another branch into the current branch.
Example

git merge feature-login
git merge --no-ff

Purpose: Forces creation of merge commit even if fast-forward possible.
Example

git merge --no-ff feature-login
8. Remote Repository Commands
git remote

Purpose: Lists remote repositories.
Example

git remote
git remote -v

Purpose: Shows remote URLs.
Example

git remote -v
git remote add

Purpose: Adds a remote repository.
Example

git remote add origin https://github.com/user/project.git
git remote remove

Purpose: Removes a remote repository.
Example

git remote remove origin
git fetch

Purpose: Downloads updates from remote repository.
Example

git fetch
git fetch --all

Purpose: Fetches updates from all remotes.
Example

git fetch --all
git pull

Purpose: Fetches and merges remote changes.
Example

git pull origin main
git pull --rebase

Purpose: Fetches changes and rebases local commits.
Example

git pull --rebase origin main
git push

Purpose: Uploads commits to remote repository.
Example

git push
git push -u origin branch-name

Purpose: Pushes branch and sets upstream tracking.
Example

git push -u origin main
git push --force

Purpose: Forcefully overwrites remote branch.
Example

git push --force
9. Stash Commands
git stash

Purpose: Temporarily saves uncommitted changes.
Example

git stash
git stash list

Purpose: Shows saved stashes.
Example

git stash list
git stash pop

Purpose: Applies latest stash and removes it.
Example

git stash pop
git stash apply

Purpose: Applies stash without deleting it.
Example

git stash apply
git stash drop

Purpose: Deletes a specific stash.
Example

git stash drop stash@{0}
git stash clear

Purpose: Deletes all stashes.
Example

git stash clear
10. Reset & Undo Commands
git reset

Purpose: Moves HEAD to a specific commit.
Example

git reset HEAD~1
git reset --soft

Purpose: Undo commit but keep changes staged.
Example

git reset --soft HEAD~1
git reset --mixed

Purpose: Undo commit and unstage changes.
Example

git reset --mixed HEAD~1
git reset --hard

Purpose: Removes commits and deletes changes permanently.
Example

git reset --hard HEAD~1
git revert

Purpose: Creates a new commit that reverses previous commit.
Example

git revert a1b2c3
git clean -f

Purpose: Removes untracked files.
Example

git clean -f
git clean -fd

Purpose: Removes untracked files and directories.
Example

git clean -fd
11. Rebasing Commands
git rebase

Purpose: Reapplies commits on top of another branch.
Example

git rebase main
git rebase -i

Purpose: Interactive rebase for editing commits.
Example

git rebase -i HEAD~3
git rebase --continue

Purpose: Continues rebase after resolving conflicts.
Example

git rebase --continue
git rebase --abort

Purpose: Cancels the rebase operation.
Example

git rebase --abort
12. Cherry Pick & Patch
git cherry-pick

Purpose: Applies a specific commit to current branch.
Example

git cherry-pick a1b2c3
git format-patch

Purpose: Creates patch file from commits.
Example

git format-patch -1
git apply

Purpose: Applies patch file to working directory.
Example

git apply fix.patch
git am

Purpose: Applies patch and creates commit.
Example

git am fix.patch
13. Tagging Commands
git tag

Purpose: Lists tags.
Example

git tag
git tag -a

Purpose: Creates annotated tag.
Example

git tag -a v1.0 -m "Version 1.0"
git tag -d

Purpose: Deletes a tag.
Example

git tag -d v1.0
git push origin --tags

Purpose: Pushes tags to remote repository.
Example

git push origin --tags
14. Submodule Commands
git submodule add

Purpose: Adds another repository as a submodule.
Example

git submodule add https://github.com/user/library.git
git submodule init

Purpose: Initializes submodules.
Example

git submodule init
git submodule update

Purpose: Downloads submodule content.
Example

git submodule update
15. Debugging Commands
git bisect

Purpose: Finds commit that introduced a bug.
Example

git bisect
git bisect start

Purpose: Starts binary search for bad commit.
Example

git bisect start
git bisect good

Purpose: Marks a commit as good.
Example

git bisect good
git bisect bad

Purpose: Marks a commit as bad.
Example

git bisect bad
