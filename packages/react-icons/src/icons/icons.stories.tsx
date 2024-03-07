import './icons.stories.css';

import type { Meta } from '@storybook/react';
import * as Tooltip from '@radix-ui/react-tooltip';

import { AddCircle, RemoveCircle } from '.';

const meta = {
  title: 'icons',
} satisfies Meta;

export default meta;

export const Default = () => {
  return (
    <div className="Root">
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={200}>
          <Tooltip.Trigger className="Icon">
            <AddCircle />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent">
              AddCircle
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
        <Tooltip.Root delayDuration={200}>
          <Tooltip.Trigger className="Icon">
            <RemoveCircle />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent">
              RemoveCircle
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
};
