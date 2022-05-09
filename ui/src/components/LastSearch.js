import React, { useEffect, useState } from 'react';
import axios from 'axios';


function SearchList() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log(process.env);
        const fetchData = async () => {
            const result = await axios.get(
                `${process.env.REACT_APP_API_URL}/movies`,
            );
            console.log(result);
            if (result.data.movies) {
                let messagesArray = result.data.movies;
                messagesArray.reverse();
                setMessages(result.data.movies);
            }
        };

        fetchData();
    }, []);

    return (
        <div id="SearchList">
            <div className='text-2xl font-bold mb-4'>Latest messages</div>
            <ul className="-mb-8 max-h-96 overflow-auto">
                {messages.length ? messages.map((message, messageIdx) => (
                    <li key={message.entryID}>
                        <div className="relative pb-8">
                            {messageIdx !== messages.length - 1 ? (
                                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                    <p className="text-sm text-gray-500">
                                        <span className="font-medium text-gray-900">
                                            {message.senderName}
                                        </span>
                                        <span className="font-medium">
                                            {` sent a mail to ${message.receiverMail}: ${message.messageContent}`}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                )) :
                    <span>No messages yet</span>
                }
            </ul>
        </div>
    );
}

export default SearchList;