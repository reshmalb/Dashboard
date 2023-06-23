import React from 'react'
import './Featured.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ChangingProgressProvider from './ChangingProgressProvider';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Featured = () => {

   const isPositive=true;



  return (
    <div className='featured'>
      <div className='featured_top'>
        <h1 className='title'> Total Revenue</h1>
        <MoreVertOutlinedIcon/>
        </div>
        <div className='featured_bottom'>
            <div className='featured_chart'>
            <ChangingProgressProvider
            values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          >
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathTransitionDuration: 0.95,
                  trailColor: "#82ca9d",
                  pathColor: "#210876",
                  textColor: "#210876",
                })}
              />
            )}
          </ChangingProgressProvider>
             </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$2042.50K</p>
        <p className='previous_transaction'>Previous Transactions</p>
        < div className='summary'>
            <div className='items'>
                <div className='itemTitle'> Target
                </div>
                <div className={`itemResult ${isPositive ? 'positive' : 'negative'}`}>
                    <KeyboardArrowDownIcon/>
                    
                     <div className='resultAmount'>$40.6k</div>
                     </div>
            </div>

            <div className='items'>
                <div className='itemTitle'> Last Week
                </div>
                <div className={`itemResult ${isPositive ? 'positive' : 'negative'}`}>
                    <KeyboardArrowDownIcon/>
                     
                     <div className='resultAmount'>$4.6k</div>
                     </div>
            </div>


            <div className='items'>
                <div className='itemTitle'> Last Month
                </div>
              <div className={`itemResult ${isPositive ? 'positive' : 'negative'}`}>
                    <KeyboardArrowDownIcon/>
                     
                     <div className='resultAmount'>$20.6k</div>
             </div>
            </div>



        </div>
        </div>
    </div>
  )
}

export default Featured;
