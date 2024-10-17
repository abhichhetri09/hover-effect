# Hover Effect

Hover Effect is a TypeScript project that adds a hover highlight effect to elements on a webpage and attempts to match them with template settings from a `builderState` object.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- Adds a red outline to elements on hover
- Attempts to match hovered elements with template settings
- Waits for `builderState` to be available before initializing
- Customizable highlight style

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/hover-effect.git
   cd hover-effect
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Build the project:

   ```
   npm run build
   ```

2. Include the built JavaScript file in your HTML:

   ```
   html <script src="./dist/bundle.js"></script>
   ```

3. The hover effect will be automatically initialized when the page loads.

## Development

Use the following command to watch for changes and rebuild:

    npm run dev


## Project Structure

- `src/hover-effect.ts`: Main class implementing the hover effect functionality
- `src/index.ts`: Entry point that initializes the HoverEffect class
- `webpack.config.js`: Webpack configuration for building the project
- `tsconfig.json`: TypeScript configuration
- `package.json`: Project dependencies and scripts

## Customization

You can customize the highlight style by modifying the `addHighlightStyle` method in the `HoverEffect` class:
typescript
private addHighlightStyle(): void {
const style = document.createElement("style");
style.textContent = .${this.highlightClass} { outline: 5px solid red !important; background-color: !important; transition: all 0.3s ease-in-out; position: relative; z-index: 9999; } ;
document.head.appendChild(style);
}

## Dependencies

This project requires a `builderState` object to be present on the `window` object. Make sure this is set up in your environment.

Main dependencies:

- TypeScript
- Webpack
- ts-loader

For a full list of dependencies, see `package.json`.

## Scripts

- `npm run build`: Build the project for production
- `npm run dev`: Build the project in development mode and watch for changes

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Contact

If you have any questions, feel free to reach out to [Your Name] at [your.email@example.com].

## Acknowledgements

- [List any acknowledgements or resources you used]
