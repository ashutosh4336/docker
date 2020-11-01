`Build` a Docker Image

```
docker build .
```

`Run` a Docker Image

```
docker run ${IDOFCONTAINER}
```

`Publish` a Host Conatiner Port to Host Port `-p`

```
docker run -p 8080 [HOST PORT] : 80 [CONTAINER PORT]  ${IDOFCONTAINER}
```

Run conatiner in `Detach Mode`

```
docker run -p 8080:80 -d ${IDOFCONTAINER}
```

Run conatiner in `Interactive Mode`

```
docker run -p 8080:80 -it ${IDOFCONTAINER}
```

Get logs of a conatiner

```
docker logs :OPTIONS: containerName/id
```

Start a exited Containner

```
docker start containerName/id
```

Stop a exited Containner

```
docker stop containerName/id
```

Start a Containner in `Attached Mode`

```
docker stop containerName/id
```

`Attach` Containner which is already running

```
docker attach containerName/id
```
