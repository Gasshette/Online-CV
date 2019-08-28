import React, { Fragment } from "react";

import './styles.scss';

export const Displayer: React.FC = (props) => (
<div className="displayer-component">
    {props.children}
</div>
);