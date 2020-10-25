import colors from './colors'
import dimensions from './dimensions'
import { sh, sw } from '~/helpers';

const icons = [
    "apple-alt",
    "bomb",
    "broom",
    "bus",
    "cannabis",
    "carrot",
    "chess-knight",
    "cloud-moon",
    "coffee",
    "couch",
    "crown",
    "crow",
    "dog",
    "fish",
    "frog",
    "hammer",
    "hamburger",
    "bug",
    "car",
    "mountain",
    "shopping-cart",
    "umbrella",
    "university",
    "utensils",
    "tree",
    "traffic-light",
    "tint",
    "thumbtack",
    "trophy",
    "theater-masks",
    "tag",
    "spider",
    "ribbon",
    "plug",
    "plane",
    "phone",
    "pen-alt",
    "newspaper",
    "mask",
    "location-arrow"
]

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const space = {
    headerHeight: 50,
    containerPadding: sh(7)
}

const boxColors = [
    {
        dark: "#cef0ce",
        light: "#F5FAF5"
    },
    {
        dark: "#f7ddd7",
        light: "#FEF6F4"
    },
    {
        dark: "#d4ebfa",
        light: "#F2F8FC"
    },
]

export {
    colors,
    dimensions,
    boxColors,
    space,
    icons,
    letters
}
