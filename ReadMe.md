# Git Commands Summary

## 1. Git Configuration

### Set User Information:

# Set username
git config --global user.name "Valerii D"

# Set email
git config --global user.email "avgust2006@rambler.ru"


### Check Configuration:

git config --list




## 2. Creating a Repository

### Initialize a New Repository:

git init


### Check Repository Status:

git status




## 3. Viewing Commits



### View the Latest Commit:

git show




## 4. Ignoring Files and Adding Files

### Ignore Files:
-  I can create a `.gitignore` folder in root directory of my project   
    and will put there files an folders to ignore.

 


### Add Files to the Index Area:

# Add specific file
git add <file-name>

# Add all files in the current directory
git add .




## 5. Adding Files Interactively

### Add Changes Interactively:

git add -p

- This splits changes , allowing selective indexing.



## 6. Committing Changes

### Commit All Tracked Changes:

git commit -a -m "Commit message"


 




## 7. Removing Files

### Remove Files from Repository and Index:

git rm <file-name>


### Remove Files Only from Index (Keep in Working Directory):

git rm --cached <file-name>




*This line is written in cursive.*

**This line is written in bold.**



 

