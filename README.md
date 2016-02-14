#SoundShare
Experimental Plug dj esque sound sharing platform to learn ReactJS.
-----------------
Development Process

* ``webpack`` for continuous browser updates on file changes
    - ``npm install``
    - ``npm start`` [npm script to run webpack-dev-server command]
    - point browser to ``http://localhost:8080/webpack-dev-server/app``
* Feature branches are rebased into master
    - ``git checkout -b feature``
    - ...
    - ``git rebase -i master``
    - ``git checkout master``
    - ``git pull`` [Fix potential merge conflicts on master first]
    - ``git merge feature``
