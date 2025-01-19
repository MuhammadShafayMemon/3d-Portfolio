import { useGLTF } from '@react-three/drei'
import {useRef} from "react";
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';


const Target = (props) => {
    const targetRef = useRef();
    const {scene} = useGLTF('/models/target.gltf')

    useGSAP(() => {
        gsap.to(targetRef.current.position,
            {y: targetRef.current.position.y + 0.5,
            repeat: -1,
            yoyo: true,
            duration: 1.5})
    })



    return (

        <mesh {...props} ref={targetRef} rotation={[Math.PI / 4, -4, 0]} >
            <primitive object={scene} />
        </mesh>
    )
}
export default Target
