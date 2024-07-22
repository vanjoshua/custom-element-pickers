import React, { useState, useEffect } from "react";
import { WixProvider, useWixModules } from "@wix/sdk-react";
import { editor, widget, inputs } from "@wix/editor";
import {
  SidePanel,
  WixDesignSystemProvider,
  ColorInput,
  Button,
  FormField,
  Text,
} from "@wix/design-system";
import "@wix/design-system/styles.global.css";

function Panel() {
  const { selectColor, selectFont } = useWixModules(inputs);
  const { setProp, getProp } = useWixModules(widget);
  const [color, setColor] = useState("#000000");
  const [fontValue, setFontValue] = useState("\n\n\n");
  const [colorValue, setColorValue] = useState("\n\n\n");

  return (
    <SidePanel width="300">
      <SidePanel.Content noPadding stretchVertically>
        <SidePanel.Field>
          <FormField>
            <ColorInput value={color} />
          </FormField>
        </SidePanel.Field>
        <SidePanel.Field>
          <FormField>
            <Button
              onClick={(event) => {
                selectColor({ theme: "color_37" }, (c) => {
                  setColorValue(JSON.stringify(c, null, 2));
                  if (c.theme !== null) {
                    const themeVar = `rgb(var(--${c.theme}))`;
                    console.log(themeVar);
                    setProp("color", themeVar)
                  } else setProp("color", c.color);
                });
              }}
            >
              Select Color
            </Button>
          </FormField>
          <FormField>
            <Text size="tiny">{colorValue}</Text>
          </FormField>
        </SidePanel.Field>
        <SidePanel.Field>
          <FormField>
            <Button
              onClick={(event) => {
                selectFont(
                  {
                    family: "arial",
                    style: {},
                  },
                  { fontMinSize: 10, fontMaxSize: 30 },
                  (f) => {
                    setFontValue(JSON.stringify(f, null, 2));
                  }
                );
              }}
            >
              Select Font
            </Button>
          </FormField>
          <FormField>
            <Text size="tiny">{fontValue}</Text>
          </FormField>
        </SidePanel.Field>
      </SidePanel.Content>
    </SidePanel>
  );
}

export default () => (
  <WixProvider host={editor.host()} auth={editor.auth()}>
    <WixDesignSystemProvider>
      <Panel />
    </WixDesignSystemProvider>
  </WixProvider>
);
