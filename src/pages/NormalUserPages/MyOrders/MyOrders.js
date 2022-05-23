import React from 'react';

const MyOrders = () => {
    return (
        <div>
            <h1>Orders</h1>
            <div class="dropdown dropdown-hover">
                <label tabindex="0" class="btn m-1">Hover</label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MyOrders;