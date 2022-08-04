import React from "react";

export default function Product(props) {
    const { account } = props
    return (
        <div key={account._id} className="card">
                <h1>{account.Name}</h1>
    </div>    
    )
}