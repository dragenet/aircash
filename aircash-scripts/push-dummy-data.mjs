import Dockerode from 'dockerode';
import { launchDockerCompose, filterAircashContainers} from './utils/index.mjs'

const containerPrefix = 'aircash'
const expectedContainers = ['aircash-frontend', 'strapi', 'mailhog', 'postgres']
const getAircashContainerRegex = (containerPrefix, containerNames) => new RegExp(`/${containerPrefix}_${containerNames}_.`)
const aircashContainersRegex = getAircashContainerRegex(containerPrefix, `(?:${expectedContainers.join('|')})`)

launchDockerCompose();

const docker = new Dockerode();

console.log('Waiting for containers...')

let containersList = []
let runningAircashContainers = []
while (runningAircashContainers.length < expectedContainers.length) {
    containersList = await docker.listContainers();
    runningAircashContainers = filterAircashContainers(containersList, aircashContainersRegex);
}

