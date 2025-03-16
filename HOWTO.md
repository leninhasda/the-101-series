# how to merge another repository with history

1. clone the repository in another directory
2. cd into that directory
3. run following command to update the path of the repository
```bash
git filter-repo --to-subdirectory-filter kubernetes
```
4. now cd into this repository
5. add the other repository as local remote using following command
```bash
git remote add -f local ../kubernetes-101
```
6. finally merge the repo
```bash
git merge --allow-unrelated-histories local/master
```