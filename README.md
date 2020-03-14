
# Front-end Boilerplate using Sass and Gulp 4

**Fork of:** https://github.com/thecodercoder/frontend-boilerplate

Using a set of boilerplate files when you're starting a website project can be a huge time-saver. Instead of having to start from scratch or copy and paste from previous projects, you can get up and running in just a minute or two.

I use a lot CodePen and started to get tired of having to develop in the browser but the "ide-at-url" was just too good. Finally I found a good starting boilerplate and customized it to my needs.

## Setup

- `git clone https://github.com/aziis98/frontend-boilerplate.git <project-name>`
- `npm install`
- Install [Gulp 4](https://gulpjs.com/) globally if you don't have it yet and run `gulp` to run the default Gulp task

    or run directly `npm run dev`

In this proejct, Gulp is configured to run the following functions:

- Compile the SCSS files to CSS
- Autoprefix the CSS file
- Alphabetically concatenate the JS files
- Move final CSS and JS files to the `/dist` folder
- Start a BrowserSync session for live reload
