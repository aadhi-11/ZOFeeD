import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <div className="title">
            Total Revenue
            <MoreVertIcon fontSize='small' />
        </div>
      </div>
      <div className="bottom">
        <div className="featuredchart">
            <CircularProgressbar  value= {70} text={"70%"} strokeWidth={5} styles={{

          path: { stroke: '#a61f24' },

          text: { fill: '#a61f24' },
        }} />
        </div>
        <p className="title">
            Total sales made today
        </p>
        <p className="amount">
            $420
        </p>
        <p className="desc">
            Previous transactions processing.Last Payments may not be included.
        </p>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize='small'/>
                    <div className="resultamount">$12.4K</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize='small'/>
                    <div className="resultamount">$12.4K</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownIcon fontSize='small'/>
                    <div className="resultamount">$12.4K</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
