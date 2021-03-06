# Vue Weather Widget

[![vue 2x](https://img.shields.io/badge/vuejs-2.x-brightgreen.svg)](https://vuejs.org/)
[![npm](https://img.shields.io/npm/v/vue-weather-widget)](http://npmjs.com/package/vue-weather-widget)
[![npm download per month](https://img.shields.io/npm/dm/vue-weather-widget)](http://npmjs.com/package/vue-weather-widget)
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/vue-weather-widget?color=red)](https://raw.githubusercontent.com/dipu-bd/vue-weather-widget/master/package.json)
[![NPM license](https://img.shields.io/npm/l/vue-weather-widget?color=blueviolet)](https://raw.githubusercontent.com/dipu-bd/vue-weather-widget/master/LICENSE)

Weather widget inspired by [forecast embeds](https://blog.darksky.net/forecast-embeds/) and powered by [darksky api](https://darksky.net/dev).

## Demo

[Browser preview](https://dipu-bd.github.io/vue-weather-widget/)

[![Preview](https://raw.githubusercontent.com/dipu-bd/vue-weather-widget/master/other/preview.gif)](https://dipu-bd.github.io/vue-weather-widget/)

## Install

### NPM

```
npm i vue-weather-widget
```

### YARN

```
yarn add vue-weather-widget
```

## Usage

### Vue

```html
<template>
  <vue-weather api-key="<your-dark-sky-api-key>" units="uk" />
</template>

<script>
  import VueWeatherWidget from "vue-weather-widget/src/VueWeatherWidget.vue";

  export default {
    components: {
      VueWeatherWidget,
    },
  };
</script>
```

### Browser

```html
<!-- Requirements -->
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"
></script>
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.0/vue.js"
></script>

<!-- vue-weather-widget -->
<script type="text/javascript" src="vue-weather-widget.js"></script>
<link href="vue-weather-widget.css" rel="stylesheet" />

<!-- Vue app -->
<div id="app">
  <weather
    api-key="<your-dark-sky-api-key>"
    latitude="24.886436"
    longitude="91.880722"
    language="en"
    units="uk"
  >
  </weather>
</div>

<script>
  new Vue({
    el: "#app",
    components: {
      weather: VueWeatherWidget,
    },
  });
</script>
```

## Props

| Props             | Type                | Default  | Description                                                                                                        |
| ----------------- | :------------------ | :------: | ------------------------------------------------------------------------------------------------------------------ |
| api-key           | String (_required_) |    -     | Your Dark Sky API key                                                                                              |
| address           | String              | current  | An address of a location (By default, it will be use user's IP to find current location)                           |
| latitude          | String              | current  | The latitude of a location (By default, it will be use user's IP to find current location)                         |
| longitude         | String              | current  | The longitude of a location (By default, it will be use user's IP to find current location)                        |
| language          | String              |  `"en"`  | A list of supported languages are given below.                                                                     |
| units             | String              |  `"us"`  | A list of supported units are given below.                                                                         |
| hide-header       | Boolean             | `false`  | Whether to show or hide the title bar.                                                                             |
| update-interval   | Number              |  `null`  | Interval in _milliseconds_ to update weather data periodically. Seting it to `0` or `null` to disables autoupdate. |
| disable-animation | Boolean             | `false`  | Use static icons when enabled.                                                                                     |
| bar-color         | String              | `"#444"` | Color of the Temparature bar.                                                                                      |
| text-color        | String              | `"#333"` | Color of the text.                                                                                                 |

## Slots

| Name    | Description                        |
| ------- | ---------------------------------- |
| header  | The header component               |
| title   | The title inside the header        |
| loading | Component to display while loading |
| error   | Component to display on error      |

### Supported units

List of supported units:

- `auto`: automatically select units based on geographic location
- `ca`: same as si, except that windSpeed and windGust are in kilometers per hour
- `uk`: same as si, except that nearestStormDistance and visibility are in miles, and windSpeed and windGust are in miles per hour
- `us`: Imperial units (the default)
- `si`: SI units

### Supported languages

- `ar`: Arabic
- `az`: Azerbaijani
- `be`: Belarusian
- `bg`: Bulgarian
- `bs`: Bosnian
- `ca`: Catalan
- `cs`: Czech
- `de`: German
- `el`: Greek
- `en`: English (which is the default)
- `es`: Spanish
- `et`: Estonian
- `fr`: French
- `hr`: Croatian
- `hu`: Hungarian
- `id`: Indonesian
- `it`: Italian
- `is`: Icelandic
- `ka`: Georgian
- `kw`: Cornish
- `nb`: Norwegian Bokmål
- `nl`: Dutch
- `pl`: Polish
- `pt`: Portuguese
- `ru`: Russian
- `sk`: Slovak
- `sl`: Slovenian
- `sr`: Serbian
- `sv`: Swedish
- `tet`: Tetum
- `tr`: Turkish
- `uk`: Ukrainian
- `x-pig-latin`: Igpay Atinlay
- `zh`: simplified Chinese
- `zh-tw`: traditional Chinese
