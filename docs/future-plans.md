# Future plans

Because of the time limitation of the assignment, not all features and improvements could be taken care of. Therefore, I would like to document some future plans for this weather application. They can be found right below.

## Improve application feature and user experiences (UX)

- Current weather data section
  - Display essential data like humidity, wind direction, atmosphere pressure, and rain probability.
  - Add hourly weather forecast with a chart to the current weather data section.

- Navigation bar
  - Add a location input for the user to fetch weather data from different locations, not just Oulu.
  - Temperature unit toggle: persisting the selected unit on page reload.

## Improve application accessibility

- Taking care of accessibility of all components by adding aria labels that will support screen readers and other accessibility tools.

## Improve testing coverage

- Improve unit test coverage by adding more tests to essential util functions and React components
- End-to-End (E2E) testing
  - Configure [Cypress](https://nextjs.org/docs/pages/building-your-application/optimizing/testing#cypress) as the E2E testing framework.
  - Add some E2E tests for the home page.
