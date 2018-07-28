# ScrollJS Demo

Simple example leveraging ScollMagic library and html , css.

## Getting Started
1. Cd into project folder
2. Run npm install, if no warning are being flagged installion is working.
3. Run grunt to create base build of boilerplate for the site.
4. Run `grunt watch`.
3. ???
4. Profit!

## Structure
1. `js/`: Script files.  All scripts go here and will be automatically 
concatenated.
2. `css/`: Styles. LESS will compile from `style.less`, so include any other 
files through this file.
3. `resources/`: Things that may need to be included.
4. `index.html`: Your HTML code.  Will be processed and output elsewhere, so 
avoid touching the `<head>` area unless you know what you're doing.
5. `output/`: **View these files.**  Consult these files for development.  Once 
`grunt deploy` has been run, you will see all the prepared-for-deploy changes.
6. `deploy/`: Contains a zip of the ad ready for upload after running 
`grunt deploy`.

## Tasks
- `grunt`: basic build for development.
- `grunt watch`: Compile JavaScript and LESS after each change is saved.
- `grunt deploy`: Compile, minify, encode images to CSS, output zip to 
`deploy/` for upload.



