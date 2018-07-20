# Fishtank Grid

## Installation

```sh
npm install @fishtank/grid
```

## Dev Environment Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
## Grid Build and Test

``` bash
# lint SCSS
npm run test

# build uncompressed grid 
npm run build:css

# build grid for production with minification
npm run build

```
## Usage

The Fishtank grid comes in 2 versions, flexbox and css display:grid. Flexbox has wider adoption, and is a safe choice for projects that require wider browser compatibility. As of June 2018, The display:grid version has fairly high adoption with modern browers, but is not recommended for projects that need to support IE10 and earlier or Chrome 57 and earlier. Please consult [caniuse.com](https://caniuse.com/#feat=css-grid) to check adoption.

### Container
The "ft-container" class sets the main container width, across responsive breakpoints. These are fixed widths with minimum breakpoints at 1440px, 1008px, and 752px (desktop down to tablet vertical sizes). Below 752px the grid becomes fluid, and is set the max width of the vuewport size.

``` html 
<div class="ft-container">
  ```

By adding the "ft-fluid" class to same element, the container becomes fluid through all breakpoints

``` html 
<div class="ft-container ft-fluid">
```

### Flexbox Grid
The Flexbox grid provides a 12 column layout to provive layout and alignment of content. Add "ft-row-flex" to start your flexbox row container. Use the notation of "ft-col-[breakpoint size][number of columns] to define the number of colums of the cell occupies.

``` html 
<div class="ft-container">
  <div class="ft-row-flex">
    <div class="ft-col-xs6"></div>
  </div>
</div>
```

### Display:Grid
CSS Display:grid offers the opportunity to use a grid system designed natively for the browser. However, to support the overall Fishtank grid and spacing guidelines, we have implement a series of utility class names for row and column alignments up to a 12 column grid.

Add "row-dgrid" to start your display:grid row container. Add the "ft-col-fixed-[Number of columns]" class name to element to define the number of columns displayed per row. Display:grid will automatically display the cells at the correct % width to display that number of cells per row. It will continue to flow the cells into multiple rows, maintaining the same cell width.

``` html
<div class="ft-row-dgrid ft-col-fixed-4"></div>
```

The responsive column pattern functions similarly to the flexbox grid.

``` html
<div class="ft-row-dgrid">
  <div class="ft-col-xs12 ft-col-sm6 ft-col-md8 ft-col-lg3"></div>
  <div class="ft-col-xs12 ft-col-sm6 ft-col-md4 ft-col-lg9"></div>
</div>
```

There are also offset utility classes.

``` html
<div class="ft-row-dgrid">
  <div class="ft-col-offset-start-xs2 ft-col-offset-end-xs5"></div>
  <div class="ft-col-offset-start-xs9 ft-col-offset-end-xs13"></div>
</div>
```

_[TODO: Flexbox alignment and order class names; Display:grid template layouts]_