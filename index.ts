#!/usr/bin/env node

import chalk from 'chalk';

import prompts from 'prompts';
import minimist from 'minimist';
import path from 'node:path';
import fs from 'node:fs';

import { loadWithRocketGradient } from './utils/gradient.js';
import createSpawnCmd from './utils/createSpawnCmd.js';
import { shouldUseYarn, shouldUsePnpm } from './utils/packageManager.js';
import { fileURLToPath } from 'node:url';

interface IResultType {
  packageName?: string;
  autoInstall?: boolean;
  packageManager?: string;
}

// command
welcome();

// argv
const argv = minimist<{
  t?: string;
  template?: string;
  skipInstall: boolean;
  'skip-install': boolean;
}>(process.argv.slice(2), { string: ['_'] });

const cwd = process.cwd();
const isYarnInstalled = shouldUseYarn();
const isPnpmInstalled = shouldUsePnpm();
const DEFAULT_TARGET_NAME = 'nue-project';
const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
async function createNue() {
  const argProjectName = formatTargetDir(argv._[0]);
  let targetDir = argProjectName || DEFAULT_TARGET_NAME;
  let result: IResultType = {};
  const skipInstall = argv['skip-install'] ?? argv.skipInstall ?? false;
  try {
    result = await prompts(
      [
        {
          type: argProjectName ? null : 'text',
          name: 'projectName',
          message: 'Project name:',
          initial: DEFAULT_TARGET_NAME,
          onState: (state) => {
            targetDir = formatTargetDir(state.value) || DEFAULT_TARGET_NAME;
          }
        },
        {
          type: () =>
            !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : 'confirm',
          name: 'overwrite',
          message: () =>
            (targetDir === '.'
              ? '🚨 Current directory'
              : `🚨 Target directory "${targetDir}"`) +
            ` is not empty. Overwrite existing files and continue?`
        },
        {
          type: (_, { overwrite }: { overwrite?: boolean }) => {
            if (overwrite === false) {
              throw new Error(chalk.red('❌') + ' Operation cancelled');
            }
            return null;
          },
          name: 'overwriteChecker'
        },
        {
          type: pkgInfo || skipInstall ? null : 'select',
          name: 'packageManager',
          message: 'Which package manager do you want to use?',
          choices: [
            { title: 'npm', value: 'npm' },
            {
              title: isYarnInstalled ? 'Yarn' : 'Yarn (not installed)',
              value: 'yarn',
              disabled: !isYarnInstalled
            },
            {
              title: isPnpmInstalled ? 'Pnpm' : 'Pnpm (not installed)',
              value: 'pnpm',
              disabled: !isPnpmInstalled
            }
          ]
        }
      ],
      {
        onCancel: () => {
          throw new Error(chalk.red('❌') + ' Operation cancelled');
        }
      }
    );
  } catch (cancelled) {
    console.log(cancelled.message);
    return;
  }
  const { packageManager } = result;
  await copyTemplate(targetDir);
  await installationDeps(targetDir, !skipInstall, packageManager!);
}

function formatTargetDir(targetDir: string | undefined) {
  return targetDir?.trim().replace(/\/+$/g, '');
}

function isEmpty(path: string) {
  const files = fs.readdirSync(path);
  return files.length === 0 || (files.length === 1 && files[0] === '.git');
}

async function copyTemplate(targetDir: string) {
  const spinner = await loadWithRocketGradient('copy template');
  const dest = path.join(cwd, targetDir);
  const templatePath = path.join(
    fileURLToPath(import.meta.url),
    `../../template`
  );
  copy(templatePath, dest);
  spinner.text = 'Template copied Successfully!';
  spinner.succeed();
}

async function installationDeps(
  targetDir: string,
  autoInstall: boolean,
  packageManager: string
) {
  const pkgManager = pkgInfo ? pkgInfo.name : 'npm';
  const currentPkgManager = pkgInfo ? pkgManager : packageManager;
  if (autoInstall) {
    const cmdInherit = createSpawnCmd(path.resolve(cwd, targetDir));
    await cmdInherit(currentPkgManager, ['install']);
  }
  logger('> Initial Nue Project created successfully ✨ ✨');
  logger(`  cd ${targetDir}`);
  autoInstall
    ? logger(
      `  ${currentPkgManager} ${currentPkgManager === 'npm' ? 'run start' : 'start'
      } `
    )
    : logger(`  npm install \n\n  npm run start`);
}

function logger(info: string) {
  console.log();
  console.log(chalk.blueBright(info));
}

function pkgFromUserAgent(userAgent: string | undefined) {
  if (!userAgent) return undefined;
  const pkgSpec = userAgent.split(' ')[0];
  const pkgSpecArr = pkgSpec.split('/');
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1]
  };
}



function copy(src: string, dest: string) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

function copyDir(srcDir: string, destDir: string) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

function welcome() {
  console.log(chalk.blueBright(`\n 👍 Welcome to Nue! ! \n`));
}

createNue();