# Color Wheel Transition

A simple site that features a dynamic color wheel transition based on the HSL color space. The background color smoothly shifts through the HSL spectrum, providing a visually appealing experience. Additionally, the webpage displays real-time HSL color information along with the corresponding hex code.

## Features

- **Dynamic Color Transition:** The background color transitions smoothly through the HSL spectrum.
- **Real-time HSL Information:** The webpage showcases the current HSL color values and the corresponding hex code.

## Demo GIF

![DEMO](https://i.imgur.com/uLNsKeg.gif)

## How to Use

1. Clone the repository:

    ```bash
    git clone https://github.com/noahsamoa/rgb-hsl-clock.git
    cd rgb-hsl-clock
    ```

2. Open the `index.html` file in your preferred web browser.

## Project Details

- The color wheel utilizes the HSL color space, adjusting the hue value over time.
- JavaScript is employed to update the background color, HSL information, and hex code dynamically.
- The transition includes smooth color changes and an inverted text color for better visibility.

## Notes

- The linear hue portion of the HSL spectrum has only 360 degrees of scale, but there are 1,440 minutes per day; this leads to one hue change every 4 minutes. 

## Contributions

Contributions are welcomed! If you have ideas, bug fixes, or improvements, please open an issue or submit a pull request.
