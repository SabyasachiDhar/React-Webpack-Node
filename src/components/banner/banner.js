import React from 'react';

const Banner = () =>{
    return(
        <div className="bannerWrapper">
            <div className="container">
                <h2>What is this toolkit about?</h2>
                <p>
                    A market leading cloud modernization and migration toolkit. It embodies the Cloudinnovate <br />
                    methods and practices, and is based on Bluemix Cloud Native Architecture...
                    <a href="#">more</a> 
                </p>
                <a href="/app" className="btn-discover"><i className="fa fa-tachometer fa-3x iconStyle" aria-hidden="true"></i>Discover</a>
                <a href="#" className="btn-analyze">
                    <span className="fa-stack fa-lg iconStyle">
                        <i className="fa fa-file-o fa-stack-2x"></i>
                        <i className="fa fa-search fa-stack-1x"></i>
                    </span>
                    Analyze
                </a>

                <a href="#" className="btn-design">
                    <span className="fa-stack fa-lg iconStyle">
                        <i className="fa fa-file-o fa-stack-2x"></i>
                        <i className="fa fa-pencil fa-stack-1x"></i>
                    </span>
                    Design
                </a>
            </div>
        </div>
    );
}

export default Banner;


                    