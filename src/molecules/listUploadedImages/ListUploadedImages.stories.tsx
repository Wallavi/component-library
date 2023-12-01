import ListUploadedImages from "./index";
import type { Meta, StoryObj } from "@storybook/react";
// @ts-ignore
import testingImage from "../../assets/testingImage.png";

const meta = {
  title: "Molecules/ListUploadedImages",
  component: ListUploadedImages,
} satisfies Meta<typeof ListUploadedImages>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    listUploaded: [
      { primaryText: "first", secondaryText: "Testing", srcImg: testingImage },
      { primaryText: "second", secondaryText: "Testing", srcImg: testingImage },
      { primaryText: "third", secondaryText: "Testing", srcImg: testingImage },
      { primaryText: "fourth", secondaryText: "Testing", srcImg: testingImage, show: false },
    ],
    deleteItem: (idx) => {
      alert("Delete item " + idx);
    },
  },
};
