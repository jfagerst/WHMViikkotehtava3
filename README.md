# WHMViikkotehtava3

### Exercise. Material design and navigation

During this exercise Stack navigation and Material design libraries are used to create
simple application. User can navigate from home screen to second screen. Application
bar from React Native Paper is used (instead of default one from React Native).

Make use of tutorial available on https://callstack.github.io/react-native-paper/docs/guides/react-navigation/.

Some advice…
- Start by installing required libraries for stack navigation
- Implement two simple screens HomeScreen and SecondScreen (under screens
folder)
- Add React Native Paper library
- Implement custom application bar component (under components folder)
- Add application bar using screenoptions attribute for Stack.Navigator
- Application bar component should receive navigation and back props
- Use conditional rendering (?) according to the tutorial for displaying icons on
application bar
o If user can navigate back (on SecondScreen), back button is displayed
o If user can’t navigate back (on HomeScreen), display arrow-right icon,
which can be used to navigate to the SecondScreen