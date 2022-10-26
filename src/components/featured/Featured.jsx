import React from 'react'
import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar}  from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function Featured() {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon  className='icon'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value = {75}text={"90%"} strokeWidth={5} />
        </div>
        <div className="title">total sales made today</div>
        <div className="amount">$420</div>
        <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
              <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon />
                <div className="resultAmount ">$12.4k</div>
              </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
              <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon />
                <div className="resultAmount">$12.4k</div>
              </div>
          </div><div className="item">
            <div className="itemTitle">Target</div>
              <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon />
                <div className="resultAmount">$12.4k</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured