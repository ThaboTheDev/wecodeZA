import React from 'react';
import "./viewAccount.css"

function ViewAccount() {
    return (
        <div className='accountViewMain'>
            <h1 className='profileheader'>User Profile</h1>
            <div className='sections'>
                <section className='leftSide'>
                    <div className='topPart'>
                        <div className='half1'>
                            <h1 className='topPartHeader'>Sean Kembo</h1>
                            <p className='info'>@Username</p>
                            <p className='info'>WeThinkCode Student</p>
                            <p className='info'>email@emailadress.com</p>
                        </div>
                        <button type="button" className='editbutton'>Edit</button>
                    </div>
                    <div className='middlePart'>
                        <h1 className='topPartHeader'>Stats</h1>
                        <div className='stats'>
                            <div className='stat'>
                                <p>Followers</p>
                                <p>200</p>
                            </div>
                            <div className='stat'>
                                <p>Following</p>
                                <p>200</p>
                            </div>
                            <div className='stat'>
                                <p>Posts</p>
                                <p>200</p>
                            </div>
                            <div className='stat'>
                                <p>Likes</p>
                                <p>200</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottomPart'>
                        <h1 className='topPartHeader'>Bio</h1>
                        <p className='bio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, blanditiis nostrum repellendus ad quia minus ipsam fugit culpa mollitia suscipit, earum nulla enim voluptatum odit? Pariatur libero impedit repellat corrupti.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed maxime nisi maiores hic quia esse aut adipisci eos tenetur dolorum? Praesentium reprehenderit provident eveniet dignissimos tempore. Id debitis fugit rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis obcaecati adipisci magnam, autem illo ea doloremque vitae et odit, ipsa tempora nulla, fugit excepturi quibusdam similique facere expedita voluptates?</p>
                    </div>
                </section>
                <section className='rightSide'>
                    <div className='account'>
                        <p className='rightSideHeder'>Account Settings</p>
                        <p className='rightSideInfo'>Details about your personal info</p>
                    </div>
                    <div className='delete'>
                        <p className='rightSideHeder'>Delete Account</p>
                        <p className='rightSideInfo'>Delete your account and info</p>
                    </div>
                    <div className='password'>
                    <p className='rightSideHeder'>Password & Security</p>
                    <p className='rightSideInfo'>Change and view your password</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ViewAccount;