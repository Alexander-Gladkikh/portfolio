import React from 'react';
import s from './Indicator.module.scss'

const Indicator = () => {
    return (
        <div>
            < svg className={s.svgIndicator}>
                < circle className={s.svgIndicatorTrack}/>
                < circle className={s.svgIndicatorIndication}/>
            </ svg>
        </div>
    );
};

export default Indicator;