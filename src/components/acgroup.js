import React from "react";

export default function AcGroup(props) {
    const { grouplist } = props
    return (
          <div key={grouplist._id}>
              
                        <h1>{grouplist.ac_group_title}</h1>
                                    
           </div>     
        
    )
}