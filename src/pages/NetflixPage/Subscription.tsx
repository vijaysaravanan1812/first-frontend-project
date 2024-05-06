
/*
    Styling in react js
    ----
    0. Global styles in index.css
    1. External Style for components
    2. Internal style
    3. Inline Style 
    4. CSS Modules [Recommended]
    5. styled components or @emotion

*/

import './Subscription.css'
const Subscription = () => {

    const subscriptionStyle = {
        renewColor : {
            backgroundColor: "yellow",
            color: "#000",
            padding: "20px",
            border: "solid 7px green",
            borderRadius: "10px",
        },
        renewBtnColor : {
            backgroundColor: "#c4c",
            color: "#fff",
            padding: "10px 25px",
        }
    };

  return (
    <div className="text-center" >

        {/* External CSS will impact app wide */}
        <h3 className='subscription-info'>
            You are active user
        </h3>

        {/* Inline CSS  -- Never ever try in List and Keys */}
        <p 
            style={{
                backgroundColor: "red",
                color: "#fff",
                padding: "20px",
                border: "solid 7px darkred",
                borderRadius: "10px",
            }}
        >
            Your subscription ends in 2 weeks
        </p>

        {/* internal style */}
        <p
        style={subscriptionStyle.renewColor}>
            Redeem now in 50% discount use coupon code 
        </p>
        <button style={subscriptionStyle.renewBtnColor}>
            Renew Now
        </button>
    </div>
  )
}

export default Subscription