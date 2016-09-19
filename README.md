# Node.js project

Parts of project:

* html5 pages
* TypeScript code
* Assets from bower
* Less styles
* Gulp.js automation scripts

## Requirements

Make sure all these modules installed: `npm`, `bower`, `typings`

If `npm` installed, do this:

```bash
npm install -g bower typings
```

## Node project

Create package.json:

```bash
npm init # folow commands and answer the questions...
```

If `package.json` exists run:

## Get assets using bower

Create `bower.json`:

```bash
bower init # folow commands and answer the questions...
```

If `bower.json` exists run:

```bash
bower install
```

# Project creation flow:

```bash
mkdir <new project folder name>
cd <new project folder name>
npm init # and answer
bower init # and answer
bower install <package-name> --save
typings init
typings install <package-name> --save
# or this in case of error
typings install dt~<package-name> --global --save
npm install <package-name> --save
npm run build # Runs gulp build task
```
