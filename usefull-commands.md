## Usefull Commands
    # pull an image from docker hub
    docker pull <package-name>:<package-version>

    # list pulled docker images
    docker images

    # flags
    -d: deatached mode
    -p: expose port -p <port-host>:<port-container>

    $ list all running containers
    docker container ls

## docker run 
    # run a container from a docker image
    docker run <image-name>:<image-tag>

| Flag      | Use                       | Syntax   |
|-----------|---------------------------|----------|
| -d        | deatached mode            | `-d`     |
| -p        | expose one port           | `-p <port-host>:<port-container>` |
|           | expose multiple ports     | `-p <port-host-1>:<port-container-1> -p <port-host-2>:<port-container-2>` |
| --name    | name a container          | `--name <container-name>` |

## docker build 
    # build a docker image from a dockerfile
    docker build <dockerfile_directory>

    # docker build help
    docker build --help

| Flag      | Use                       | Syntax   |
|-----------|---------------------------|----------|
| -t --tag  | name and tag a build      | `-t <image_name>:<image_tag>` |

## docker tag 
    # create a new tag image based on a previous one
    docker tag <image_name>:<image_tag_1> <image_name>:<image_tag_2> 