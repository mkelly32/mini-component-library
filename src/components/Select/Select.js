import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const OverriddenSelect = styled.select`
    appearance: none;
    color: ${COLORS.gray700};
    background-color: ${COLORS.transparentGray15};
    font-size: 1rem;
    border-radius: 8px;
    border: none;
    padding: 12px 28px 12px 16px;
`;

const ChevronDown = styled(Icon)`
    position: absolute;
    top: 16px;
    right: 28px;
    pointer-events: none;
`;

const CustomSelect = styled.div`
    position: relative;
    width: fit-content;
    padding-right: 12px;
`;


//const ChevronDown = styled(Icon('chevron-down', 6))``;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <CustomSelect>
        <OverriddenSelect value={value} onChange={onChange}>
          {children}
        </OverriddenSelect>
        <ChevronDown id="chevron-down" size={12}></ChevronDown>
    </CustomSelect>
  );
};

export default Select;
