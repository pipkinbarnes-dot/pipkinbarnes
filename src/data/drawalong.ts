// The four steps shown in the hero film's captions and the scroll-to-draw section.
// `pip` is what Pip says to kids (short, simple). `grownUps` is the note for parents.
// `tool` names what to pick up; `color` is that tool's color on the progress bar.
//
// STAND-IN: these steps draw an apple coded by hand, to show the method. Replace them
// (and the SVG in src/components/DrawingSteps.astro) with one real page from the book
// once the illustrator supplies its line art as SVG, then set standIn to false.

export const drawAlong = {
  standIn: true,
  subject: 'an apple',
  steps: [
    {
      pip: 'Start with a big, round circle.',
      grownUps: "Light lines first, so mistakes don't matter.",
      tool: 'blue pencil',
      color: '#7cc6dd',
    },
    {
      pip: 'Dip the top. Squash the bottom.',
      grownUps: 'The outline goes over the circle.',
      tool: 'pen',
      color: '#2e2c29',
    },
    {
      pip: 'Add a stem and a leaf.',
      grownUps: 'Small details turn a shape into a thing.',
      tool: 'pen',
      color: '#2e2c29',
    },
    {
      pip: 'Now color it in!',
      grownUps: 'The guide lines vanish under the color.',
      tool: 'crayons',
      color: '#d9472b',
    },
  ],
};
