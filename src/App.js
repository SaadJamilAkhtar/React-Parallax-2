import {useRef} from 'react';
import moon from './moon.png';
import land from './land.png';
import cat from './cat.gif';

import {Parallax, ParallaxLayer} from '@react-spring/parallax';

function App() {
    const ref = useRef();

    return (
        <div>
            <Parallax pages={4} ref={ref}>
                {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

                <ParallaxLayer
                    offset={0}
                    speed={1}
                    factor={2}
                    style={{
                        backgroundImage: `url(${moon})`,
                        backgroundSize: 'cover',
                        backgroundPosition: '-8rem 0rem'
                    }}
                />

                <ParallaxLayer
                    offset={2}
                    speed={1}
                    factor={4}
                    style={{
                        backgroundImage: `url(${land})`,
                        backgroundSize: 'cover',
                    }}
                />

                <ParallaxLayer
                    sticky={{start: 1, end: 2.95}}
                    style={{textAlign: 'center'}}
                >
                    <img src={cat} style={{width: '25rem'}}/>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.2}
                    speed={0.05}
                    onClick={() => ref.current.scrollTo(3)}
                >
                    <h2>Welcome to my website</h2>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.4}
                    speed={2}
                    onClick={() => ref.current.scrollTo(0)}
                >
                    <h2>The Parallax Effect</h2>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default App;
