import React from 'react';

const ApiLoading = () => {
    return (
        <div className="h-400px">
            <div class="flex justify-center items-center">
                <div class="spinner-grow inline-block w-16 h-8 bg-current rounded-full opacity-0" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default ApiLoading;