## for tailwind v4

## and if we want to use the darkmode option baed on class so we have to write this syntax in our css file

```css

@import 'tailwindcss';
@custom-variant dark (&:where(.dark, .dark *));

```