/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizeMap = {
    small: {
        '--height': '0.5rem',
        '--outerRadius': '4px'
    },
    medium: {
        '--height': '0.75rem',
        '--outerRadius': '4px'
    },
    large: {
        '--height': '1.5rem',
        '--outerRadius': '8px'
    }
};

function calculateEndBorderRadius(value) {
    console.log(value);
    console.log((Math.max(value - 98, 0) * 2 + 'px'));
    return ((Math.max(value - 98, 0) * 2 + 'px'));
}

const CustomProgressBar = styled.progress`
    appearance: none;
    height: var(--height);
    &::-webkit-progress-bar {
        border-radius: var(--outerRadius);
        background-color: ${COLORS.transparentGray15};
        box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
        padding: ${p => p.size === 'large' ? '4px' : '0px'}
    }
    &::-webkit-progress-value {
        border-radius: 4px ${p => calculateEndBorderRadius(p.value)} ${p => calculateEndBorderRadius(p.value)} 4px;
        background-color: ${COLORS.primary};
    }
`;

const ProgressBar = ({ value, size }) => {
    const dynamicStyles = sizeMap[size];
    return <CustomProgressBar max={100} value={value} style={dynamicStyles} size={size}></CustomProgressBar>;
};

export default ProgressBar;
