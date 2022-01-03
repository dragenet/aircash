#!/usr/bin/node

import Dockerode from 'dockerode'

const docker = new Dockerode();
docker.listContainers(function (err, containers) {
    containers.forEach(function (containerInfo) {
        console.log(`Stopping container ${containerInfo.Names[0]}`)
        docker.getContainer(containerInfo.Id).stop();
    });
  });