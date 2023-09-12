import React from 'react';
import Card from './Card';
import { faQuestion, faUserAstronaut, faUserNinja, faUserMd, faUserTie, faUserSecret } from '@fortawesome/free-solid-svg-icons';

const WhoThisWebsiteFor = () => {
    const cardData = [
        {icon: faUserSecret, description: 'Secret Agent', description2: 'It is does not matter who you are. Everybody can find a better version of themselfe in BJJ!'},
        {icon: faUserAstronaut, description: 'Astronaut', description2: 'It is does not matter who you are. Everybody can find a better version of themselfe in BJJ!'},
        {icon: faUserNinja, description: 'Ninja', description2: 'It is does not matter who you are. Everybody can find a better version of themselfe in BJJ!'},
        {icon: faUserMd, description: 'Doctor', description2: 'It is does not matter who you are. Everybody can find a better version of themselfe in BJJ!'},
        {icon: faUserTie, description: 'Businessman', description2: 'It is does not matter who you are. Everybody can find a better version of themselfe in BJJ!'},
        {icon: faQuestion, description: 'You', description2: 'It is does not matter who you are. Everybody can find a better version of themselfe in BJJ!'}
    ];

    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 mt-56">
            <h2 className="text-4xl text-white font-bold mb-6 text-center mb-24">Who This Community For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center mt-16">
                {cardData.map((card, index) => (
                    <Card key={index} icon={card.icon} description={card.description} description2={card.description2}/>
                ))}
            </div>
        </div>
    );
}

export default WhoThisWebsiteFor;