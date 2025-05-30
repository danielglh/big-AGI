import * as React from 'react';

import type { ColorPaletteProp } from '@mui/joy/styles/types';

import type { ChatExecuteMode } from './execute-mode.types';


interface ModeDescription {
  // menu data
  label: string;
  description: string | React.JSX.Element;
  canAttach?: true | 'requires-tti-edit';
  highlight?: boolean;
  shortcut?: string;
  hideOnDesktop?: boolean;
  requiresTTI?: boolean;
  // button data
  sendColor: ColorPaletteProp;
  sendText: string;
}


export const ExecuteModeItems: { [key in ChatExecuteMode]: ModeDescription } = {
  'generate-content': {
    label: 'Chat',
    description: 'Persona replies',
    canAttach: true,
    sendColor: 'primary',
    sendText: 'Chat',
  },
  'beam-content': {
    label: 'Beam', // Best of, Auto-Prime, Top Pick, Select Best
    description: 'Combine multiple models', // Smarter: combine...
    shortcut: 'Ctrl + Enter',
    canAttach: true,
    hideOnDesktop: true,
    sendColor: 'primary',
    sendText: 'Beam',
  },
  'append-user': {
    label: 'Add',
    description: 'Insert content',
    shortcut: 'Alt + Enter',
    canAttach: true,
    sendColor: 'primary',
    sendText: 'Add',
  },
  'generate-image': {
    label: 'Draw',
    description: 'AI Image Generation',
    canAttach: 'requires-tti-edit',
    requiresTTI: true,
    sendColor: 'warning',
    sendText: 'Draw',
  },
  'react-content': {
    label: 'Reason + Act', //  · α
    description: 'Answer questions in multiple steps',
    sendColor: 'success',
    sendText: 'ReAct',
  },
};
