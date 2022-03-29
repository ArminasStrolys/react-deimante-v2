import React from 'react';
import Namas from './Namas';
import Narvas from './Narvas';
import Garazas from './Garazas';
import Akvariumas from './Akvariumas';

const Pasaulis = () => {
    return (
        <div>
            <Namas porinis={2}/>
            <Namas neporinis={2}/>
            <br />
            <Narvas porinis={2}/>
            <Narvas neporinis={2}/>
            <br />
            <Garazas porinis={2}/>
            <Garazas neporinis={2}/>
            <br />
            <Akvariumas porinis={2}/>
            <Akvariumas neporinis={2}/>
        </div>
    );
}

export default Pasaulis;
