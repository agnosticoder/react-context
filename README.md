### LanguageContext.js
- i have created context here with the default value which i have used in app.js by importing there.
- in app.js i have wrapped the parentcomponent in this context provider and gave the inital value.
- also i have created usevalue hook by wrapping usecontext in a function that i can use in any component rendered by parentcomponent by importing there can calling inside a component.

### App.js
- Imported Context from LanguageContext Component and used it to wrap around Parent Component
- Also gave the intial value of the context

### ChildComponent.js
- Imported useValue hook that was created in LanguageContext.js and used here to extract (consume) the value of context