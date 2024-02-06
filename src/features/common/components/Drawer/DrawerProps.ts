import React from 'react';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
    anchor?: 'left' | 'top' | 'right' | 'bottom';
    overlayStyle?: React.CSSProperties;
}