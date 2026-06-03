// This is a client component that gets dynamically updated on the client side
'use client';

import { useState } from 'react';

// Load the pictures into an array and shuffle it
const pics: string[] = [];
for (let i = 1; i <= 17; i++) {
	pics.push(`imgs/dog${i}.jpg`);
}
// Fisher–Yates Shuffle
for (let i = pics.length - 1; i > 0; i--) {
	let j = Math.floor(Math.random() * (i + 1));
	[pics[i], pics[j]] = [pics[j], pics[i]];
}

// Component that forms the adopt button
export default function AdoptButton() {
    // useState returns an array, whose values can be accessed with array destructuring
    // the items returned are a value, and a function to update the value
    const [img, setImg] = useState("/imgs/logo.jpg");
    const [showMsg, setShowMsg] = useState(false);
    const [i, setI] = useState(0);

    // if the button is clicked then change the image, cyling through pics
    // and make the "thank you" message appear
    function handleClick() {
        setImg(pics[i]);
        setI((i + 1) % pics.length);
        setShowMsg(true);
    }

    return (
        <>
            <img src={img} alt="Dog Shelter logo"/>
            <button onClick={handleClick}>Adopt A Dog</button>
            <p id="message" style={{opacity: showMsg ? 1 : 0,}}>
                Thank you for giving our furry friend a home
            </p>
        </>
    );
}
