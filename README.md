# Random Potluck Generator

Having a potluck but guests don't know what to bring? Use the Random Potluck Generator to assign each guest a recipe!

## Introduction

Tired of having the same boring foods brought to the potluck every single time? Have your guests ran out of fresh new recipes to make and bring?

That's where this project comes in. It takes in the number of guests attending, each guest's name, and assigns them a new and interesting dish!

## Images

![Starting page](/src/images/start-page.png)

![Recipe cards that have been assigned to each guest](/src/images/recipe-page.png)

## Details

This project uses React Bootstrap for most of its styling as well as a separate css file for added styles like colors and positioning. The recipes are gathered from the awesome [spoonacular API](https://spoonacular.com/food-api), using the `random` parameter. Each recipe assigned to each guest includes the name of the recipe, image, and link to the recipe. This project also launches some fun confetti from [canvas-confetti](https://github.com/catdad/canvas-confetti).

## Future Improvements

- Implementing react-router-dom for page switches instead of states.
- Adding transitions between pages with possibly [React Spring](https://www.react-spring.dev/) or [Framer motion](https://www.framer.com/motion/)
- Better design/visual elements (designing definitely is not my strong suit)
- Better mobile design
- Change structure so that I'm not passing down so much props to each component

## Extra Notes

This project is one of the first React projects I've made myself, so there's going to be a few things that could be done differently for sure. However, using the skills I have now, I think it worked out pretty well. I've made a potluck project with just Javascript before, but that was a more similar program. Making the design myself was difficult as I kept flip-flopping between what may look good and what might not, especially on mobile. I don't have the best eye for aesthetics. I think I admire web/UI designers _more_ than I did before after completing this project.
