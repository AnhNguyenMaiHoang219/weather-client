# weather-client

A simple Web application displaying weather forecast data including hourly chart and daily table

## Prerequisites

- [Node.js 18.16](https://nodejs.org/en/) or later
- [Git](https://git-scm.com/downloads/)
- [SSH key registered to your Github account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

## Framework and technologies

- [Next.js](https://nextjs.org/): React framework
- [Ant Design](https://ant.design/): Design system + React UI components
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction/): React state management library
- [date-fns](https://date-fns.org/): Date utility library

## Integration services

- [Open-Meteo](https://open-meteo.com/en/docs): Weather Forecast API provider
- [OpenWeather](https://openweathermap.org/weather-conditions): Weather condition codes and icons provider

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
npm install
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

```sh
npm run test:e2e
```

## Documentation

TBD
