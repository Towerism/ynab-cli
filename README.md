# YNAB CLI

[![Build Status](https://travis-ci.org/Towerism/ynab-cli.svg?branch=master)](https://travis-ci.org/Towerism/ynab-cli)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm version](https://badge.fury.io/js/%40ynab-cli%2Fcli.svg)](https://badge.fury.io/js/%40ynab-cli%2Fcli)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

CLI tool for YNAB budgeting software

### Warning

This tool is a work in progress. Contributions are welcome.

## Current functionality

``` bash
# Output usage information
$ ynab [command] -h

```

### auth

``` bash
$ ynab auth [options]
```

The auth command sets up authentication for the rest of the application. Simply
run `ynab auth -t <your api token here>`, and subsequent commands will your
authorization.

| options                | info                         |
|:-----------------------|:-----------------------------|
| `-t, --token <token>` | set token                    |
| `-u, --user`           | get current user information |

### budget

``` bash
$ ynab budget [options]
```

| options                | info                               |
|:-----------------------|:-----------------------------------|
| `-l, --list`           | list budgets                       |
| `-u, --use <budgetId>` | use budget for subsequent commands |

### category

``` bash
$ ynab category [options]
```

| options                 | info            |
|:------------------------|:----------------|
| `-l, --list [budgetId]` | list categories |

### Goals

Check out the [project](https://github.com/Towerism/ynab-cli/projects/1) to see what needs to get done.

### Development

This tool utilizes `awilix` for IoC and `commander` for the CLI. A wrapper has
been written around both of them so that a Controller-Service architecture can
be used. Use the npm scripts below to aid development.

``` bash
# build
$ npm run build

# build and run
$ npm run dev

# just run
$ npm run start

# build and run with --inspect-brk
$ npm run deb-debug

# lint
$ npm run lint
```