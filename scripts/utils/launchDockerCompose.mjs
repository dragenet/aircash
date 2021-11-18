import process from 'process';
import { spawn } from 'child_process';
import { resolvePathRelativeToFile } from './common.mjs';

const SIGINT = 'SIGINT'
const SIGTERM = 'SIGTERM'

export const launchDockerCompose = () => {
    process.chdir(resolvePathRelativeToFile('../'));
    const compose = spawn('docker-compose', ['up']);

    process.on(SIGINT, () => {
        compose.kill(SIGINT);
        console.log('\nStoping docker containers gracefully...');
    });
    process.on(SIGTERM, () => {
        compose.kill(SIGTERM);
        console.log('\nKilling docker containers...');
    });
    compose.on('close', () => {
        process.exit();
    });
    compose.on('exit', (code) => {
        console.log(`Docker process exited with code ${code}`);
        process.exit();
    });
    return compose;
}
