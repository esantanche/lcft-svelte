
FIXME

# Creating the container for the project

This is to be done once only.

```bash
sudo docker run -v /home/esantanche/SwProjects/leadershipcoachfortech-svelte-edition/:/app -w /app -t -d -p 3001:3000 --name=LcftSvelteEdition nodejsgitbashnpm
```

* The option -t allocates a terminal to the container so that it can run a shell. Without this option the container tries to start but fails because the shell needs a terminal.
* The option -d means that the container starts detached. I will have to open a shell on it later.
* The internal port 3000 will be mapped to port 3001 on the host machine. I will be able to see the app working on http://localhost:3001/

# Installing Sapper in the container (only once per container)

```bash
[root@e01f42592d53 app]$ npx degit "sveltejs/sapper-template#rollup" sapperapp
[root@e01f42592d53 app]$ cd sapperapp/
[root@e01f42592d53 sapperapp]$ npm install
[root@e01f42592d53 sapperapp]$ npm run dev
```

# To run the dev server

```bash
[root@e01f42592d53 app]$ cd sapperapp/
[root@e01f42592d53 sapperapp]$ npm run dev
```

FIXME FIXME

# Running the image, I create a container
[esantanche@luna ~]$ sudo docker run -v /home/esantanche/SwProjects/Drupal8RestApiShowbox/:/app -w /app -t -d -p 3000:3000 --name=Drupal8RestApiShowbox nodejsgitbashnpm
The container will be named Drupal8RestApiShowbox.

If you already have a container, don't use the command above, just start it.

# Exec a bash on the container
sudo docker exec -i -t Drupal8RestApiShowbox bash

# Start the dev server
Open a console on the container.

Run these commands: 
[root@2b7a67476c15 app]# cd sapperapp/
[root@2b7a67476c15 sapperapp]# npm run dev

Open http://localhost:3000/

# Installing Sapper in the container (only once per container!)
bash-5.0# npx degit "sveltejs/sapper-template#rollup" sapperapp
bash-5.0# cd sapperapp/
bash-5.0# npm install
bash-5.0# npm run dev

# Build, or better, export the application
[root@2b7a67476c15 sapperapp]# npx sapper export


