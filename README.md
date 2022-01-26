<div align="center">
  <h3 align="center">Simple React Example</h3>
  <p align="center">
    Tiny app with React, Tailwind, swr an Rest API
  </p>
</div>

## Table of Contents

* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)

## Getting Started

### Prerequisites

You need the following tools to start this project :
* 🐳 Docker (engine > 20 and compose > 3)

### Installation

1. Clone the repo with the command :
```sh
git clone git@github.com:JeremyDolle/simple-react-example.git
cd simple-react-example 
```

2. Start containers
```sh
$ docker-compose up -d
```

## Usage

| Container | Default URL                 |
| :-------: | :-------------------------: |
| PLATFORM  | `http://localhost:3000`     |


### Package install

⚠️
To install a new package in the `platform`, you **MUST** run `yarn` **inside** the container

```sh
docker-compose exec platform bash
yarn add <my-package>
```
