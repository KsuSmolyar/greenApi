import React from 'react';

export const ChatImg: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
        >
            <title>chats-outline</title>
            <path
                d="M4.8384 8.45501L5 8.70356V9V17.8333C5 18.7538 5.7462 19.5 6.6667 19.5H20.3333C21.2538 19.5 22 18.7538 22 17.8333V6.66667C22 5.74619 21.2538 5 20.3333 5H2.5927L4.8384 8.45501Z"
                stroke="currentColor"
                strokeWidth="2"
            >
            </path>
            <line
                x1="10"
                y1="10"
                x2="17"
                y2="10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round">
            </line>
            <line
                x1="10"
                y1="14"
                x2="15"
                y2="14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round">
            </line>
        </svg>

    );
};

export const CheckMark: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            x="0px"
            y="0px"
            enableBackground="new 0 0 24 24"
        >
            <title>checkmark</title>
            <path
                fill="currentColor"
                d="M9,17.2l-4-4l-1.4,1.3L9,19.9L20.4,8.5L19,7.1L9,17.2z">
            </path>
        </svg>
    )
}

export const Pencil: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            x="0px"
            y="0px"
            enableBackground="new 0 0 24 24"
        >
            <title>pencil</title>
            <path
                fill="currentColor"
                d="M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z">
            </path>
        </svg>
    )
}

export const Menu: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="24" width="24"
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            x="0px"
            y="0px"
            enableBackground="new 0 0 24 24">
            <title>menu</title>
            <path
                fill="currentColor"
                d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z">
            </path>
        </svg>
    )
}

export const Close: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="24" width="24"
            preserveAspectRatio="xMidYMid meet"
            fill="currentColor"
            enableBackground="new 0 0 24 24">
            <title>x</title>
            <path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z">
            </path>
        </svg>
    )
}
