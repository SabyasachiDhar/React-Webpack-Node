import React from 'react';
import { Link } from 'react-router';

const Navigation = () =>{
    return(
        <div className="navigationWrap">
            <ul className="nav nav-tabs nav-justified nav-justi-cust">
                <li><a href="javascript:void(0)">Tutorials and Learning Resources</a></li>
                <li><a href="javascript:void(0)">Solutioning</a></li>
                <li><a href="javascript:void(0)">Plug in Development</a></li>
                <li><a href="/app">Discovery Toolset</a></li>
                <li><a href="javascript:void(0)">Migration Fastpath</a></li>
                <li><a href="javascript:void(0)">FAQ</a></li>
            </ul>
        </div>
    );
}

export default Navigation;