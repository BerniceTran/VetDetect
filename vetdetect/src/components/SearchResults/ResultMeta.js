import React from 'react';

const ResultMeta = props =>{
    const result = props.result;

    return (
        <div className ="result-meta">
            <div>
                <img className = "vet-image"></img>
            </div>

            <div>
                <h2 className="vet-name"></h2>
                <h3 className="clinic-name"></h3>
                <h3 className="clinic-address"></h3>
                <h3 className="clinic-phone"></h3>

            </div>
        </div>

    );
};

export default ResultMeta; 