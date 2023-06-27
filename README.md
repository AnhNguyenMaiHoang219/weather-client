# weather-client

A simple Web application displaying current weather and weather forecast data including hourly chart and daily table

The live version of the application is available at https://weather-client-hoanganh.vercel.app/

## Prerequisites

- [Node.js 18.16](https://nodejs.org/en/) or later
- [Git](https://git-scm.com/downloads/)
- [SSH key registered to your Github account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

## Framework and technologies

- [Next.js](https://nextjs.org/): React framework
- [Ant Design](https://ant.design/): Design system + React UI components
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction/): React state management library
- [date-fns](https://date-fns.org/): Date utility library
- [Jest](https://jestjs.io/) + [React Testing library](https://testing-library.com/): React test runner and framework

## Integration services and credits

- [Open-Meteo](https://open-meteo.com/en/docs): Weather Forecast API provider
- [OpenWeather](https://openweathermap.org/weather-conditions): Weather condition codes and icons provider
- [Meteocons](https://basmilius.github.io/weather-icons/index-fill.html): Weather icons by [Bas Milius](https://bas.dev/)
- [Sass mixins](https://glennmccomb.com/articles/useful-sass-scss-media-query-mixins-for-bootstrap/): Very useful Sass mixins for responsive styling

## Documentation

Please check the following document files below for details

- [Application features](https://github.com/AnhNguyenMaiHoang219/weather-client/blob/main/docs/application-features.md)
- [Known issues](https://github.com/AnhNguyenMaiHoang219/weather-client/blob/main/docs/known-issues.md)
- [Future plans](https://github.com/AnhNguyenMaiHoang219/weather-client/blob/main/docs/future-plans.md)

## Installation instruction

- Clone this repository.

```sh
git clone git@github.com:AnhNguyenMaiHoang219/weather-client.git
```

- Go to the project.

```sh
cd weather-client
```

- Install dependencies

```sh
npm install -f
```

## Running the application

### Development

```sh
npm run dev
```

### Production

```sh
npm run build && npm run start
```

Open http://localhost:3000 with your browser to start using the application

## Test

### Unit tests

```sh
npm run test
```

### e2e tests

TBD
