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
## Grid Build, Test and Deploy

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
The "container" class sets the main container width, across responsive breakpoints. These are fixed widths with minimum breakpoints at 1440px, 1008px, and 752px (desktop down to tablet vertical sizes). Below 752px the grid becomes fluid, and is set the max width of the vuewport size.

``` html 
<div class="container">
  ```

By adding the "fluid" class to same element, the container becomes fluid through all breakpoints

``` html 
<div class="container fluid">
```

### Flexbox Grid
The Flexbox grid provides a 12 column layout to provive layout and alignment of content. Add "row-flex" to start your flexbox row container. Use the notation of "col-[breakpoint size][number of columns] to define the number of colums of the cell occupies.

``` html 
<div class="container">
  <div class="row-flex">
    <div class="col-xs6"></div>
  </div>
</div>
```

### Display:Grid
CSS Display:grid offers the opportunity to use a grid system designed natively for the browser. However, to support the overall Fishtank grid and spacing guidelines, we have implement a series of utility class names for row and column alignments up to a 12 column grid.

Add "row-dgrid" to start your display:grid row container. Add the "col-fixed-[Number of columns]" class name to element to define the number of columns displayed per row. Display:grid will automatically display the cells at the correct % width to display that number of cells per row. It will continue to flow the cells into multiple rows, maintaining the same cell width.

``` html
<div class="row-dgrid col-fixed-4"></div>
```

The responsive column pattern functions similarly to the flexbox grid.

``` html
<div class="row-dgrid">
  <div class="col-xs12 col-sm6 col-md8 col-lg3"></div>
  <div class="cell background col-xs12 col-sm6 col-md4 col-lg9"></div>
</div>
```

There are also offset utility classes.

``` html
<div class="row-dgrid">
  <div class="cell background col-offset-start-xs2 col-offset-end-xs5"></div>
  <div class="cell background col-offset-start-xs9 col-offset-end-xs13"></div>
</div>
```
