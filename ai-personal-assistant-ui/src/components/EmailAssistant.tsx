import React from "react";

const EmailAssistant: React.FC = () => {
    return(
        <div>
            <header className="text-center mb-8">
                <h1 className="text-3xl font-semibold text-gray-800">Email Assistant</h1>
                <p className="text-xl text-gray-600">Manage your emails efficiently with our smart assistant.</p>
            </header>

            <div className="flex flex-col items-center">
                <button className="py-2 px-6 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                    Compose New Email
                </button>
                <button className="py-2 px-6 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300 mt-4">
                    View Inbox
                </button>
            </div>
        </div>
    )
}

export default EmailAssistant;