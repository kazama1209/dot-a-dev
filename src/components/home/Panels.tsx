import React from "react";
import {
  StyledPanels,
  StyledPanelItem,
  StyledPanelBackground,
  StyledPanelName,
  StyledPanelContent,
} from "styles/home/Panels";

import panel1 from "assets/images/home/panel1.jpg";
import panel2 from "assets/images/home/panel2.jpg";
import panel3 from "assets/images/home/panel3.jpg";
import panel4 from "assets/images/home/panel4.jpg";

interface PanelItem {
  backgroundImage: string;
  name: string;
  title: string;
  caption: string;
}

const panelItems: PanelItem[] = [
  {
    backgroundImage: panel1.src,
    name: "PANEL1",
    title: "Lorem ipsum dolor sit",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
  {
    backgroundImage: panel2.src,
    name: "PANEL2",
    title: "Lorem ipsum dolor sit",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
  {
    backgroundImage: panel3.src,
    name: "PANEL3",
    title: "Lorem ipsum dolor sit",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
  {
    backgroundImage: panel4.src,
    name: "PANEL4",
    title: "Lorem ipsum dolor sit",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
];

const Panels: React.FC = () => {
  return (
    <StyledPanels>
      {panelItems.map((panelItem) => (
        <StyledPanelItem key={panelItem.name}>
          <StyledPanelBackground backgroundImage={panelItem.backgroundImage} />
          <StyledPanelName>
            <p>{panelItem.name}</p>
          </StyledPanelName>
          <StyledPanelContent>
            <h1>{panelItem.title}</h1>
            <p>{panelItem.caption}</p>
          </StyledPanelContent>
        </StyledPanelItem>
      ))}
    </StyledPanels>
  );
};

export default Panels;
