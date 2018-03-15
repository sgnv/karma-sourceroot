# karma-sourceroot
Copy file directory to sourceroot of typescript files

## Problem
Running typescript project unit test in karma, using karma-sourcemap-loader to be able to see ts file stack trace only print out the ts file name. I need the full file path to be easy to directly ctrl+click link in Visual Studio Code

## Sample result stack trace
```javascript
Chrome 64.0.3282 (Windows 7.0.0) PrintController print failed
        Expected '1,000,000.00' to be '1,000,000.001'.
            at _expectTable (D:/xxx/app/scripts/controllers/print_unittests.js:615:115 <- D:/xxx/app/scripts/controllers/print_unittests.ts:675:114)
            at Object.<anonymous> (D:/xxx/app/scripts/controllers/print_unittests.js:137:9 <- D:/xxx/app/scripts/controllers/print_unittests.ts:161:8)
```

## Usage
in karma configuration file

```javascript
preprocessors: {
  'app/**/*.js': ['sourcemap','create-sourceroot'],
},
```
```javascript
plugins: [
  'karma-sourcemap-loader',
  '@vookvick/karma-sourceroot'
],
```


                                                                                                                                    ```
