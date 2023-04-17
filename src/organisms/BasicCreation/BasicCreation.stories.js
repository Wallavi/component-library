import BasicCreation from "./index";

export default {
  component: BasicCreation,
  title: "Organisms/BasicCreation",
};

const Template = (args) => <BasicCreation {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleClick: () => {},
};
