
# Tic-Tac-Toe Game to Increase JavaScript Skills

This is a simple **Tic-Tac-Toe** game built using **HTML**, **CSS**, and **JavaScript**. The purpose of this project is to enhance JavaScript skills, especially in DOM manipulation and event handling.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Play](#how-to-play)
- [Setup Instructions](#setup-instructions)
- [Game Logic](#game-logic)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a browser-based Tic-Tac-Toe game where two players (O and X) take turns to mark spaces in a 3x3 grid. The objective is to be the first to align three marks horizontally, vertically, or diagonally. The game also detects draw situations where all the spaces are filled but no player has won.

### Demo

Insert a link to a live version or screenshot of the game.

## Features

- **Responsive UI**: Adjusts to different screen sizes, allowing players to enjoy the game on various devices.
- **Winner Detection**: Identifies the winner based on predefined win patterns.
- **Draw Detection**: Recognizes when the game ends in a draw.
- **Reset Game**: Allows resetting the game at any point to play again.
- **Smooth Transitions**: Hover effects and animations for a better user experience.

## Technologies Used

- **HTML5**: For the structure of the game.
- **CSS3**: For the styling, including hover effects and layout.
- **JavaScript**: For game logic, event handling, and dynamic updates.

## How to Play

1. Player **O** starts the game.
2. Players take turns by clicking on the grid spaces. **O** and **X** alternate turns.
3. The game checks for a winner after each move:
   - If a player gets three marks in a row (horizontally, vertically, or diagonally), they win.
   - If all spaces are filled and no player has won, the game ends in a draw.
4. Use the **Reset Button** or **New Game** button to start a new round.

## Setup Instructions

To get a local copy up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tic-tac-toe
   ```

3. Open the `index.html` file in your browser:

   ```bash
   open index.html
   ```

Alternatively, you can serve the project using a local server.

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.).
- No additional dependencies or libraries are required.

## Game Logic

The game utilizes an array of winning patterns and checks them after each move to determine if there is a winner. Here's a brief overview of how it works:

- **Win Patterns**: The game checks all possible win patterns like:
  ```javascript
  let winPattern = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],
    [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
  ];
  ```
- **Winner Detection**: After each player marks a box, the game checks if the player has matched any of the winning patterns. If so, the game ends and displays the winner.
- **Draw Detection**: If no winner is found and all the boxes are filled, the game ends in a draw.

### Key JavaScript Functions

- `checkWinner()`: Checks the win patterns and determines if there's a winner.
- `resetGame()`: Resets the game state and enables all boxes for a new round.
- `showWinner(winner)`: Displays the winner message and disables further moves.

## File Structure

```bash
tic-tac-toe/
│
├── index.html      # Main HTML file
├── style.css       # Stylesheet for the game UI
├── script.js       # Game logic and interaction
└── README.md       # Project documentation (this file)
```

### HTML Structure

The HTML file includes the following sections:

- A **message container** to display the winner or draw message.
- A **grid of 9 buttons** representing the Tic-Tac-Toe board.
- A **reset button** to start a new game.

### CSS Highlights

- The background is an image with a dark overlay for better readability.
- The buttons use **hover effects** and **smooth transitions** to enhance the user experience.
- Flexbox is used for centering elements and making the layout responsive.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify this README file as needed for your project. Let me know if you want to customize any sections or if you'd like additional information!
