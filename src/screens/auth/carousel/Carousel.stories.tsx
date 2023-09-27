import Carousel from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Screens/Carousel",
  component: Carousel,
} satisfies Meta<typeof Carousel>;

type Story = StoryObj<typeof meta>;

export default meta;

const sliders = [
  {
    id: "1",
    image:
      "https://media.architecturaldigest.com/photos/5af3192d99371749a05b24db/4:3/w_2844,h_2133,c_limit/Metropol%20Parasol.jpg",
    title:
      "La eficiencia en la administración de nuestras propiedades ha aumentado en un 200% desde que empezamos a utilizar la tecnología de Goho.",
    name: "Ulises Alegría",
    job_title: "Director Operativo - Altiplano S.A de C.V",
  },
  {
    id: "2",
    image:
      "https://media.gq.com/photos/5b6b20e3a3a1320b7280f029/16:9/w_2240,c_limit/The-Brutal-Wonders-Of-The-Architecture-World-GQ-Style-Fall-2018_07.jpg",
    title:
      "lore lorem lorem lorem lorem lorem lorem lorem nuestras propiedades ha aumentado en un 200% desde que empezamos a utilizar la tecnología de Goho.",
    name: "Roberto Legorrreta",
    job_title: "Director General - Wallavi",
  },
  {
    id: "3",
    image:
      "https://images.squarespace-cdn.com/content/v1/542032d5e4b0968055ce5118/1670370005026-VNCNG9J7CYURMT1SIF4I/image-asset.jpeg?format=2500w",
    title:
      "lore lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    name: "Josias Ortiz",
    job_title: "Developer - Wallavi",
  },
];

export const Primary: Story = {
  args: {
    sliders: sliders,
  },
};
