my-little-node-app
===

a starter template for a node project

uses
---

* express for routes n stuff
* swig for templates
* mongoose for talking to mongo

local setup
---

    $ npm install
    $ mongod 
    $ node server

heroku setup
---

    $ heroku create
	$ heroku addons:add mongohq
	$ git push heroku master
	$ heroku open

