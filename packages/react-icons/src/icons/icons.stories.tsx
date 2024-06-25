import './icons.stories.css';

import type { Meta } from '@storybook/react';
import * as Tooltip from '@radix-ui/react-tooltip';

import {
  AddCircle,
  RemoveCircle,
  CheckCircle,
  Close,
  Check,
  Upload,
  Download,
  Edit,
  External,
  Home,
  Logout,
  More,
  Reload,
  Setting,
  Search,
  Send,
  Start,
  Tune,
  Filter,
  Trash,
  Menu,
  Dnd,
  List,
  Attention,
  Calendar,
  EventBusy,
  Event,
  Help,
  HelpFill,
  History,
  Lightbulb,
  Preview,
  Visibility,
  VisibilityOff,
  ArrowTop,
  ArrowBottom,
  ArrowUp,
  ArrowDown,
  ArrowBack,
  ArrowNext,
  FirstPage,
  LastPage,
  Down,
  Text,
  Pulldown,
  Checkbox,
  Person,
  PersonGroup,
  PersonAccount,
  PersonMember,
  PersonOff,
  PersonCheck,
  PersonAdd,
  PersonManage,
  Bell,
  MapPin,
  Mail,
  Attach,
  Copy,
  Description,
  Feed,
  Credit,
  Invoice,
  Yen,
  Flag,
} from '.';
import { ReactNode } from 'react';

const meta = {
  title: 'icons',
} satisfies Meta;

export default meta;

type PreviewProps = { children: ReactNode; description: string };

export const Default = () => {
  const previewInfos: PreviewProps[] = [
    { children: <AddCircle />, description: 'AddCircle' },
    { children: <RemoveCircle />, description: 'RemoveCircle' },
    { children: <CheckCircle />, description: 'CheckCircle' },
    { children: <Close />, description: 'Close' },
    { children: <Check />, description: 'Check' },
    { children: <Upload />, description: 'Upload' },
    { children: <Download />, description: 'Download' },
    { children: <Edit />, description: 'Edit' },
    { children: <External />, description: 'External' },
    { children: <Home />, description: 'Home' },
    { children: <Logout />, description: 'Logout' },
    { children: <More />, description: 'More' },
    { children: <Reload />, description: 'Reload' },
    { children: <Setting />, description: 'Setting' },
    { children: <Search />, description: 'Search' },
    { children: <Send />, description: 'Send' },
    { children: <Start />, description: 'Start' },
    { children: <Tune />, description: 'Tune' },
    { children: <Filter />, description: 'Filter' },
    { children: <Trash />, description: 'Trash' },
    { children: <Menu />, description: 'Menu' },
    { children: <Dnd />, description: 'Dnd' },
    { children: <List />, description: 'List' },
    { children: <Attention />, description: 'Attention' },
    { children: <Calendar />, description: 'Calendar' },
    { children: <EventBusy />, description: 'EventBusy' },
    { children: <Event />, description: 'Event' },
    { children: <Help />, description: 'Help' },
    { children: <HelpFill />, description: 'HelpFill' },
    { children: <History />, description: 'History' },
    { children: <Lightbulb />, description: 'Lightbulb' },
    { children: <Preview />, description: 'Preview' },
    { children: <Visibility />, description: 'visibility' },
    { children: <VisibilityOff />, description: 'VisibilityOff' },
    { children: <ArrowTop />, description: 'ArrowTop' },
    { children: <ArrowBottom />, description: 'ArrowBottom' },
    { children: <ArrowUp />, description: 'ArrowUp' },
    { children: <ArrowDown />, description: 'ArrowDown' },
    { children: <ArrowBack />, description: 'ArrowBack' },
    { children: <ArrowNext />, description: 'ArrowNext' },
    { children: <FirstPage />, description: 'FirstPage' },
    { children: <LastPage />, description: 'LastPage' },
    { children: <Down />, description: 'Down' },
    { children: <Text />, description: 'Text' },
    { children: <Pulldown />, description: 'pulldown' },
    { children: <Checkbox />, description: 'Checkbox' },
    { children: <Person />, description: 'Person' },
    { children: <PersonGroup />, description: 'PersonGroup' },
    { children: <PersonAccount />, description: 'PersonAccount' },
    { children: <PersonMember />, description: 'PersonMember' },
    { children: <PersonOff />, description: 'PersonOff' },
    { children: <PersonCheck />, description: 'PersonCheck' },
    { children: <PersonAdd />, description: 'PersonAdd' },
    { children: <PersonManage />, description: 'PersonManage' },
    { children: <Bell />, description: 'Bell' },
    { children: <MapPin />, description: 'MapPin' },
    { children: <Mail />, description: 'Mail' },
    { children: <Attach />, description: 'Attach' },
    { children: <Copy />, description: 'Copy' },
    { children: <Description />, description: 'Description' },
    { children: <Feed />, description: 'Feed' },
    { children: <Credit />, description: 'Credit' },
    { children: <Invoice />, description: 'Invoice' },
    { children: <Yen />, description: 'Yen' },
    { children: <Flag />, description: 'Flag' },
  ];

  return (
    <div className="Root">
      <Tooltip.Provider>
        {previewInfos.map(({ children, description }) => (
          <Tooltip.Root delayDuration={200}>
            <Tooltip.Trigger className="Icon">{children}</Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent">
                {description}
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </Tooltip.Provider>
    </div>
  );
};
