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

Consider that I updated sapper later. It went to version 0.27.16.

```bash
[root@e01f42592d53 sapperapp]$ npm update sapper
```

# To run the dev server

```bash
[root@e01f42592d53 app]$ cd sapperapp/
[root@e01f42592d53 sapperapp]$ npm run dev
```

# To run a bash on the container

```bash
sudo docker exec -i -t LcftSvelteEdition bash
```

# To build the project

```bash
[root@e01f42592d53 app]$ cd sapperapp/
[root@e01f42592d53 sapperapp]$ npm run build
```

# To copy the project to production or testing

1. You need to copy the entire folder /sapperapp/, in my case /vol/WORKnARCH/SwProjects/leadershipcoachfortech-svelte-edition/sapperapp/.
1. After the first copy, you need to copy the folders /vol/WORKnARCH/SwProjects/leadershipcoachfortech-svelte-edition/sapperapp/__sapper__/build/ and 
/vol/WORKnARCH/SwProjects/leadershipcoachfortech-svelte-edition/sapperapp/static/
1. Also, don't forget to restart the node server (see below)
1. If it's the testing website, you need the robots.txt file in /srv/sites/testing.leadershipcoachfortech.com/sapperapp/static

# To run the app on the server

```bash
root@FREEDOMANDCOURAGE:/srv/sites/testing.leadershipcoachfortech.com/sapperapp# export PORT=3001
root@FREEDOMANDCOURAGE:/srv/sites/testing.leadershipcoachfortech.com/sapperapp# nohup node __sapper__/build &
```

You have to restart this node server every time you upload the folder build.

Now there is a service defined in /etc/systemd/system/leadershipcoachfortechcom.service.

You just have to run "service leadershipcoachfortechcom restart"
