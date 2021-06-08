import { Button as AntDesignButton, ButtonProps } from 'antd';
import classNames from 'classnames';
import { H } from 'highlight.run';
import React from 'react';

import styles from './Button.module.scss';

type Props = ButtonProps & {
    /** The ID used for identifying that this button was clicked for analytics. */
    trackingId: string;
    /** Does this button only have an icon? */
    iconButton?: boolean;
};

const Button = ({
    children,
    trackingId,
    iconButton,
    ...props
}: React.PropsWithChildren<Props>) => {
    return (
        <AntDesignButton
            {...props}
            onClick={(e) => {
                if (props.onClick) {
                    props.onClick(e);
                }
                H.track(`Button-${trackingId}`, {});
            }}
            className={classNames(props.className, styles.buttonBase, {
                [styles.iconButton]: iconButton,
            })}
        >
            {children}
        </AntDesignButton>
    );
};

export default Button;
