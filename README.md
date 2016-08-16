tinder-desktop
========

### Tinder-Desktop is an amazing app, but it currently doesn't work because Tinder updated it's OAuth method and its not working well with Electron.

### I am very busy these days and this app will likely sit until someone from OS can chip in and help get the OAuth fixed. Please follow along here: https://github.com/tinderjs/tinder-desktop/issues/148 

### Thanks! -- Anthony

#### Contribution ####

tinder-desktop is a project that has a lot of potential if the power of the open-source community is harnessed. Come [join us on Slack](http://tinderjs.herokuapp.com) and view the [priorities list](https://github.com/tinderjs/tinder-desktop/wiki/Development-Priorities) to see how you can contribute, it is well appreciated!

#### Development ####

Run `npm install` in the main directory, and ensure you have gulp installed (`npm install -g gulp-cli`).

###### Running

From the project root:

```
gulp run
```

This starts the app, and listens on port 5858 to allow remote debugging of the main Electron process.

###### Building and packaging

`gulp build:all` builds binaries for all platforms.

`gulp pack:all` packages installers for all platforms.

`gulp -T` lists all available tasks, including platform-specific ones.

Limitations: 
- OS X can only be built and packaged on a Mac.
- Packaging Linux builds requires [fpm](https://github.com/jordansissel/fpm).

#### Contributors ####

- [@mfkp] (https://github.com/mfkp) ([http://www.kylepowers.com/](http://www.kylepowers.com/))
- [@tomlandia](https://github.com/tomlandia) ([http://thomasschneider.com/](http://thomasschneider.com/))
- [@wbyoko](https://github.com/wbyoko) ([http://wbyoko.co/](http://wbyoko.co/))
- [@mrmayfield](https://github.com/mrmayfield) ([http://anthonymayfield.com/](http://anthonymayfield.com/))
- [@run1t](https://github.com/run1t)
- [@SaturnusDJ](https://github.com/SaturnusDJ)


#### Acknowledgment ####

This application was originally created by Github user [@mfkp] (https://github.com/mfkp) as [tinderplusplus](https://github.com/mfkp/tinderplusplus) and a big thank you is given to him for getting the project off the ground and running.

### ISC License ###

Copyright (c) 2015, VibraMedia, LLC

Copyright (c) 2016, TinderJS, Github Organization

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
