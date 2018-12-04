import React from 'react';
import './BeholderBox.css';
import beholderone from './beholder_stage_1.svg';
import beholdertwo from './beholder_stage_2.svg';
import beholderthree from './beholder_stage_3.svg';
import beholderfour from './beholder_stage_4.svg';
import beholderfive from './beholder_stage_5.svg';
import beholdersix from './beholder_stage_6.svg';
import portal from './portal.svg';


const BeholderBox = (props) => {
  return (
      <div className="portalBeholderContainer">
        <div className="portalBox">
          <img className='portal'
            src={portal}
            alt="portal"
          />
        </div>
        
        <div className="beholderBox">
          {(
            () => {
              switch(props.attempts){
                case 1:
                  return (
                      <img className='beholder'
                        src={beholderone}
                        alt="beholder"
                      />
                    );
                case 2:
                  return (
                      <img className='beholdertwo'
                        src={beholdertwo}
                        alt="beholder"
                      />
                    );
                case 3:
                  return (
                      <img className='beholderthree'
                        src={beholderthree}
                        alt="beholder"
                      />
                    );
                case 4:
                  return (
                      <img className='beholderfour'
                        src={beholderfour}
                        alt="beholder"
                      />
                    );
                case 5:
                  return (
                      <img className='beholderfive'
                        src={beholderfive}
                        alt="beholder"
                      />
                    );
                case 6:
                  return (
                      <img className='beholdersix'
                        src={beholdersix}
                        alt="beholder"
                      />
                    );
                default:
                  break;
              }
            })()
            // ^ IIFE above as JSX only takes expressions
        }
        </div>
    </div>
  );
}

export default BeholderBox;
