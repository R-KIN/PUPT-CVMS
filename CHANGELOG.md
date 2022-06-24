# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.0.5] - 2022-06-24
### Added
- Basic functionality to Personal, Student, and Faculty components.

### Modified
- Logo now always reroutes to index in non-admin session.
- Slight change in animation axis.
- PersonalForm => Personal, StudentForm => Student, FacultyForm => Faculty components.

## [0.0.4] - 2022-06-17
### Added
- New record page.
- PersonalForm, StudentForm, and FacultyForm components.
- Front end routes for Home and Form pages.
- Animated transitions between pages.
- Framepath for non-index pages.

### Modified
- BasicForm changed => FormInput
- Minor cleanup on Update, Error, and Login pages.
- transition/animation dependency changed ffrom "react-transition-group" to "framer-motion"

## [0.0.3] - 2022-06-15
### Added
- Update, Error, and Login pages.
- Button and BasicForm components.

### Modified
- Home page deconstructed into Frame component.

## [0.0.2] - 2022-06-14
### Added
- router and transition dependencies for client.
- parser dependency for server.
- home page, button component for client.
- css modules for home page and button component.
- favicon.

### Modified
- slight changes to package.json in client and server.
- path directories in manifest.json and index.html for client.

## [0.0.1] - 2022-06-14
### Project created.

### Added
- client & server folders
- installed initial dependencies
- setup readme, license, and changelog files
- base server.js file


[0.0.4]: https://github.com/R-KIN/PUPT-CVMS/commit/dbcaa82d6bae915262de8a16cb171a916b4164d0
[0.0.3]: https://github.com/R-KIN/PUPT-CVMS/commit/7831b0fbb5e178cefff71549e1a2815be0e50b0e
[0.0.1]: https://github.com/R-KIN/PUPT-CVMS/commit/a4fcea155110b084fd851454690415e7688ebc23