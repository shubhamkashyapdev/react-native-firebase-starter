
## Unable To Load Scripts - Error
- run this command to fix the issue: `npx react-native start --reset-cache` - remove metro cache
- then run: `yarn android` - to start the application

## Regenerate the android directory
- remove the android directory `rm -rf android/`
- run `react-native init` - follow the on-screen termnial instructions
- add the firebase configurations back, check this url for instructions: `https://rnfirebase.io/`
- add other configuration if any