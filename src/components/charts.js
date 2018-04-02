import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data)/data.length);
}
export default function (props) {
    return (
        <div>
            <Sparklines data={props.data} height = {props.height} width = {props.width}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>   
           <div>{average(props.data)} {props.units}</div> 

        </div>
    );
}