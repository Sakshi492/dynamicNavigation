import ScreenB1 from "../views/screenB/screenB1/screenB1";
import ScreenB2 from "../views/screenB/screenB2/screenB2";
import ScreenB3 from "../views/screenB/screenB3/screenB3";

var ScreenBData = [
  {
    type: 1,
    bgColor: "rgb(255 99 103)",
    getPageContent: (props) => {
      return <ScreenB1 {...props} />;
    },
    optionDetails: {
      optionHead: "Choose an option :",
      optionList: ["Option A", "Option B", "Option C", "Option D", "Option E"],
    },
  },
  {
    type: 2,
    bgColor: "rgb(255 84 163 / 53%)",
    getPageContent: (props) => {
      return <ScreenB2 {...props} />;
    },
    optionDetails: {
      optionHead: "Select a choice :",
      optionList: ["Choice 1", "Choice 2", "Choice 3", "Choice 4", "Choice 5"],
    },
  },
  {
    type: 3,
    bgColor: "rgb(40 114 71)",
    getPageContent: (props) => {
      return <ScreenB3 />;
    },
    content:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default ScreenBData;
