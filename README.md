#SoundShare
Experimental Plug dj esque sound sharing platform to learn ReactJS.
-----------------
Development Process

* ``webpack-dev-server`` for continuous browser updates on file changes
    - ``sudo npm install webpack-dev-server`` first
    - point browser to ``http://localhost:8080/webpack-dev-server/public``
* Feature branches are rebased into master
    - git checkout -b feature
    - ...
    - git rebase -i master
    - git checkout master
    - git merge feature
