import React from 'react'

function ColorPalette() {
  return (
    <div className='colorpalettediv'>
        <div className='colordiv'>
        <div className='dot' style={{backgroundColor:"green"}}> </div>
        <div> Green </div>
        </div>
        <div className='colordiv'>
        <div className='dot' style={{backgroundColor:"red"}}></div>
        <div> Red </div>
        </div>
        <div className='colordiv'>
        <div className='dot' style={{backgroundColor:"yellow"}}></div>
        <div> Yellow </div>
        </div>
        <div className='colordiv'>
        <div className='dot' style={{backgroundColor:"blue"}}></div>
        <div> Blue </div>
        </div>
        <div className='colordiv'>
        <div className='dot' style={{backgroundColor:"purple"}}></div>
        <div> Purple </div>
        </div>
        <div className='colordiv'>
        <div className='dot' style={{backgroundColor:"black"}}></div>
        <div> Black </div>
        </div>
        <div className='colordiv'>
        <div className='dot' style={{backgroundColor:"white",border:"solid grey"}}></div>
        <div> White </div>
        </div>
        <div className='colordiv'>
        <div className='dot' style={{backgroundColor:"brown"}}></div>
        <div> Brown </div>
        </div>
        <div className='colordiv'>
        <div className='dot' style={{backgroundColor:"grey"}}></div>
        <div> Grey </div>
        </div>
        <div className='colordiv'>
        <div className='dot' style={{backgroundColor:"pink"}}></div>
        <div> Pink </div>
        </div>
    </div>
  )
}

export default ColorPalette