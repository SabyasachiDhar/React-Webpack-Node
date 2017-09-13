import React from 'react';

const footerTop = () =>{
    return(
        <div className="container-fluid">
		<div className="row clearfix">
			<div className="col-sm-4">
				<h3 className="infoHeadTop">Announcement</h3>
				<div className="infoList">
					<ul>
						<li>The V0.3 (alpha) for discovery services is now available, access it <a href="javascript:void(0)">Here</a></li>
						<li>Meet the experts: next learning session is on December 19, 9AM US EST <a href="javascript:void(0)">(Details)</a></li>
						<li>New discovery tool plug -ins are now available <a href="javascript:void(0)">(List)</a></li>
						<li>Five new <a href="javascript:void(0)">client case studies</a></li>
					</ul>
				</div>
			</div>

			<div className="col-sm-4">
				<h3 className="infoHeadTop">Releases</h3>
				<div className="infoList">
					<ul>
						<li>Releases <a href="javascript:void(0)">Hermes</a> Alpha (MVP) on 9/12</li>
						<li>Releases <a href="javascript:void(0)">Athena</a> Preview version on 11/2</li>
						<li>...</li>
					</ul>
				</div>
			</div>

			<div className="col-sm-4">
				<h3 className="infoHeadTop">Current Issue Status</h3>
				<div className="infoList">
					<ul>
						<li>
							V0.3(alpha) Fixes following bugs:
							<ul>
								<li><a href="javascript:void(0)">NGB09897</a>: CSV is fails for MAP tools </li>
								<li><a href="javascript:void(0)">NGB07781</a>: Node to storage relationship are not maintained on multiple analytics</li>
							</ul>
						</li>
						
					</ul>
				</div>
			</div>
		</div>
	</div>
    );
}

export default footerTop;