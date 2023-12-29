"use client"
import { TypeAnimation } from 'react-type-animation';

export default function TypingEffect() {
 return (
  <div className=' font-logo h-96'>
      <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Social Login with Google',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Social Login with NextJS',
            1000,
            'Social Login with OAuth',
            1000,
            'Social Login with AuthJS',
            1000
          ]}
          wrapper="span"
          speed={30}
          style={{ fontSize: '4em', display: 'inline-block' }}
          repeat={Infinity}
          cursor={true}
          // preRenderFirstString={true}
        />
    </div>
 )
}