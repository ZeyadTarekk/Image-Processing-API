<div align="center">

[![GitHub contributors](https://img.shields.io/github/contributors/ZeyadTarekk/Image-Processing-API)](https://github.com/ZeyadTarekk/Image-Processing-API/contributors)
[![GitHub issues](https://img.shields.io/github/issues/ZeyadTarekk/Image-Processing-API)](https://github.com/ZeyadTarekk/Image-Processing-API/issues)
[![GitHub license](https://img.shields.io/github/license/ZeyadTarekk/Image-Processing-API)](https://github.com/ZeyadTarekk/Image-Processing-API/blob/master/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/ZeyadTarekk/Image-Processing-API)](https://github.com/ZeyadTarekk/Image-Processing-API/network)
[![GitHub stars](https://img.shields.io/github/stars/ZeyadTarekk/Image-Processing-API)](https://github.com/ZeyadTarekk/Image-Processing-API/stargazers)
[![GitHub Language](https://img.shields.io/github/languages/top/ZeyadTarekk/Image-Processing-API)](https://img.shields.io/github/languages/count/ZeyadTarekk/Image-Processing-API)

</div>

## 📝 Table of Contents

- [About](#about)
- [API Endpoint](#endpoint)
- [Get started](#get-started)
  - [Installation](#Install)
  - [Running](#running)
  - [Building for production](#Build)
  - [Running Tests](#test)
- [Technology](#tech)
- [Contributors](#Contributors)
- [License](#license)

## 📙 About <a name = "about"></a>

- An API that allows you to place images into your frontend with the size set via URL parameters and resize the image based on the entered size.
- Same the resized image on ```/assets/thumb``` folder
- If the entered image and size are entered before, Cached version is used rather than generating a new version.

## 🔚 API Endpoint <a name = "endpoint"></a>

```
GET /api/images?filename=<imagename>&width=<width>&height=<height>
```

## 🏁 Getting Started <a name = "get-started"></a>

> This is an list of needed instructions to set up your project locally, to get a local copy up and running follow these
> instructuins.

### Installation <a name = "Install"></a>

1. **_Clone the repository_**

```sh
$ git clone https://github.com/ZeyadTarekk/Image-Processing-API.git
```

2. **_Navigate to repository directory_**

```sh
$ cd Image-Processing-API
```

3. **_Install dependencies_**

```sh
npm install
```

### Running <a name = "running"></a>

1. **_Running on development mode_**

```sh
npm run start
```

Open http://localhost:3000 with your browser to see the result

### Building for production <a name = "Build"></a>
1. **_Compiling for production mode_**

```sh
npm run build
```
### Running Tests <a name = "test"></a>

```sh
npm run test
```

## 💻 Built Using <a name = "tech"></a>

- **Node.js**
- **Express.js**
- **TypeScript**


## Contributors <a name = "Contributors"></a>

<table>
  <tr>
    <td align="center">
    <a href="https://github.com/ZeyadTarekk" target="_black">
    <img src="https://avatars.githubusercontent.com/u/76125650?v=4" width="150px;" alt="Zeyad Tarek"/>
    <br />
    <sub><b>Zeyad Tarek</b></sub></a>

  </td>
  </tr>
 </table>

## License <a name = "license"></a>

> This software is licensed under MIT License, See [License](https://github.com/ZeyadTarekk/Image-Processing-API/blob/main/LICENSE) for more information ©ZeyadTarekk.
