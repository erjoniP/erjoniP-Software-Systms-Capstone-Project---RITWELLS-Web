"use client";

import React from 'react'
import { BubbleChat } from 'flowise-embed-react'

function Chatbot() {
    return <BubbleChat chatflowid="2b26edb3-339f-4f5a-89f2-1c67b334aeb7"
        apiHost="http://localhost:3000"
        theme={{
            button: {
                backgroundColor: '#9370DB',
                right: 20,
                bottom: 20,
                size: 48,
                dragAndDrop: true,
                iconColor: 'white',
                customIconSrc: '',
                autoWindowOpen: {
                    autoOpen: true,
                    openDelay: 2,
                    autoOpenOnMobile: false
                }
            },
            tooltip: {
                showTooltip: true,
                tooltipMessage: 'Hi There ??!',
                tooltipBackgroundColor: 'black',
                tooltipTextColor: 'white',
                tooltipFontSize: 16
            },
            disclaimer: {
                title: 'Disclaimer',
                message: "By using this chatbot, you agree to the <a target=\"_blank\" href=\"https://flowiseai.com/terms\">Terms & Condition</a>",
                textColor: 'black',
                buttonColor: '#3b82f6',
                buttonText: 'Start Chatting',
                buttonTextColor: 'white',
                blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
                backgroundColor: 'white'
            },
            customCSS: ``,
            chatWindow: {
                showTitle: true,
                showAgentMessages: true,
                title: 'Ritwells Virtual Coach',
                titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                welcomeMessage: 'Welcome to Ritwells! How can I help you achieve your fitness goals today?',
                errorMessage: 'Oops! Something went wrong. Please try again later.',
                backgroundColor: '#ffffff',
                backgroundImage: 'enter image path or link',
                height: 700,
                width: 400,
                fontSize: 16,
                starterPrompts: [
                    'What programs do you offer?',
                    'Can you suggest a workout for me?',
                    'How can I log my workout?',
                ],
                starterPromptFontSize: 15,
                clearChatOnReload: false,
                sourceDocsTitle: 'Sources:',
                renderHTML: true,
                botMessage: {
                    backgroundColor: '#f7f8ff',
                    textColor: '#303235',
                    showAvatar: true,
                    avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png'
                },
                userMessage: {
                    backgroundColor: '#3B81F6',
                    textColor: '#ffffff',
                    showAvatar: true,
                    avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
                },
                textInput: {
                    placeholder: 'Type your question',
                    backgroundColor: '#ffffff',
                    textColor: '#303235',
                    sendButtonColor: '#3B81F6',
                    maxChars: 50,
                    maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                    autoFocus: true,
                    sendMessageSound: true,
                    sendSoundLocation: 'send_message.mp3',
                    receiveMessageSound: true,
                    receiveSoundLocation: 'receive_message.mp3'
                },
                feedback: {
                    color: '#303235'
                },
                dateTimeToggle: {
                    date: true,
                    time: true
                },
                footer: {
                    textColor: '#303235',
                    text: 'Powered by',
                    company: 'Flowise',
                    companyLink: 'https://flowiseai.com'
                }
            }
        }
        }
    />
};

export default Chatbot;