# daymet-spet-visualize

This application is a tool to visualize data from the [Daymet Daily Surface Weather](https://doi.org/10.3334/ORNLDAAC/1840) via the [Daymet Single Pixel Extraction Tool](https://daymet.ornl.gov/single-pixel/). The primary use case is to show the historical range of temperature (minimum and maximum) and precipitation for a particular range of days in a year for a particular location. The motivating use case is

> As a person interested in visiting a location (in North America) at a particular time of year, I want to know the range of conditions at that location at that ime of year over the past few decades so that I know how to prepare for my visit.

The code was initially developed for a University of Tennessee undergraduate student practicum experience in scientific data visualization.

## Getting Started

1. Install git and clone this repo. (Or just download it)
2. in the root directory, run: "npm install"
3. Run the development server: "npm run dev"
4. Open [http://localhost:3000] with your browser to see the result.

## Getting around cors for development

1. In Chrome, install the Allow CORS: Access-Control-Allow-Origin extension.
2. In the extension's options page, set #1 to GET.
3. In the extension's options page, set #6 to localhost.
4. Turn it on to make the Daymet request work.
5. Turn it off when you are done testing.
