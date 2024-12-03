import React from 'react'
import { BubbleChat } from 'flowise-embed-react'

function Chatbot() {
    return (
        <BubbleChat
            chatflowid="2b26edb3-339f-4f5a-89f2-1c67b334aeb7"
            apiHost="http://localhost:3000" 
        />
    );
};

export default Chatbot;