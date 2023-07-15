import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const InputContainer = styled.div`
    display: relative;
    width: var(--width);
`;

const StyledInput = styled.input`
    border: none;
    color: ${COLORS.gray700};
    font-weight: 700;

    &:hover {
        color: ${COLORS.black}
    }

    &::placeholder {
        color: ${COLORS.gray500}
        font-weight: 400;
    }
    
    padding: var(--paddingTop) 0px var(--paddingBottom) var(--paddingX);

    border-bottom: solid var(--borderWidth) black;
    outline-offset: 2px;
`;

const StyledIcon = styled(Icon)`
    position: absolute;
    pointer-events: none;
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
    const cssVariableMap = {
        small: {
            '--width': `${width}px`,
            '--borderWidth': '0.75px',
            '--paddingX': '24px',
            '--paddingTop': '4px',
            '--paddingBottom': '1px',
            '--fontSize': '1rem',
            'iconSize': 16,
            'iconStrokeWidth': 1

        },
        large: {
            '--width': `${width}px`,
            '--borderWidth': '1.5px',
            '--paddingX': '36px',
            '--paddingTop': '8px',
            '--paddingBottom': '6px',
            '--fontSize': '1.25rem',
            'iconSize': 24,
            'iconStrokeWidth': 1.5
        }
    };
    const cssVariables = cssVariableMap[size];

    return <InputContainer style={cssVariables}>
            <StyledIcon id={icon} size={cssVariables.iconSize} strokeWidth={cssVariables.iconStrokeWidth}></StyledIcon>
            <StyledInput id='styledInputId' type='text' placeholder={placeholder}></StyledInput>
            <VisuallyHidden><label htmlFor='styledInputId'>{label}</label></VisuallyHidden>
        </InputContainer>;
};

export default IconInput;
