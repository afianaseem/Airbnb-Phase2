import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faAirbnb, faTwitter, faFacebook, faInstagram, faLinkedin, faGithub, faYoutube, faPinterest 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faGlobe,faForward,faBackward, faBars, faUser, faIcons, faHome, faBell, faEnvelope, faHeart, faComment, faCamera, faCog, faMusic 
} from "@fortawesome/free-solid-svg-icons";
import "./Cards_grid.css";
import Card from './Card';

function Cards_grid() {

 const cardsitems=[
    {
        images:["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=960&im_q=highq",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/71d534a9-6699-4fe0-ad82-a9aaf0450b56.png?im_w=720&im_q=highq",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/3f7a34a4-0052-4d5d-8e81-a75667f48a70.png?im_w=720&im_q=highq"
        ],
        location:"Stay in Prince’s Purple Rain house",
        hostedby:"Hosted by Wendy And Lisa",
        price:"$7 per guest",
    },
    {
        images:["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjMyMzc5Mzc2MTc3OTEzMg%3D%3D/original/8a39953f-f158-4cc2-a112-aa4079e0fca8.jpeg?im_w=960&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjMyMzc5Mzc2MTc3OTEzMg%3D%3D/original/36789d8e-f28a-44ed-8a2c-3e69f2ad6769.jpeg?im_w=720&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjMyMzc5Mzc2MTc3OTEzMg%3D%3D/original/749262fe-943e-4135-8c9a-bb0e608a83c5.jpeg?im_w=720&im_q=highq"
        ],
        location:"Stay in Prince’s Purple Rain house",
        hostedby:"Hosted by Doja Cat",
        price:"$77 per guest",
    },
    {
        images:["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY2MTYzNDg4MjE2ODY1Nw%3D%3D/original/a332d020-4315-4f63-af71-444d46474939.png?im_w=960&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY2MTYzNDg4MjE2ODY1Nw%3D%3D/original/fd798db5-b304-43f6-8b2e-b35911e33b2e.png?im_w=720&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY2MTYzNDg4MjE2ODY1Nw%3D%3D/original/22899932-b8bd-41b2-bd5a-1c913efe4c05.png?im_w=720&im_q=highq"
        ],
        location:"Stay in Polly Pocket's",
        hostedby:"Hosted by Polly Pocket",
        price:"$97 per guest",
    },
    {
        images:["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NzE3Nzg1NDA2MjM5NzY2NQ%3D%3D/original/85f23053-8285-4fe9-b0c8-5a6f98e2dbab.png?im_w=720&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NzE3Nzg1NDA2MjM5NzY2NQ%3D%3D/original/f292c5ae-6b6d-4bf6-9b93-a88b11f021bb.png?im_w=720&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NzE3Nzg1NDA2MjM5NzY2NQ%3D%3D/original/d709bdb6-58cf-4b1a-951a-3af4c8c84a1a.png?im_w=720&im_q=highq"
        ],
        location:"SleepOver in Polly Pocket's",
        hostedby:"osted by Polly Pocket",
        price:"$107 per guest",
    },
    {
        images:["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjE4NTg5MzIzNjI0NjI2MA%3D%3D/original/e6b26733-2c15-47d9-b097-6968b39bb697.jpeg?im_w=960&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjE4NTg5MzIzNjI0NjI2MA%3D%3D/original/c6e8b725-62c3-45d8-a9bb-33dd6b62df99.jpeg?im_w=720&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjE4NTg5MzIzNjI0NjI2MA%3D%3D/original/55a2777a-fc80-4d7b-af05-a9f737ff8661.jpeg?im_w=720&im_q=highq"

        ],
        location:"Stay in Up's house",
        hostedby:"Hosted by Andy",
        price:"$22 per guest",
    },
    {
        images:["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/bd73f0f8-9057-4bbc-ad70-1db13eb5c03f.png?im_w=960&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/ee71281a-74af-4200-882a-53c2c8d96a42.jpeg?im_w=720&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/44b9a499-bb02-4048-8748-23104627d664.jpeg?im_w=720&im_q=highq"

        ],
        location:"Stay in  Rain house",
        hostedby:"Hosted by Wendy",
        price:"$11 per guest",
    },
    {
        images:["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=960&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/dcb25748-642f-4314-9815-acaba652ca1e.jpeg?im_w=720&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/f52a6a13-c8d1-4966-ad19-e614fd4bae3c.jpeg?im_w=720&im_q=highq"
        ],
        location:"Stay in Inside Out house",
        hostedby:"Hosted by  Lisa",
        price:"$141 per guest",
    },
    {
        images:["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/c92634d0-4964-439a-905d-b9129af14d34.jpeg?im_w=960&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/b4348974-568a-4623-9d8b-0890067e5e34.jpeg?im_w=720&im_q=highq",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/591f7acf-c271-4762-89ab-e8e3edb4115b.jpeg?im_w=720&im_q=highq"

        ],
        location:"Stay in Incredebel's house",
        hostedby:"Hosted by Lisa",
        price:"$110 per guest",
    },
  ]
  return (
    <div>
      <div className="c">
            {cardsitems.map((item,index) => 
            (
              <Card key={index} object={item}  />
            ))}
      </div>
    </div>
  )
}

export default Cards_grid;